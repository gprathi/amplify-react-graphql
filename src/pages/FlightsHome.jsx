import React, { useEffect } from "react";
import { useState   } from 'react';
import { View,  Flex,  Tabs ,Button} from "@aws-amplify/ui-react";
import "../styles/flightsearch.css";
import OneWaySearch from "../components/OneWaySearch";
import RoundTripSearch from "../components/RoundTripSearch";
import { SearchResults } from "../components/SearchResults";
import Paypal from "../components/Paypal";
import ARCPay from "../components/ARCPay";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [checkout, setCheckOut] = useState(false);
  

  

  // const url = "/FareMasterPricerTravelBoardSearch";

  // useEffect(() => {
  //   const body = {
  //     fromAirport: "DFW",
  //     toAirport: "BLR",
  //     departureDate: "100124",
  //     returnDate: "160124",
  //     numberOfAdults: 2,
  //     numberOfChildren: 1,
  //     numberOfInfants: 1,
  //     typeOfTrip: "round-trip",
  //     bookingClass: "ECONOMY",
  //   };

  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <Flex direction={"column"}>
        <View
          alignItems="center"
          className="search-view"
          height="15rem"
          gap="large"
          borderColor={"grey.50"}
          borderRadius={"medium"}
          style={{
            boxShadow: "0 2px 4px #aaa",
            height: "10%",
          }}
        >
          <Flex direction="row">
            <Tabs
              size="small"
              justifyContent="flex-start"
              defaultValue="Tab 2"
              items={[
                {
                  label: "One-Way",
                  value: "Tab 1",
                  content: (
                    <>
                      <OneWaySearch />
                    </>
                  ),
                },
                {
                  label: "Round-Trip",
                  value: "Tab 2",
                  content: (
                    <>
                      <RoundTripSearch setShowResults={setShowResults} />
                    </>
                  ),
                },
              ]}
            />
          </Flex>
        </View>
        <View>{showResults && <SearchResults />}</View>
        <View>
          {checkout ? (
            <Paypal />
          ) : (
            <Button onClick={() => setCheckOut(true)}>
              Ready for Checkout
            </Button>
          )}
        </View>
        </Flex>
      </>
      

  );
}
