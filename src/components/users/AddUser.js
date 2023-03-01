import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";

const AddUser = (props) => {
  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const usernameValue = usernameRef.current.value;
    const ageValue = ageRef.current.value;
    if (usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(usernameValue, ageValue);
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={usernameRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
