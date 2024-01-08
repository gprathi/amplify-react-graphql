/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Radiobuttons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        icon: {},
        "state-layer": {},
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "true", state: "Enabled" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": {},
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "true", state: "Disabled" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": {},
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "false", state: "Disabled" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": {},
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "false", state: "Enabled" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(255,245,229,1)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "true", state: "Hovered" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(28,27,31,0.08)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "false", state: "Hovered" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(255,236,204,1)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "true", state: "Focused" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(28,27,31,0.12)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "false", state: "Focused" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(255,207,128,1)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "true", state: "Pressed" },
    },
    {
      overrides: {
        icon: {},
        "state-layer": { backgroundColor: "rgba(103,80,164,0.12)" },
        container: {},
        Radiobuttons: {},
      },
      variantValues: { selected: "false", state: "Pressed" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="48px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Radiobuttons")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "container")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          display="flex"
          {...getOverrideProps(overrides, "state-layer")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "icon")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
