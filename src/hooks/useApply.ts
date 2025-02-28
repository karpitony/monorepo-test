import { useState, useEffect } from "react";
import {
  getApplyQuestions,
  postApply,
  postApplySave,
  postApplyLoad,
  postApplySubmit,
} from "@/services/apply";
import {
  ApplyGETResponse,
  ApplyPOSTRequest,
  ApplyPOSTResponse,
  ApplyLoadPOSTRequest,
  ApplyLoadPOSTResponse,
  ApplySavePOSTRequest,
  ApplySavePOSTResponse,
  ApplySubmitPOSTRequest,
  ApplySubmitPOSTResponse,

  ApplyAnswer,
} from "@/models/apply";

export const useApplyQuestions = () => {
  const [data, setData] = useState<ApplyGETResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getApplyQuestions()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export const useLoadApply = () => {
  return async (
    data: ApplyLoadPOSTRequest
  ): Promise<ApplyLoadPOSTResponse> => {
    return await postApplyLoad(data);
  };
};


/**
 * 첫 등록 공통 로직
 * studentNumber와 password를 이용해 applyId를 받아와 반환
 */
const createApply = async ({
  studentNumber,
  password,
}: ApplyPOSTRequest): Promise<number> => {
  const response: ApplyPOSTResponse = await postApply({ 
    studentNumber, 
    password 
  } as ApplyPOSTRequest);
  
  if (response.data && response.data.applyId !== undefined) {
    return response.data.applyId;
  }
  throw new Error("응답에 applyId가 없습니다.");
};

interface UseApplyOptionsBase {
  isFirst: boolean;
  studentNumber: string;
  password: string;
}

// 조건부 타입: T가 true이면 applyData에서 applyId를 제거(Omit), 아니면 전체 타입(ApplyAnswer) 사용
type ApplyDataConditional<T extends boolean> = T extends true
  ? Omit<ApplyAnswer, "applyId">
  : ApplyAnswer;

// 제네릭 인터페이스를 사용하여 isFirst 값에 따라 applyData 타입이 결정됨
export interface UseApplyOptions<T extends boolean = false> extends UseApplyOptionsBase {
  applyData: ApplyDataConditional<T>;
}

export const useSaveApply = () => {
  const [applyId, setApplyId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // 오버로드 정의: 첫 등록과 기존 등록에 대해 타입을 다르게 정의
  async function saveApply(
    data: Partial<ApplySavePOSTRequest> & UseApplyOptions<true>
  ): Promise<ApplySavePOSTResponse>;
  async function saveApply(
    data: Partial<ApplySavePOSTRequest> & UseApplyOptions<false>
  ): Promise<ApplySavePOSTResponse>;
  async function saveApply(
    data: Partial<ApplySavePOSTRequest> & UseApplyOptions<boolean>
  ): Promise<ApplySavePOSTResponse> {
    setLoading(true);
    try {
      if (data.isFirst === true) {
        if (!data.studentNumber || !data.password || !data.applyData) {
          throw new Error(
            "isFirst가 true인 경우 studentNumber, password, applyData가 필요합니다."
          );
        }
        // 공통 로직으로 applyId 받아오기
        const newApplyId = await createApply({
          studentNumber: data.studentNumber,
          password: data.password,
        } as ApplyPOSTRequest);
        setApplyId(newApplyId);
        const payload: ApplySavePOSTRequest = {
          applyId: newApplyId,
          ...data.applyData,
        };
        return await postApplySave(payload);
      } else {
        // 기존 applyId를 사용해 바로 저장
        return await postApplySave(data as ApplySavePOSTRequest);
      }
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { saveApply, applyId, loading, error };
};

export const useSubmitApply = () => {
  const [applyId, setApplyId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // 오버로드 정의
  async function submitApply(
    data: Partial<ApplySubmitPOSTRequest> & UseApplyOptions<true>
  ): Promise<ApplySubmitPOSTResponse>;
  async function submitApply(
    data: Partial<ApplySubmitPOSTRequest> & UseApplyOptions<false>
  ): Promise<ApplySubmitPOSTResponse>;
  async function submitApply(
    data: Partial<ApplySubmitPOSTRequest> & UseApplyOptions<boolean>
  ): Promise<ApplySubmitPOSTResponse> {
    setLoading(true);
    try {
      if (data.isFirst) {
        if (!data.studentNumber || !data.password || !data.applyData) {
          throw new Error(
            "isFirst가 true인 경우 studentNumber, password, applyData가 필요합니다."
          );
        }
        // 공통 로직으로 applyId 받아오기
        const newApplyId = await createApply({
          studentNumber: data.studentNumber,
          password: data.password,
        } as ApplyPOSTRequest);
        setApplyId(newApplyId);
        const payload: ApplySubmitPOSTRequest = {
          applyId: newApplyId,
          ...data.applyData,
        };
        return await postApplySubmit(payload);
      } else {
        // 기존 applyId를 사용해 바로 제출
        return await postApplySubmit(data as ApplySubmitPOSTRequest);
      }
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitApply, applyId, loading, error };
};
