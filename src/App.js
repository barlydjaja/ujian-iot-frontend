import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-54-169-148-84.ap-southeast-1.compute.amazonaws.com:8080/"
      )
      .then((res) => {
        setData(res.data[0]);
        console.log(typeof res.data[0]);
        console.log(res.data[0]);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Ini Adalah applikasi buatan Barly Joshua Djaja - 2201925651</h1>
        <p>Aplikasi ini dibuat untuk kebutuhan ujian IOT nomor 1</p>
        <p>Dibawah ini adalah api yang kita hit ke sisi backend</p>
        <p>
          <strong>/api/database</strong>
        </p>
        <p>return dari endpoint ini berupa</p>
        <div style={{ border: "2px solid black" }}>
          <div style={{ color: "green" }}>{"typing..." && data.message}</div>
          <div style={{ color: "green" }}>
            {"typing..." && data.student_name}
          </div>
          <div style={{ color: "green" }}>{"typing..." && data.student_id}</div>
          <div style={{ color: "green" }}>
            {"typing..." && data.student_major}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
