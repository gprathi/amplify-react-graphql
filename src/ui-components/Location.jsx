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
export default function Location(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Location: {} }, variantValues: { location: "False" } },
    {
      overrides: {
        Location: {
          paths: [
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(43.75%, 31.25%)" },
            },
            {
              d: "M7.5 0C3.36469 0 0 3.21797 0 7.17188C0 9.05484 0.858281 11.5589 2.55094 14.6147C3.91031 17.0681 5.48297 19.2867 6.30094 20.3906C6.43916 20.5792 6.61987 20.7326 6.82844 20.8384C7.03701 20.9441 7.26757 20.9992 7.50141 20.9992C7.73525 20.9992 7.9658 20.9441 8.17437 20.8384C8.38294 20.7326 8.56366 20.5792 8.70188 20.3906C9.51844 19.2867 11.0925 17.0681 12.4519 14.6147C14.1417 11.5598 15 9.05578 15 7.17188C15 3.21797 11.6353 0 7.5 0ZM7.5 10.5C6.90666 10.5 6.32664 10.3241 5.83329 9.99441C5.33994 9.66476 4.95542 9.19623 4.72836 8.64805C4.5013 8.09987 4.44189 7.49667 4.55764 6.91473C4.6734 6.33279 4.95912 5.79824 5.37868 5.37868C5.79824 4.95912 6.33279 4.6734 6.91473 4.55764C7.49667 4.44189 8.09987 4.5013 8.64805 4.72836C9.19623 4.95542 9.66476 5.33994 9.99441 5.83329C10.3241 6.32664 10.5 6.90666 10.5 7.5C10.4991 8.29538 10.1828 9.05794 9.62036 9.62036C9.05794 10.1828 8.29538 10.4991 7.5 10.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.75%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { location: "True" },
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
          d: "M6.15234 19.1948L6.75874 18.7535L6.75516 18.7486L6.15234 19.1948ZM6.75 19.499L6.75 20.249L6.75 19.499ZM7.34766 19.1948L6.74491 18.7485L6.74128 18.7535L7.34766 19.1948ZM6.75 -0.75C2.64479 -0.75 -0.75 2.42875 -0.75 6.42188L0.75 6.42188C0.75 3.32656 3.40209 0.75 6.75 0.75L6.75 -0.75ZM-0.75 6.42188C-0.75 8.67143 0.467189 11.4564 1.80043 13.8639C3.15455 16.3091 4.71413 18.5125 5.54953 19.6411L6.75516 18.7486C5.93821 17.645 4.42162 15.5009 3.11265 13.1372C1.78281 10.7359 0.75 8.25045 0.75 6.42188L-0.75 6.42188ZM5.54597 19.6362C5.68414 19.826 5.86524 19.9805 6.0745 20.087L6.75489 18.7502C6.75641 18.751 6.75772 18.7521 6.75872 18.7535L5.54597 19.6362ZM6.0745 20.087C6.28375 20.1935 6.51521 20.249 6.75 20.249L6.75 18.749C6.75169 18.749 6.75337 18.7494 6.75489 18.7502L6.0745 20.087ZM6.75 20.249C6.98479 20.249 7.21625 20.1935 7.42551 20.087L6.74511 18.7502C6.74663 18.7494 6.74831 18.749 6.75 18.749L6.75 20.249ZM7.42551 20.087C7.63476 19.9805 7.81586 19.826 7.95403 19.6362L6.74128 18.7535C6.74228 18.7521 6.74359 18.751 6.74511 18.7502L7.42551 20.087ZM7.95038 19.6412C8.78579 18.5131 10.3454 16.3105 11.6995 13.8655C13.0329 11.4582 14.25 8.67303 14.25 6.42188L12.75 6.42188C12.75 8.25213 11.7171 10.7378 10.3874 13.1388C9.07842 15.5021 7.56187 17.6453 6.74493 18.7485L7.95038 19.6412ZM14.25 6.42188C14.25 2.42875 10.8552 -0.75 6.75 -0.75L6.75 0.75C10.0979 0.75 12.75 3.32656 12.75 6.42188L14.25 6.42188Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(21.88%, 9.38%)" },
        },
        {
          d: "M3.75 2.25C3.75 3.07843 3.07843 3.75 2.25 3.75L2.25 5.25C3.90685 5.25 5.25 3.90685 5.25 2.25L3.75 2.25ZM2.25 3.75C1.42157 3.75 0.75 3.07843 0.75 2.25L-0.75 2.25C-0.75 3.90685 0.593146 5.25 2.25 5.25L2.25 3.75ZM0.75 2.25C0.75 1.42157 1.42157 0.75 2.25 0.75L2.25 -0.75C0.593146 -0.75 -0.75 0.593146 -0.75 2.25L0.75 2.25ZM2.25 0.75C3.07843 0.75 3.75 1.42157 3.75 2.25L5.25 2.25C5.25 0.593146 3.90685 -0.75 2.25 -0.75L2.25 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(40.63%, 28.13%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Location")}
      {...rest}
    ></Icon>
  );
}
