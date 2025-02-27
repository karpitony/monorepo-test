enum ApiErrorMessages {
  ALREADY_SUBMITTED = "이미 제출한 사용자입니다.",
  APPLY_NOT_FOUND = "지원서를 찾을 수 없습니다.",
  QUESTION_NOT_FOUND = "질문을 찾을 수 없습니다.",
  ANSWER_NOT_FOUND = "답변을 찾을 수 없습니다.",
  OPTION_NOT_FOUND = "선택지를 찾을 수 없습니다.",
}

// 이거 아직 다 작성 안된거임!! 
// swagger 보고 enum 채울 예정
enum Track {
  UNION = "UNION",
  GAMING_VIDEO = "GAMING_VIDEO",
}

interface Choice {
  choicedId: number;
  content: string;
}

interface ApplyQuestion {
  questionId: number;
  track: Track;
  isRequired: boolean;
  content: string;
  maxLength: number;
  type: "CHOICE" | "ESSAY";
  isDuplicated: boolean;
  priority: number;
  choices: Choice[] | null;
}

// 기본적인 Api 요청 형태
interface ApiRequest {
  studentNumber: string;
  password: string;
}

// 기본적인 Api 응답 형태
interface ApiResponse<T = unknown> {
  status: number;
  message: ApiErrorMessages | "요청이 성공했습니다." | string;
  data?: T;
}

// apply에 GET 응답, POST 요청, POST 응답
export type ApplyGETResponse = ApiResponse<ApplyQuestion[]>; 
export type ApplyPOSTRequest = ApiRequest;
export type ApplyPOSTResponse = ApiResponse<{ applyId: number }>;

interface Answer {
  questionId: number;
  content: string | number[];
}

interface ApplyAnswer {
  applyId: number;
  name: string;
  major: string;
  phoneNumber: string;
  email: string;
  track: Track;
  answers: Answer[];
}

// load응답을 위한 타입 확장
interface ApplyAnswerLoad extends ApplyAnswer {
  status: string;
  updatedAt: string;
}

// apply/save에 POST 요청, 응답
export type ApplySavePOSTRequest = ApplyAnswer;
export type ApplySavePOSTResponse = ApiResponse<{ applyId: number }>;
// apply/load에 POST 요청, 응답
export type ApplyLoadPOSTRequest = ApiRequest;
export type ApplyLoadPOSTResponse = ApiResponse<ApplyAnswerLoad>;
// apply/submit에 POST 요청, 응답
export type ApplySubmitPOSTRequest = ApplyAnswer;
export type ApplySubmitPOSTResponse = ApiResponse<{ applyId: number }>;