import { useState } from 'react';
import ApplyBox from './ApplyBox';
import ApplyLogin from './ApplyLogin';

type ChoiceType = " " | "새 지원서" | "불러오기";

export default function Apply() {
  const [choice, setChoice] = useState<ChoiceType>(" ");
  const [credentials, setCredentials] = useState<{ studentNumber: string; password: string } | null>(null);

  const handleBack = () => {
    if (credentials) {
      setCredentials(null);
    } else {
      setChoice(" ");
    }
  };

  if (choice === " ") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "100px" }}>
        <h1>Apply Page</h1>
        <h2>지원서 작성 방법을 선택해주세요</h2>
        <button onClick={() => setChoice("새 지원서")}>새 지원서 작성</button>
        <button onClick={() => setChoice("불러오기")}>지원서 불러오기</button>
      </div>
    );
  } else {
    if (!credentials) {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "100px" }}>
          <button onClick={handleBack} style={{ alignSelf: "flex-start", marginBottom: "16px" }}>돌아가기</button>
          <ApplyLogin
            isFirst={choice === "새 지원서"}
            onSubmit={(studentNumber, password) => {
              setCredentials({ studentNumber, password });
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "100px" }}>
          <button onClick={handleBack} style={{ alignSelf: "flex-start", marginBottom: "16px" }}>돌아가기</button>
          <ApplyBox
            propStudentNumber={credentials.studentNumber}
            propPassword={credentials.password}
          />
        </div>
      );
    }
  }
}
