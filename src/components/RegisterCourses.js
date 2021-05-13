import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const RegisterCourses = () => {
  const [data, setData] = useState("");
  let history = useHistory();

  const fakeData = [
    { id: 1, courseName: "Computer Network" },
    { id: 2, courseName: "Computer Architecture" },
    { id: 3, courseName: "AI" },
  ];

  useEffect(() => {
    const getCourses = async () => {
      const result = await axios.get("localhost:5000/cousres");
      setData(result.data);
    };

    getCourses();
  }, []);

  return (
    <div style={{ padding: "50px 80px" }}>
      <h1>Register Courses</h1>
      {data ||
        fakeData.map((item) => (
          <div style={{ margin: "10px 0" }}>
            <input type="checkbox" name={item.courseName} id={item.id} />
            <label htmlFor={item.id} style={{ marginLeft: "10px" }}>
              {item.courseName}
            </label>
          </div>
        ))}

      <button
        onClick={() => history.push("/user")}
        style={{ padding: "5px 10px" }}
      >
        See student information
      </button>
    </div>
  );
};

export default RegisterCourses;
