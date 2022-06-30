import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UserList.module.css";
import { useState, useEffect } from "react";

const UsersList = (props) => {
  const [state, setState] = useState([]);
  
  useEffect(() => {
    setState([...props.userData]);
  }, [props.userData]);

  const deleteUserHandler = (userId) => {
    let users = state.filter((user) => user.id !== userId);
    setState([...users]);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {state.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.age} years old){" "}
            <Button
              className={classes.button}
              onClick={() => deleteUserHandler(user.id) }
            >
              {" "}
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
