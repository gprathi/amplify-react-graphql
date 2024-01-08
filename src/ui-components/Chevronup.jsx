/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Chevronup(props) {
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
          d: "M-0.53033 6.21967C-0.823223 6.51256 -0.823223 6.98744 -0.53033 7.28033C-0.237437 7.57322 0.237437 7.57322 0.53033 7.28033L-0.53033 6.21967ZM6.75 0L7.28033 -0.53033C6.98744 -0.823223 6.51256 -0.823223 6.21967 -0.53033L6.75 0ZM12.9697 7.28033C13.2626 7.57322 13.7374 7.57322 14.0303 7.28033C14.3232 6.98744 14.3232 6.51256 14.0303 6.21967L12.9697 7.28033ZM0.53033 7.28033L7.28033 0.53033L6.21967 -0.53033L-0.53033 6.21967L0.53033 7.28033ZM6.21967 0.53033L12.9697 7.28033L14.0303 6.21967L7.28033 -0.53033L6.21967 0.53033Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(21.88%, 37.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Chevronup")}
      {...rest}
    ></Icon>
  );
}
