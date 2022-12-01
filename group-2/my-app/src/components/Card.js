import { useState } from "react";
import "./Card.css";
import CompletedButton from "./Completed";

function Card(props) {
  const [isCompleted, setIsCompleted] = useState("not completed");

  const changeStatus = (status) => {
    if (status == "completed") {
      setIsCompleted("not completed");
    } else {
      setIsCompleted("completed");
    }
  };
  return (
    <>
      {props.urutan % 2 == 0 ? (
        <div className="card card-2">
          <h2 className="card__title">{props.title}</h2>
          <CompletedButton status={isCompleted} changeStatus={changeStatus} />
        </div>
      ) : (
        <div className="card card-1">
          <h2 className="card__title">{props.title}</h2>
          <CompletedButton status={isCompleted} changeStatus={changeStatus} />
        </div>
      )}
    </>
  );
}

export default Card;
