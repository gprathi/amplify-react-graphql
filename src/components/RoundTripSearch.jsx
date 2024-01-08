import React from "react";
import { Input, Flex, Button,  } from "@aws-amplify/ui-react";
import AirportSearch from "../components/AirportSearch";
import "../styles/flightsearch.css";
import SelectTraveller from "../components/SelectTraveller";


export default function Home(props) {
  const [fromAirport, setFromAirport] = React.useState("");
  const [toAirport, setToAirport] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [state, setState] = React.useState({
    noOfAdults: 0,
    noOfChildren: 0,
    noOfInfants: 0,
    noOfInfantWithSeat: 0,
    travelClass: "Economy",
  });

  const totalPax = () => {
    return (
      state.noOfAdults +
      state.noOfChildren +
      state.noOfInfants +
      state.noOfInfantWithSeat
    );
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = () => {
    console.log(state, toAirport, fromAirport, departureDate, returnDate);
    // props.setShowResults(true);
  };

  return (
   

      <Flex justifyContent={"space-between"}>
        <AirportSearch
          label="Leaving From"
          value={fromAirport}
          setValue={setFromAirport}
        />
        <AirportSearch
          label="Going To"
          value={toAirport}
          setValue={setToAirport}
        />
        <Flex gap="small">
          <Input
            id="departing"
            type="date"
            size="small"
            width="50%"
            height="15%"
            padding="0.8rem"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
          />
          <Input
            id="returning"
            type="date"
            size="small"
            width="50%"
            height="15%"
            padding="0.8rem"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
          />
        </Flex>
        <>
          <Input
            defaultValue={"Travellers " + totalPax()}
            id="Travelers"
            onClick={toggleVisibility}
            size="small"
            width="10%"
            height="15%"
          />
          {isVisible && (
            <SelectTraveller
              toggleVisibility={toggleVisibility}
              state={state}
              setState={setState}
            />
          )}
        </>
        <Button
          onClick={handleSubmit}
          size="small"
          variation="primary"
          type="submit"
          height="15%"
        >
          Search
        </Button>
      </Flex>

  );
}
