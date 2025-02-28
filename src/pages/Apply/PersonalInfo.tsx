import { ChangeEvent } from "react";

interface PersonalInfoProps {
  studentNumber: string;
  password: string;
  name: string;
  major: string;
  email: string;
  phoneNumber: string;
  onStudentNumberChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onMajorChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
}

export default function PersonalInfo({
  studentNumber,
  password,
  name,
  major,
  email,
  phoneNumber,
  onStudentNumberChange,
  onPasswordChange,
  onNameChange,
  onMajorChange,
  onEmailChange,
  onPhoneNumberChange,
}: PersonalInfoProps) {
  return (
    <div>
      <div>
        <label>
          학번:
          <input
            type="text"
            value={studentNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onStudentNumberChange(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onPasswordChange(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onNameChange(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          전공:
          <input
            type="text"
            value={major}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onMajorChange(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          이메일:
          <input
            type="text"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onEmailChange(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          전화번호:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onPhoneNumberChange(e.target.value)
            }
          />
        </label>
      </div>
    </div>
  );
}
