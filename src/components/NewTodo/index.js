import React, { useState } from "react";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log("submit -", value);

    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);

    erase();
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <>
      <input
        className="new-todo"
        placeholder="o que precisa ser feito?"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default NewTodo;
