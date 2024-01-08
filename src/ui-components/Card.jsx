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
export default function Card(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Card: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Card: {
          paths: [
            {
              d: "M0 13.875C6.66134e-16 14.5712 0.276562 15.2389 0.768845 15.7312C1.26113 16.2234 1.92881 16.5 2.625 16.5L18.375 16.5C19.0712 16.5 19.7389 16.2234 20.2312 15.7312C20.7234 15.2389 21 14.5712 21 13.875L21 6.65625L0 6.65625L0 13.875ZM3.09375 10.3125C3.09375 9.93954 3.24191 9.58185 3.50563 9.31813C3.76935 9.05441 4.12704 8.90625 4.5 8.90625L6.75 8.90625C7.12296 8.90625 7.48065 9.05441 7.74437 9.31813C8.00809 9.58185 8.15625 9.93954 8.15625 10.3125L8.15625 11.25C8.15625 11.623 8.00809 11.9806 7.74437 12.2444C7.48065 12.5081 7.12296 12.6562 6.75 12.6562L4.5 12.6562C4.12704 12.6562 3.76935 12.5081 3.50563 12.2444C3.24191 11.9806 3.09375 11.623 3.09375 11.25L3.09375 10.3125ZM18.375 0L2.625 0C1.92881 0 1.26113 0.276562 0.768845 0.768845C0.276562 1.26113 3.33067e-16 1.92881 0 2.625L0 3.84375L21 3.84375L21 2.625C21 1.92881 20.7234 1.26113 20.2312 0.768845C19.7389 0.276562 19.0712 0 18.375 0L18.375 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 15.63%)" },
            },
          ],
        },
      },
      variantValues: { fill: "True" },
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
          d: "M2.625 0.75L16.875 0.75L16.875 -0.75L2.625 -0.75L2.625 0.75ZM16.875 0.75C17.9105 0.75 18.75 1.58947 18.75 2.625L20.25 2.625C20.25 0.761039 18.739 -0.75 16.875 -0.75L16.875 0.75ZM18.75 2.625L18.75 12.375L20.25 12.375L20.25 2.625L18.75 2.625ZM18.75 12.375C18.75 13.4105 17.9105 14.25 16.875 14.25L16.875 15.75C18.739 15.75 20.25 14.239 20.25 12.375L18.75 12.375ZM16.875 14.25L2.625 14.25L2.625 15.75L16.875 15.75L16.875 14.25ZM2.625 14.25C1.58947 14.25 0.75 13.4105 0.75 12.375L-0.75 12.375C-0.75 14.239 0.761039 15.75 2.625 15.75L2.625 14.25ZM0.75 12.375L0.75 2.625L-0.75 2.625L-0.75 12.375L0.75 12.375ZM0.75 2.625C0.75 1.58947 1.58947 0.75 2.625 0.75L2.625 -0.75C0.761039 -0.75 -0.75 0.761039 -0.75 2.625L0.75 2.625Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 18.75%)" },
        },
        {
          d: "M3.75 5.0625L3.75 3.65625C2.97335 3.65625 2.34375 4.28585 2.34375 5.0625L3.75 5.0625ZM6 5.0625L7.40625 5.0625C7.40625 4.28585 6.77665 3.65625 6 3.65625L6 5.0625ZM6 6L6 7.40625C6.77665 7.40625 7.40625 6.77665 7.40625 6L6 6ZM3.75 6L2.34375 6C2.34375 6.77665 2.97335 7.40625 3.75 7.40625L3.75 6ZM0 1.40625L19.5 1.40625L19.5 -1.40625L0 -1.40625L0 1.40625ZM3.75 6.46875L6 6.46875L6 3.65625L3.75 3.65625L3.75 6.46875ZM4.59375 5.0625L4.59375 6L7.40625 6L7.40625 5.0625L4.59375 5.0625ZM6 4.59375L3.75 4.59375L3.75 7.40625L6 7.40625L6 4.59375ZM5.15625 6L5.15625 5.0625L2.34375 5.0625L2.34375 6L5.15625 6Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 2,
          style: { transform: "translate(9.38%, 37.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Card")}
      {...rest}
    ></Icon>
  );
}
