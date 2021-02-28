import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../AddTask/AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/Actions";

const AddTask = () => {
  const [Data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    if (Data) {
      dispatch(addTask({ id: Math.random(), task: Data, isDone: false }));
      setData("");
    }
    else  {
      alert ("cant add emty task")
    }
    };
  

  const dispatch = useDispatch();

  return (
    <div className="addtsk">
       <div className="add">
      <InputGroup className="mb-3">
      <InputGroup.Append>
          <Button
            className="btnadd"
            onClick={handleAdd}
            variant="outline-secondary"
          >
           Add
          </Button>
        </InputGroup.Append>
        <FormControl
          onChange={handleChange}
          value={Data}
          placeholder="Enter New Task "
          aria-label="Enter New Task "
          aria-describedby="basic-addon2"
        />
        
      </InputGroup>
    </div>
    </div>
  );
};

export default AddTask;
