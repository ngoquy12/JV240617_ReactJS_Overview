import React from "react";
import Header from "./Header";

export default function ListUser() {
  const users = [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      address: "Hà Nội, VN",
    },
    {
      id: 2,
      userName: "Yến DT",
      gender: "Nữ",
      address: "Hà Nội, VN",
    },
    {
      id: 3,
      userName: "Lê Văn Nam",
      gender: "Khác",
      address: "Hải Phòng, VN",
    },
    {
      id: 4,
      userName: "Lê Văn Nam",
      gender: "Khác",
      address: "Hải Phòng, VN",
    },
    {
      id: 5,
      userName: "Lê Văn Nam",
      gender: "Khác",
      address: "Hải Phòng, VN",
    },
  ];
  return (
    <>
      <div id="list-user-header">
        <Header />
      </div>
      <h3>List User</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
