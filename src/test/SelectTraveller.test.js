import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectTraveller from '../SelectTraveller';

describe('SelectTraveller', () => {
  test('renders selectors for adults, children, infants', () => {
    render(<SelectTraveller />);
    
    const adultsSelector = screen.getByLabelText('adults');
    const childrenSelector = screen.getByLabelText('Children');
    const infantsSelector = screen.getByLabelText('Infants');
    
    expect(adultsSelector).toBeInTheDocument();
    expect(childrenSelector).toBeInTheDocument();    
    expect(infantsSelector).toBeInTheDocument();
  });

  test('updates state when adult selector changes', () => {
    const setState = jest.fn();
    render(<SelectTraveller state={{}} setState={setState} />);
    
    const adultsSelector = screen.getByLabelText('adults');
    userEvent.clear(adultsSelector);
    userEvent.type(adultsSelector, '3');
    
    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      noOfAdults: 3
    }));
  });

  test('updates state when children selector changes', () => {
    const setState = jest.fn();
    render(<SelectTraveller state={{}} setState={setState} />);
    
    const childrenSelector = screen.getByLabelText('Children');
    userEvent.clear(childrenSelector);
    userEvent.type(childrenSelector, '2');
    
    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      noOfChildren: 2
    }));
  });

  test('updates state when infants selector changes', () => {
    const setState = jest.fn();
    render(<SelectTraveller state={{}} setState={setState} />);
    
    const infantsSelector = screen.getByLabelText('Infants');
    userEvent.clear(infantsSelector);
    userEvent.type(infantsSelector, '1');
    
    expect(setState).toHaveBeenCalledWith(expect.objectContaining({
      noOfInfants: 1
    }));
  });

  test('disables incrementing selectors past total', () => {
    const setState = jest.fn();
    render(<SelectTraveller state={{noOfAdults: 9}} setState={setState} />);
    
    const adultsSelector = screen.getByLabelText('adults');
    userEvent.clear(adultsSelector);
    userEvent.type(adultsSelector, '10');
    
    expect(setState).not.toHaveBeenCalled();
    expect(adultsSelector).toHaveValue(9);
  });
});
