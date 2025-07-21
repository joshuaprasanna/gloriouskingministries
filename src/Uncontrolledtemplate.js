import { useRef } from "react";

export default function Uncontrolled() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);
  const selectclass = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
    console.log("Select class:", selectclass.current.value);
    
  }

  return (
    <form onSubmit={handleSubmit}>

        <h2>Bio </h2>
      <label>
        <p>Name:</p>
        <input ref={inputRef} type="text" />
      </label>
      <br>
      </br>
      <label>
        <p>Favorite color:</p>
        <select ref={selectRef}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label>
      <br></br>
      <label>
        <p>class:</p>
        <select ref={selectclass}>
          <option value="1">first</option>
          <option value="2">second</option>
          <option value="3">third</option>
        </select>
      </label>
      <br>
      </br>
      <label>
        Do you like React?
        <input type="checkbox" ref={checkboxRef} />
      </label>
      <br>
      </br> <br>
      </br>
      <button type="submit">Submit</button>
    </form>
  );
}