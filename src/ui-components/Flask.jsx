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
export default function Flask(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Flask: {} }, variantValues: { filled: "True" } },
    {
      overrides: {
        Flask: {
          paths: [
            {
              d: "M5.25001 -0.75C4.8358 -0.75 4.50001 -0.414214 4.50001 0C4.50001 0.414214 4.8358 0.75 5.25001 0.75L5.25001 -0.75ZM12.75 0.75C13.1642 0.75 13.5 0.414214 13.5 0C13.5 -0.414214 13.1642 -0.75 12.75 -0.75L12.75 0.75ZM2.53126 11.25C2.11705 11.25 1.78126 11.5858 1.78126 12C1.78126 12.4142 2.11705 12.75 2.53126 12.75L2.53126 11.25ZM15.4688 12.75C15.883 12.75 16.2188 12.4142 16.2188 12C16.2188 11.5858 15.883 11.25 15.4688 11.25L15.4688 12.75ZM7.50001 0C7.50001 -0.414214 7.16423 -0.75 6.75001 -0.75C6.3358 -0.75 6.00001 -0.414214 6.00001 0L7.50001 0ZM6.75001 4.38188L7.50001 4.38197L7.50001 4.38188L6.75001 4.38188ZM6.28689 5.98406L6.92105 6.38448L6.92127 6.38414L6.28689 5.98406ZM0.43173 15.2573L1.06588 15.6578L1.0659 15.6578L0.43173 15.2573ZM17.5683 15.2573L16.9341 15.6578L16.9341 15.6578L17.5683 15.2573ZM11.7127 5.98406L11.0782 6.38395L11.0785 6.3845L11.7127 5.98406ZM11.25 4.38188L12 4.38197L12 4.38188L11.25 4.38188ZM12 0C12 -0.414214 11.6642 -0.75 11.25 -0.75C10.8358 -0.75 10.5 -0.414214 10.5 0L12 0ZM5.25001 0.75L12.75 0.75L12.75 -0.75L5.25001 -0.75L5.25001 0.75ZM2.53126 12.75L15.4688 12.75L15.4688 11.25L2.53126 11.25L2.53126 12.75ZM6.00001 0L6.00001 4.38188L7.50001 4.38188L7.50001 0L6.00001 0ZM6.00001 4.38178C5.99996 4.80728 5.87948 5.22408 5.6525 5.58399L6.92127 6.38414C7.29928 5.78474 7.49993 5.0906 7.50001 4.38197L6.00001 4.38178ZM5.65272 5.58365L-0.202438 14.8569L1.0659 15.6578L6.92105 6.38448L5.65272 5.58365ZM-0.202421 14.8569C-1.68059 17.1978 0.00112411 20.25 2.76939 20.25L2.76939 18.75C1.18296 18.75 0.218115 17.0003 1.06588 15.6578L-0.202421 14.8569ZM2.76939 20.25L15.2306 20.25L15.2306 18.75L2.76939 18.75L2.76939 20.25ZM15.2306 20.25C17.9989 20.25 19.6806 17.1978 18.2024 14.8569L16.9341 15.6578C17.7819 17.0003 16.8171 18.75 15.2306 18.75L15.2306 20.25ZM18.2024 14.8569L12.3468 5.58363L11.0785 6.3845L16.9341 15.6578L18.2024 14.8569ZM12.3472 5.58417C12.1203 5.22423 12 4.80744 12 4.38197L10.5 4.38178C10.4999 5.09036 10.7004 5.7845 11.0782 6.38395L12.3472 5.58417ZM12 4.38188L12 0L10.5 0L10.5 4.38188L12 4.38188Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(12.5%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { filled: "Filled" },
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
          d: "M18.9558 15.6094L13.1002 6.33375C12.8735 5.97389 12.7532 5.55721 12.7533 5.13188L12.7533 1.5L13.4827 1.5C13.8863 1.5 14.2327 1.18969 14.2529 0.786094C14.2577 0.684647 14.242 0.583265 14.2065 0.488095C14.171 0.392924 14.1166 0.305949 14.0465 0.232444C13.9764 0.158938 13.8922 0.100433 13.7988 0.0604768C13.7054 0.0205207 13.6049 -5.40966e-05 13.5033 1.06819e-07L6.02442 1.06819e-07C5.62083 1.06819e-07 5.27442 0.310313 5.25426 0.713906C5.24938 0.815313 5.26513 0.916657 5.30057 1.0118C5.33601 1.10693 5.39039 1.19389 5.46043 1.26739C5.53047 1.34089 5.6147 1.3994 5.70802 1.43939C5.80134 1.47937 5.9018 1.49999 6.00333 1.5L6.75333 1.5L6.75333 5.13188C6.75361 5.55715 6.63316 5.97377 6.40598 6.33328L0.550826 15.6094C0.212206 16.1362 0.0225158 16.7448 0.00188351 17.3707C-0.0187487 17.9966 0.130447 18.6164 0.433639 19.1644C1.0552 20.3058 2.2702 21 3.57192 21L15.9347 21C17.2365 21 18.4515 20.3058 19.073 19.162C19.3758 18.6144 19.5247 17.995 19.5041 17.3696C19.4834 16.7441 19.294 16.1359 18.9558 15.6094L18.9558 15.6094ZM7.67489 7.13437C8.05321 6.53501 8.25378 5.84065 8.25333 5.13188L8.25333 1.6875C8.25333 1.63777 8.27308 1.59008 8.30824 1.55492C8.34341 1.51975 8.3911 1.5 8.44083 1.5L11.0658 1.5C11.1156 1.5 11.1632 1.51975 11.1984 1.55492C11.2336 1.59008 11.2533 1.63777 11.2533 1.6875L11.2533 5.13188C11.253 5.84069 11.4538 6.53506 11.8322 7.13437L14.5416 11.4248C14.5774 11.4816 14.5974 11.547 14.5993 11.6141C14.6013 11.6812 14.5852 11.7476 14.5527 11.8064C14.5202 11.8651 14.4726 11.9141 14.4147 11.9482C14.3569 11.9822 14.2909 12.0001 14.2238 12L5.28286 12C5.21576 12 5.14988 11.9821 5.09208 11.948C5.03429 11.9139 4.98671 11.8649 4.95429 11.8062C4.92188 11.7474 4.90582 11.681 4.90779 11.614C4.90977 11.5469 4.9297 11.4816 4.96551 11.4248L7.67489 7.13437Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(9.36%, 6.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Flask")}
      {...rest}
    ></Icon>
  );
}