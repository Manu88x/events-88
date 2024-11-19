import React, { useState } from 'react';

function App() {
  // State to track if the pepperoni checkbox is checked
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  // Toggle function for the checkbox
  const togglePepperoni = (e) => {
    setPepperoniIsChecked(e.target.checked);
  };

  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      {/* Checkbox for selecting pepperoni */}
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {/* Conditionally render pepperoni if the checkbox is checked */}
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;
