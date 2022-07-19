import React from "react";

export default function Form() {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  function handleOnChange(e) {
    const { name, value } = e.target;
    const newData = { ...data, [name]: value };
    setData(newData);
    setErrors(validate(newData));
  }
  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleOnChange}
          value={data.username}
          className={errors.username ? "danger" : ""}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={data.password}
          className={errors.password ? "danger" : ""}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
        <input type="button" value="Add" />
      </div>
    </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}
