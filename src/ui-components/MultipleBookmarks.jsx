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
export default function MultipleBookmarks(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { MultipleBookmarks: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        MultipleBookmarks: {
          paths: [
            {
              d: "M13.4062 8.32667e-17L2.90625 8.32667e-17C2.24113 0.00054868 1.59498 0.221737 1.06905 0.628907C0.543125 1.03608 0.167136 1.60622 0 2.25L10.6875 2.25C11.6075 2.25 12.4898 2.61546 13.1403 3.26597C13.7908 3.91649 14.1562 4.79878 14.1562 5.71875L14.1562 20.0105L15.1875 20.8355C15.3153 20.9378 15.4731 20.9955 15.6368 20.9997C15.8005 21.004 15.9611 20.9545 16.0941 20.8589C16.1923 20.7864 16.2718 20.6915 16.3261 20.5821C16.3804 20.4727 16.4079 20.352 16.4062 20.2298L16.4062 3C16.4062 2.20435 16.0902 1.44129 15.5276 0.87868C14.965 0.316071 14.2019 4.996e-16 13.4062 0L13.4062 8.32667e-17Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.27%, 0%)" },
            },
            {
              d: "M12.7501 0L3.00009 0C2.20444 6.66134e-16 1.44138 0.31607 0.878768 0.87868C0.316159 1.44129 8.86861e-05 2.20435 8.86861e-05 3L8.86861e-05 19.4822C-0.00176039 19.6038 0.0253287 19.724 0.0791207 19.8331C0.132913 19.9422 0.211865 20.0368 0.309464 20.1094C0.445049 20.2078 0.6097 20.2581 0.777155 20.252C0.944609 20.246 1.10522 20.1841 1.23337 20.0761L7.87509 14.4806L14.5168 20.0737C14.6441 20.181 14.8035 20.2429 14.9698 20.2496C15.1362 20.2563 15.3 20.2075 15.4356 20.1108C15.5344 20.0384 15.6145 19.9435 15.6692 19.8339C15.7239 19.7243 15.7516 19.6033 15.7501 19.4808L15.7501 3C15.7501 2.20435 15.434 1.44129 14.8714 0.87868C14.3088 0.31607 13.5457 6.66134e-16 12.7501 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.37%, 15.63%)" },
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
          d: "M0 2.25L-0.75 2.24782L-0.75 2.25L0 2.25ZM2.25 0L2.25 -0.750003L2.24782 -0.749997L2.25 0ZM12.75 0L12.7522 -0.75L12.75 -0.75L12.75 0ZM15 2.25L15.75 2.25L15.75 2.24782L15 2.25ZM15 19.5L14.5315 20.0857C14.7566 20.2658 15.065 20.3009 15.3249 20.176C15.5847 20.0511 15.75 19.7883 15.75 19.5L15 19.5ZM0.75 3L0.75 2.25L-0.75 2.25L-0.75 3L0.75 3ZM0.749997 2.25218C0.751153 1.85413 0.909789 1.47272 1.19125 1.19125L0.130592 0.130592C-0.431109 0.692293 -0.74769 1.45346 -0.749997 2.24782L0.749997 2.25218ZM1.19125 1.19125C1.47272 0.909789 1.85413 0.751153 2.25218 0.749997L2.24782 -0.749997C1.45346 -0.74769 0.692293 -0.431109 0.130592 0.130592L1.19125 1.19125ZM2.25 0.75L12.75 0.75L12.75 -0.75L2.25 -0.75L2.25 0.75ZM12.7478 0.749997C13.1459 0.751153 13.5273 0.909789 13.8087 1.19125L14.8694 0.130592C14.3077 -0.431109 13.5465 -0.74769 12.7522 -0.749997L12.7478 0.749997ZM13.8087 1.19125C14.0902 1.47272 14.2488 1.85413 14.25 2.25218L15.75 2.24782C15.7477 1.45346 15.4311 0.692293 14.8694 0.130592L13.8087 1.19125ZM14.25 2.25L14.25 19.5L15.75 19.5L15.75 2.25L14.25 2.25ZM15.4685 18.9143L11.7185 15.9143L10.7815 17.0857L14.5315 20.0857L15.4685 18.9143Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(25%, 3.13%)" },
        },
        {
          d: "M2.25 0L2.25 -0.750003L2.24782 -0.749997L2.25 0ZM0 2.25L-0.75 2.24782L-0.75 2.25L0 2.25ZM0 18.75L-0.75 18.75C-0.75 19.0417 -0.580855 19.307 -0.316365 19.43C-0.0518754 19.5531 0.259968 19.5116 0.483102 19.3237L0 18.75ZM7.125 12.75L7.6081 12.1763C7.32893 11.9412 6.92107 11.9412 6.6419 12.1763L7.125 12.75ZM14.25 18.75L13.7669 19.3237C13.99 19.5116 14.3019 19.5531 14.5664 19.43C14.8309 19.307 15 19.0417 15 18.75L14.25 18.75ZM14.25 2.25L15 2.25L15 2.24782L14.25 2.25ZM12 -0.75L2.25 -0.75L2.25 0.75L12 0.75L12 -0.75ZM2.24782 -0.749997C1.45346 -0.74769 0.692293 -0.431108 0.130592 0.130592L1.19125 1.19125C1.47272 0.909789 1.85413 0.751153 2.25218 0.749997L2.24782 -0.749997ZM0.130592 0.130592C-0.431108 0.692293 -0.74769 1.45346 -0.749997 2.24782L0.749997 2.25218C0.751153 1.85413 0.909789 1.47272 1.19125 1.19125L0.130592 0.130592ZM-0.75 2.25L-0.75 18.75L0.75 18.75L0.75 2.25L-0.75 2.25ZM0.483102 19.3237L7.6081 13.3237L6.6419 12.1763L-0.483102 18.1763L0.483102 19.3237ZM6.6419 13.3237L13.7669 19.3237L14.7331 18.1763L7.6081 12.1763L6.6419 13.3237ZM15 18.75L15 2.25L13.5 2.25L13.5 18.75L15 18.75ZM15 2.24782C14.9977 1.45346 14.6811 0.692293 14.1194 0.130592L13.0587 1.19125C13.3402 1.47272 13.4988 1.85413 13.5 2.25218L15 2.24782ZM14.1194 0.130592C13.5577 -0.431109 12.7965 -0.74769 12.0022 -0.749997L11.9978 0.749997C12.3959 0.751153 12.7773 0.909789 13.0587 1.19125L14.1194 0.130592Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "MultipleBookmarks")}
      {...rest}
    ></Icon>
  );
}