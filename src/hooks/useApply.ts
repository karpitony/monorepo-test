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
  ApplySavePOSTRequest,
  ApplySubmitPOSTRequest,

  ApplyAnswer
} from "@/models/apply";

export const useApplyQuestions = () => {
  const [data, setData] = useState<ApplyGETResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApplyQuestions()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

interface UseFirstApplyAutoProps {
  studentNumber: string;
  password: string;
  applyData: ApplyAnswer;
}

export const useFirstApplyAuto = ({
  studentNumber,
  password,
  applyData,
}: UseFirstApplyAutoProps) => {
  const [applyId, setApplyId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createApplyAndSave = async (
    studentNumber: string,
    password: string,
    applyData: Omit<ApplyAnswer, 'applyId'>
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response: ApplyPOSTResponse = await postApply({ 
        studentNumber, 
        password 
      } as ApplyPOSTRequest);

      if (response.data && response.data.applyId !== undefined) {
        const responseApplyId = response.data.applyId;
        setApplyId(responseApplyId);
        if (applyData) {
          const savePayload: ApplySavePOSTRequest = { 
            applyId: responseApplyId, 
            ...applyData 
          };
          await postApplySave(savePayload);
        }
        return responseApplyId;
      } else {
        throw new Error("응답에 applyId가 없습니다.");
      }
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (studentNumber && password) {
      createApplyAndSave(studentNumber, password, applyData);
    }
  }, [studentNumber, password, applyData]);

  return { applyId, loading, error };
};

export const useLoadApply = () => {
  return async (data: ApplyLoadPOSTRequest) => {
    return await postApplyLoad(data);
  };
};

export const useSaveApply = () => {
  return async (data: ApplySavePOSTRequest) => {
    return await postApplySave(data);
  };
};

export const useSubmitApply = () => {
  return async (data: ApplySubmitPOSTRequest) => {
    return await postApplySubmit(data);
  };
};
