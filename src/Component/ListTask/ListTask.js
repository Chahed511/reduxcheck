import React, { useState } from "react";
import { ToggleButtonGroup, ListGroup, ToggleButton, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDone,
  deleteTask,
  doneTask,
  filterUndone,
  allTasks
} from "../../Redux/Actions/Actions";
import "../ListTask/ListTask.css";
import * as Icon from 'react-bootstrap-icons';
import Edit from "../EditTask/Edit";

const ListTask = () => {

  const [value, setValue] = useState([1, 2, 3]);
  const dispatch = useDispatch();
  const handleChange = (val) => setValue(val);
  const todo = useSelector((state) => state.TodoReducer.Task);
  return (
    <div className="listitem">
      <h1>To Do List</h1>
      <ToggleButtonGroup className="btncheck" type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1} className="btn1" onClick={() => dispatch(filterDone(todo))}> Done Task</ToggleButton>
        <ToggleButton value={2} className="btn2" onClick={() => dispatch(filterUndone(todo))}> Undone Task </ToggleButton>
        <ToggleButton value={3} className="btn3" onClick={() => dispatch(allTasks(todo))}>All Tasks</ToggleButton>
      </ToggleButtonGroup>

      <div className="tasks">

        <ul>
          {todo.map((el) => (
            <div key={el.id}>

              <ListGroup horizontal key={el.id} className="task">
                <ListGroup.Item
                  className="tasktext"
                  style={el.isDone ? { textDecoration: "line-through" } : null}
                >
                  {el.task}
                </ListGroup.Item>
                <Edit el={el} />

                <Button
                  className="btndel"
                  variant="secondary"
                  fontSize="large"
                  onClick={() => dispatch(deleteTask(el.id))}
                >
                  <Icon.TrashFill color="white" width="1.5em" height="1.5em" variant="primary">  </Icon.TrashFill>
                    Delete
                  </Button>

                <div>
                  <Button
                    className="btndone"
                    variant="secondary"
                    onClick={() => dispatch(doneTask(el.id))}
                  >

                    {el.isDone ? " Done" : "Not Done "}
                    <Icon.Check2All color="white" width="1.5em" height="1.5em" variant="primary">  Done </Icon.Check2All>
                  </Button>

                </div>
              </ListGroup>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTask;
