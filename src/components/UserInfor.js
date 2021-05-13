import axios from "axios";
import React, { useEffect, useState } from "react";

const UserInfor = () => {
  const [data, setData] = useState("");
  const [courses, setCourse] = useState("");

  useEffect(() => {
    const getCourses = async () => {
      const result = await axios.get("localhost:5000/cousres");
      setCourse(result.data);
    };

    getCourses();
  }, []);

  useEffect(() => {
    const getUserInfor = async () => {
      const result = await axios.get("localhost:5000/userinfor");
      setData(result.data);
    };

    getUserInfor();
  }, []);

  return (
    <div style={{ padding: "50px 80px" }}>
      <h1>User Information</h1>
      <table>
        <tr>
          <td>Student Id:</td>
          <td>{data.Id || "ititiu18221"}</td>
        </tr>
        <tr>
          <td>Student Name:</td>
          <td>{data.Name || "Tran Tien Dat"}</td>
        </tr>
        <tr>
          <td>Registed Courses:</td>
          <td>{(data && data.map((item) => item.courseName)) || "AI"}</td>
        </tr>
      </table>
    </div>
  );
};

export default UserInfor;
