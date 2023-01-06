import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import "./CourseGoalItem.css";

const CourseGoalItem = ({
  text,
  id,
  deleteHandler,
  checkHandler,
  completed,
  editHandler,
}) => {
  const class1 = "text";
  const class2 = "textComplete";
  return (
    <li className="goal-item">
      <div className={completed ? `${class1} ${class2} ` : `${class1} `}>
        {" "}
        {text}
      </div>
      <div className="actions">
        <span onClick={() => checkHandler(id)}>
          <FontAwesomeIcon icon={faCheckSquare} />
        </span>
        <span onClick={() => editHandler(id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span onClick={() => deleteHandler(id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    </li>
  );
};
export default CourseGoalItem;
