/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Dropdowndateopen(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="802px"
      height="442px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Dropdowndateopen")}
      {...rest}
    >
      <View
        width="802px"
        height="442px"
        {...getOverrideProps(overrides, "shape")}
      ></View>
      <View
        width="237.4px"
        height="48px"
        {...getOverrideProps(overrides, "pick35313")}
      ></View>
      <View
        width="237.4px"
        height="48px"
        {...getOverrideProps(overrides, "pick2826")}
      ></View>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "call to action")}
      ></Flex>
      <View
        width="301px"
        height="251.84px"
        {...getOverrideProps(overrides, "datepicke/selected")}
      ></View>
      <View
        width="301px"
        height="254.84px"
        {...getOverrideProps(overrides, "datepicke/blank")}
      ></View>
      <Icon
        width="689.5px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 689.5, height: 1 }}
        paths={[
          {
            d: "M0 0.25L689.5 0.25L689.5 -0.25L0 -0.25L0 0.25Z",
            stroke: "rgba(189,189,189,1)",
            fillRule: "nonzero",
            strokeWidth: 0,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.21%"
        bottom="25.79%"
        left="6.98%"
        right="7.04%"
        {...getOverrideProps(overrides, "line")}
      ></Icon>
    </View>
  );
}
