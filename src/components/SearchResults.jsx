import { useState, useEffect } from 'react';


export function SearchResults() {
  const [data, setData] = useState(null);
  const url = "/FareMasterPricerTravelBoardSearch";

  useEffect(() => {

    const body = {
      fromAirport: "DFW",
      toAirport: "BLR",
      departureDate: "100124",
      returnDate: "160124",
      numberOfAdults: 2,
      numberOfChildren: 1,
      numberOfInfants: 1,
      typeOfTrip: "round-trip",
      bookingClass: "ECONOMY",
    };

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{data}</div>;
}
