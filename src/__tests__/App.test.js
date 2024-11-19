import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent for simulating user actions
import App from '../App';
import '@testing-library/jest-dom'; // for extending jest with matchers like .toBeInTheDocument()

// Test the initial state of the page
test('pizza checkbox is initially unchecked', () => {
  render(<App />);

  // Find the checkbox by its label
  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });

  // Assert that it is not checked initially
  expect(addPepperoni).not.toBeChecked();
});

test('toppings list initially contains only cheese', () => {
  render(<App />);

  // Assert that there is only one list item initially
  expect(screen.getAllByRole('listitem').length).toBe(1);

  // Assert that "Cheese" is in the list
  expect(screen.getByText('Cheese')).toBeInTheDocument();

  // Assert that "Pepperoni" is not in the list
  expect(screen.queryByText('Pepperoni')).not.toBeInTheDocument();
});

// Test the effect of clicking the checkbox
test('checkbox appears as checked when user clicks it', () => {
  render(<App />);

  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });

  // Simulate a user click on the checkbox
  userEvent.click(addPepperoni);

  // Assert that the checkbox is now checked
  expect(addPepperoni).toBeChecked();
});

test('topping appears in toppings list when checked', () => {
  render(<App />);

  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });

  // Simulate a click to add pepperoni
  userEvent.click(addPepperoni);

  // Assert that the list now contains two items
  expect(screen.getAllByRole('listitem').length).toBe(2);

  // Assert that "Pepperoni" is now in the list
  expect(screen.getByText('Pepperoni')).toBeInTheDocument();
});

// Test the effect of clicking the checkbox a second time (toggling)
test('selected topping disappears when checked a second time', () => {
  render(<App />);

  const addPepperoni = screen.getByRole('checkbox', { name: /add pepperoni/i });

  // First click to add pepperoni
  userEvent.click(addPepperoni);
  expect(screen.getByText('Pepperoni')).toBeInTheDocument();

  // Second click to remove pepperoni
  userEvent.click(addPepperoni);

  // Assert that "Pepperoni" is no longer in the document
  expect(screen.queryByText('Pepperoni')).not.toBeInTheDocument();
});
