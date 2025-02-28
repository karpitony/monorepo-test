import { z } from "zod";

export const personalInfoSchema = z.object({
  studentNumber: z.string().min(1, "학번은 필수 입력사항입니다."),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  name: z.string().min(1, "이름을 입력해주세요."),
  major: z.string().min(1, "학과를 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phoneNumber: z.string().min(10, "전화번호를 올바르게 입력해주세요."),
});

export function validatePersonalInfo(data: unknown) {
  return personalInfoSchema.safeParse(data);
}
