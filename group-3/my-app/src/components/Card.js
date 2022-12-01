import { useState } from "react";
import "./Card.css";
import CompletedButton from "./Completed";

function Card(props) {
  const [isCompleted, setIsCompleted] = useState("not completed");

  const changeStatus = (status) => {
    if (status == "not completed") {
      setIsCompleted("completed");
    } else {
      setIsCompleted("not completed");
    }
  };
  return (
    <>
      {props.urutan % 2 === 0 ? (
        <div style={{ backgroundColor: "red" }} className="card">
          <h2 className="card__title">{props.title}</h2>
          <CompletedButton status={isCompleted} changeStatus={changeStatus} />
        </div>
      ) : (
        <div style={{ backgroundColor: "blue" }} className="card">
          <h2 className="card__title">{props.title}</h2>
          <CompletedButton status={isCompleted} changeStatus={changeStatus} />
        </div>
      )}
    </>
  );
}

export default Card;
