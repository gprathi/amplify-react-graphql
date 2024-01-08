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
import { Icon } from "@aws-amplify/ui-react";
export default function ArrowUp(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { ArrowUp: {} }, variantValues: { arrow: "False" } },
    {
      overrides: {
        ArrowUp: {
          paths: [
            {
              d: "M9.75 0C4.36547 0 0 4.36547 0 9.75C0 15.1345 4.36547 19.5 9.75 19.5C15.1345 19.5 19.5 15.1345 19.5 9.75C19.5 4.36547 15.1345 0 9.75 0ZM11.4052 13.7198C11.4777 13.7888 11.5358 13.8716 11.5758 13.9633C11.6159 14.055 11.6372 14.1539 11.6385 14.254C11.6398 14.3541 11.621 14.4534 11.5833 14.5461C11.5456 14.6389 11.4897 14.7231 11.4189 14.7939C11.3481 14.8647 11.2639 14.9206 11.1711 14.9583C11.0784 14.996 10.9791 15.0148 10.879 15.0135C10.7789 15.0122 10.68 14.9909 10.5883 14.9508C10.4966 14.9108 10.4138 14.8527 10.3448 14.7802L5.84484 10.2802C5.7043 10.1395 5.62535 9.94883 5.62535 9.75C5.62535 9.55117 5.7043 9.36048 5.84484 9.21984L10.3448 4.71984C10.4866 4.58513 10.6755 4.51114 10.871 4.51364C11.0666 4.51614 11.2535 4.59495 11.3918 4.73325C11.5301 4.87155 11.6089 5.0584 11.6114 5.25398C11.6139 5.44955 11.5399 5.63836 11.4052 5.78016L7.43578 9.75L11.4052 13.7198Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { arrow: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
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
          d: "M9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75ZM18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M3.96967 9.53033C4.26256 9.82322 4.73744 9.82322 5.03033 9.53033C5.32322 9.23744 5.32322 8.76256 5.03033 8.46967L3.96967 9.53033ZM0 4.5L-0.53033 3.96967C-0.823223 4.26256 -0.823223 4.73744 -0.53033 5.03033L0 4.5ZM5.03033 0.53033C5.32322 0.237437 5.32322 -0.237437 5.03033 -0.53033C4.73744 -0.823223 4.26256 -0.823223 3.96967 -0.53033L5.03033 0.53033ZM5.03033 8.46967L0.53033 3.96967L-0.53033 5.03033L3.96967 9.53033L5.03033 8.46967ZM0.53033 5.03033L5.03033 0.53033L3.96967 -0.53033L-0.53033 3.96967L0.53033 5.03033Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(39.06%, 31.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "ArrowUp")}
      {...rest}
    ></Icon>
  );
}
