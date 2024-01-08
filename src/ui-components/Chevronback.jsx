/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Chevronback(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303C7.57322 13.7374 7.57322 13.2626 7.28033 12.9697L6.21967 14.0303ZM0 6.75L-0.53033 6.21967C-0.823223 6.51256 -0.823223 6.98744 -0.53033 7.28033L0 6.75ZM7.28033 0.53033C7.57322 0.237437 7.57322 -0.237437 7.28033 -0.53033C6.98744 -0.823223 6.51256 -0.823223 6.21967 -0.53033L7.28033 0.53033ZM7.28033 12.9697L0.53033 6.21967L-0.53033 7.28033L6.21967 14.0303L7.28033 12.9697ZM0.53033 7.28033L7.28033 0.53033L6.21967 -0.53033L-0.53033 6.21967L0.53033 7.28033Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(37.5%, 21.88%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Chevronback")}
      {...rest}
    ></Icon>
  );
}
