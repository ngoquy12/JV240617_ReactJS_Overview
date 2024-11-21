// Phạm vi import các thư viện , file, hàm,.... <bắt đầu>
import React from "react";

// Phạm vi import các thư viện , file, hàm,.... <kết thúc>

export default function Header() {
  // Phạm vi viết code js <bắt đầu>
  const userName = "Nguyễn Văn A";
  const age = 21;

  const headerStyle = { color: "red", fontSize: 30 };
  // Phạm vi viết code js <kết thúc>

  // là nơi trả về các đoạn mã JSX
  return (
    <React.Fragment>
      <header className="header" style={headerStyle}>
        Header Component
      </header>
      <h3 className="color-blue">UserName: {userName}</h3>
      <h3>Age: {age}</h3>
    </React.Fragment>
  );
}
