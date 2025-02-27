enum ApiErrorMessages {
  ALREADY_SUBMITTED = "이미 제출한 사용자입니다.",
  APPLY_NOT_FOUND = "지원서를 찾을 수 없습니다.",
  QUESTION_NOT_FOUND = "질문을 찾을 수 없습니다.",
  ANSWER_NOT_FOUND = "답변을 찾을 수 없습니다.",
  OPTION_NOT_FOUND = "선택지를 찾을 수 없습니다.",
}

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

interface ApiResponse<T = unknown> {
  status: number;
  message: ApiErrorMessages | "요청이 성공했습니다." | string;
  data?: T;
}

interface ApiRequest {
  studentNumber: string;
  password: string;
}

// apply에 GET 응답, POST 요청, POST 응답
export type ApplyGETResponse = ApiResponse<ApplyQuestion[]>; 
export type ApplyPOSTRequest = ApiRequest;
export type ApplyPOSTResponse = ApiResponse<{ applyId: number }>;

