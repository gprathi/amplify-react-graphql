import { Card, Flex, Text, StepperField, Button, SelectField } from "@aws-amplify/ui-react";
import { useState } from "react";

export default function SelectTraveller(props) {

    const {state, setState, toggleVisibility} = props;


  const [total, setTotal] = useState(9);
 

  const handleOnStepChange = (newValue) => {
      setState({
          ...state,
          noOfAdults: newValue,
        });
    setTotal(total - 1);
    }

  const handleOnChildrenChange = (newValue) => {
      setState({
          ...state,
          noOfChildren: newValue,
        });
    setTotal(total - 1);
    }

  const handleOnInfantsChange = (newValue) => {
    setState({
      ...state,
      noOfInfants: newValue,
    });
    setTotal(total - 1);

  };  

  return (

    
    <Card  variation="elevated">
      <Flex direction="column" gap="xs">
        <Flex direction="row" justifyContent="space-between">
          <Text color="font.tertiary">Adults</Text>
          <Flex>
            <StepperField
              name="adults"
              label="adults"
              min={1}
              max={total}
              step={1}
              value={state.noOfAdults}
              onStepChange={handleOnStepChange}
              defaultValue={1}
              labelHidden
            />
          </Flex>
        </Flex>
        <Flex direction="row" justifyContent="space-between">
          <Text color="font.tertiary">Children (Ages 2 to 17)</Text>
          <Flex>
            <StepperField
              name="children"
              label="Children"
              min={1}
              max={total}
              step={1}
              value={state.noOfChildren}
              onStepChange={handleOnChildrenChange}
              defaultValue={0}
              labelHidden
            />
          </Flex>
        </Flex>
        <Flex direction="row" justifyContent="space-between">
          <Text color="font.tertiary">Infants in Lap( Younger than 2)</Text>
          <Flex>
            <StepperField
              name="infants"
              label="Infants"
              min={1}
              max={state.noOfAdults}
              step={1}
              value={state.noOfInfants}
              onStepChange={handleOnInfantsChange}
              defaultValue={0}
              labelHidden
            />
          </Flex>
        </Flex>
        <SelectField
      label="travel class"
      labelHidden
      placeholder="Select a class"
      value={state.travelClass}
      size="small"
      onChange={(e) => setState({
        ...state,
        travelClass: e.target.value,
      })}
    >
      <option value="x">Economy</option>
      <option value="y">Premium Economy</option>
      <option value="z">Business</option>
      <option value="a">First Class</option>
    </SelectField>


        <Flex justifyContent="flex-end">
          <Button variation="primary" onClick={toggleVisibility}>Done</Button>
        </Flex>
      </Flex>
    </Card>

  );
}









