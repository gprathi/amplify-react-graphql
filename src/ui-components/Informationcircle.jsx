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
export default function Informationcircle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Informationcircle: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Informationcircle: {
          paths: [
            {
              d: "M9.375 0C4.20563 0 0 4.20563 0 9.375C0 14.5444 4.20563 18.75 9.375 18.75C14.5444 18.75 18.75 14.5444 18.75 9.375C18.75 4.20563 14.5444 0 9.375 0ZM9.375 3.84375C9.61605 3.84375 9.85168 3.91523 10.0521 4.04915C10.2525 4.18306 10.4087 4.37341 10.501 4.5961C10.5932 4.8188 10.6174 5.06385 10.5703 5.30027C10.5233 5.53668 10.4072 5.75384 10.2368 5.92429C10.0663 6.09473 9.84918 6.21081 9.61277 6.25783C9.37635 6.30486 9.1313 6.28072 8.9086 6.18848C8.68591 6.09623 8.49556 5.94002 8.36165 5.7396C8.22773 5.53918 8.15625 5.30355 8.15625 5.0625C8.15625 4.73927 8.28465 4.42927 8.51321 4.20071C8.74177 3.97215 9.05177 3.84375 9.375 3.84375L9.375 3.84375ZM11.625 14.4375L7.5 14.4375C7.30109 14.4375 7.11032 14.3585 6.96967 14.2178C6.82902 14.0772 6.75 13.8864 6.75 13.6875C6.75 13.4886 6.82902 13.2978 6.96967 13.1572C7.11032 13.0165 7.30109 12.9375 7.5 12.9375L8.8125 12.9375L8.8125 8.8125L8.0625 8.8125C7.86359 8.8125 7.67282 8.73348 7.53217 8.59283C7.39152 8.45218 7.3125 8.26141 7.3125 8.0625C7.3125 7.86359 7.39152 7.67282 7.53217 7.53217C7.67282 7.39152 7.86359 7.3125 8.0625 7.3125L9.5625 7.3125C9.76141 7.3125 9.95218 7.39152 10.0928 7.53217C10.2335 7.67282 10.3125 7.86359 10.3125 8.0625L10.3125 12.9375L11.625 12.9375C11.8239 12.9375 12.0147 13.0165 12.1553 13.1572C12.296 13.2978 12.375 13.4886 12.375 13.6875C12.375 13.8864 12.296 14.0772 12.1553 14.2178C12.0147 14.3585 11.8239 14.4375 11.625 14.4375Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.94%, 10.94%)" },
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
          d: "M8.625 -0.75C3.44782 -0.75 -0.75 3.44782 -0.75 8.625L0.75 8.625C0.75 4.27624 4.27624 0.75 8.625 0.75L8.625 -0.75ZM-0.75 8.625C-0.75 13.8022 3.44782 18 8.625 18L8.625 16.5C4.27624 16.5 0.75 12.9738 0.75 8.625L-0.75 8.625ZM8.625 18C13.8022 18 18 13.8022 18 8.625L16.5 8.625C16.5 12.9738 12.9738 16.5 8.625 16.5L8.625 18ZM18 8.625C18 3.44782 13.8022 -0.75 8.625 -0.75L8.625 0.75C12.9738 0.75 16.5 4.27624 16.5 8.625L18 8.625Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0C-0.75 0.414214 -0.414214 0.75 0 0.75L0 -0.75ZM1.5 0L2.25 0C2.25 -0.414214 1.91421 -0.75 1.5 -0.75L1.5 0ZM0.75 5.4375C0.75 5.85171 1.08579 6.1875 1.5 6.1875C1.91421 6.1875 2.25 5.85171 2.25 5.4375L0.75 5.4375ZM0 0.75L1.5 0.75L1.5 -0.75L0 -0.75L0 0.75ZM0.75 0L0.75 5.4375L2.25 5.4375L2.25 0L0.75 0Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(42.97%, 42.97%)" },
        },
        {
          d: "M0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0C-0.75 0.414214 -0.414214 0.75 0 0.75L0 -0.75ZM4.125 0.75C4.53921 0.75 4.875 0.414214 4.875 0C4.875 -0.414214 4.53921 -0.75 4.125 -0.75L4.125 0.75ZM0 0.75L4.125 0.75L4.125 -0.75L0 -0.75L0 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(40.63%, 66.41%)" },
        },
        {
          d: "M1.21875 0C0.977705 0 0.742072 0.0714784 0.541649 0.205396C0.341227 0.339314 0.185016 0.529657 0.092772 0.752355C0.000527669 0.975052 -0.0236071 1.2201 0.0234186 1.45652C0.0704444 1.69293 0.186519 1.91009 0.356964 2.08054C0.527409 2.25098 0.74457 2.36706 0.980985 2.41408C1.2174 2.46111 1.46245 2.43697 1.68515 2.34473C1.90784 2.25248 2.09819 2.09627 2.2321 1.89585C2.36602 1.69543 2.4375 1.4598 2.4375 1.21875C2.4375 0.895517 2.3091 0.585523 2.08054 0.356963C1.85198 0.128403 1.54198 0 1.21875 0L1.21875 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(43.36%, 25.39%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Informationcircle")}
      {...rest}
    ></Icon>
  );
}
