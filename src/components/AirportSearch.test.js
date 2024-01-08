/* eslint-disable no-restricted-globals */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AirportSearch from '../AirportSearch';

describe("AirportSearch", () => {
  const defaultProps = {
    label: "Airport",
    value: "",
    setValue: jest.fn(),
  };

  test("renders with default props", () => {
    render(<AirportSearch {...defaultProps} />);
    // eslint-disable-next-line no-restricted-globals
    expect(screen.getByLabelText("Airport")).toBeInTheDocument();
  });

  test("renders autocomplete options from props", () => {
    const options = [{ id: "LAX" }, { id: "SFO" }];
    render(<AirportSearch {...defaultProps} options={options} />);
    expect(screen.getByText("LAX")).toBeInTheDocument();
    expect(screen.getByText("SFO")).toBeInTheDocument();
  });

  test("invokes onChange callback when value changes", () => {
    render(<AirportSearch {...defaultProps} />);
    fireEvent.change(screen.getByLabelText("Airport"), {
      target: { value: "LAX" },
    });
    expect(defaultProps.setValue).toHaveBeenCalledWith("LAX");
  });

  test("invokes onSelect callback when option selected", () => {
    render(<AirportSearch {...defaultProps} />);
    fireEvent.select(screen.getByLabelText("Airport"), {
      target: { value: "LAX" },
    });
    expect(defaultProps.setValue).toHaveBeenCalledWith("LAX");
  });
});
