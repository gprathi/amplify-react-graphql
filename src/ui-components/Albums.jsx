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
export default function Albums(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Albums: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Albums: {
          paths: [
            {
              d: "M15 1.5L4.5 1.5C4.30109 1.5 4.11032 1.42098 3.96967 1.28033C3.82902 1.13968 3.75 0.948912 3.75 0.75C3.75 0.551088 3.82902 0.360322 3.96967 0.21967C4.11032 0.0790178 4.30109 -6.66134e-16 4.5 0L15 0C15.1989 0 15.3897 0.0790178 15.5303 0.21967C15.671 0.360322 15.75 0.551088 15.75 0.75C15.75 0.948912 15.671 1.13968 15.5303 1.28033C15.3897 1.42098 15.1989 1.5 15 1.5ZM16.5 3.75L3 3.75C2.80109 3.75 2.61032 3.67098 2.46967 3.53033C2.32902 3.38968 2.25 3.19891 2.25 3C2.25 2.80109 2.32902 2.61032 2.46967 2.46967C2.61032 2.32902 2.80109 2.25 3 2.25L16.5 2.25C16.6989 2.25 16.8897 2.32902 17.0303 2.46967C17.171 2.61032 17.25 2.80109 17.25 3C17.25 3.19891 17.171 3.38968 17.0303 3.53033C16.8897 3.67098 16.6989 3.75 16.5 3.75ZM17.3967 18L2.10328 18C1.54565 17.9994 1.01103 17.7776 0.616722 17.3833C0.222415 16.989 0.000620353 16.4544 0 15.8967L0 6.60328C0.000620353 6.04565 0.222415 5.51103 0.616722 5.11672C1.01103 4.72241 1.54565 4.50062 2.10328 4.5L17.3967 4.5C17.9544 4.50062 18.489 4.72241 18.8833 5.11672C19.2776 5.51103 19.4994 6.04565 19.5 6.60328L19.5 15.8967C19.4994 16.4544 19.2776 16.989 18.8833 17.3833C18.489 17.7776 17.9544 17.9994 17.3967 18L17.3967 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 12.5%)" },
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
          d: "M1.35328 0.75L16.6467 0.75L16.6467 -0.75L1.35328 -0.75L1.35328 0.75ZM16.6467 0.75C16.9799 0.75 17.25 1.0201 17.25 1.35328L18.75 1.35328C18.75 0.191671 17.8083 -0.75 16.6467 -0.75L16.6467 0.75ZM17.25 1.35328L17.25 10.6467L18.75 10.6467L18.75 1.35328L17.25 1.35328ZM17.25 10.6467C17.25 10.9799 16.9799 11.25 16.6467 11.25L16.6467 12.75C17.8083 12.75 18.75 11.8083 18.75 10.6467L17.25 10.6467ZM16.6467 11.25L1.35328 11.25L1.35328 12.75L16.6467 12.75L16.6467 11.25ZM1.35328 11.25C1.0201 11.25 0.75 10.9799 0.75 10.6467L-0.75 10.6467C-0.75 11.8083 0.191671 12.75 1.35328 12.75L1.35328 11.25ZM0.75 10.6467L0.75 1.35328L-0.75 1.35328L-0.75 10.6467L0.75 10.6467ZM0.75 1.35328C0.75 1.0201 1.0201 0.75 1.35328 0.75L1.35328 -0.75C0.191671 -0.75 -0.75 0.191671 -0.75 1.35328L0.75 1.35328Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 34.38%)" },
        },
        {
          d: "M1.5 -0.75C1.08579 -0.75 0.75 -0.414214 0.75 0C0.75 0.414214 1.08579 0.75 1.5 0.75L1.5 -0.75ZM12 0.75C12.4142 0.75 12.75 0.414214 12.75 0C12.75 -0.414214 12.4142 -0.75 12 -0.75L12 0.75ZM0 1.5C-0.414214 1.5 -0.75 1.83579 -0.75 2.25C-0.75 2.66421 -0.414214 3 0 3L0 1.5ZM13.5 3C13.9142 3 14.25 2.66421 14.25 2.25C14.25 1.83579 13.9142 1.5 13.5 1.5L13.5 3ZM1.5 0.75L12 0.75L12 -0.75L1.5 -0.75L1.5 0.75ZM0 3L13.5 3L13.5 1.5L0 1.5L0 3Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(21.88%, 15.63%)" },
        },
        {
          d: "M1.5 0L12 0ZM0 2.25L13.5 2.25Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(21.88%, 15.63%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Albums")}
      {...rest}
    ></Icon>
  );
}
