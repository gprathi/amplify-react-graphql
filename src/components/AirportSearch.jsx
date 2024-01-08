
import { Autocomplete } from "@aws-amplify/ui-react";
import { airports } from "../data/flight/airports";
import React from "react";

export default function AirportSearch(props) {
  
  return (
      <Autocomplete
        label="Autocomplete"
        options={airports}
        placeholder={props.label}
        size="small"
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        onClear={() => props.setValue("")}
        onSelect={(option) => {
          props.setValue(option?.id);
        }}
      />
  );
}
