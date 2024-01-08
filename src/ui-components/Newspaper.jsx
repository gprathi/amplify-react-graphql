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
export default function Newspaper(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Newspaper: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Newspaper: {
          paths: [
            {
              d: "M1.12078 0L0.00421858 0C0.0030997 -6.66134e-16 0.00202713 0.000444435 0.00123596 0.0012356C0.000444793 0.00202677 0 0.0030997 0 0.00421858L0 14.25C0 14.6478 0.158036 15.0294 0.43934 15.3107C0.720645 15.592 1.10218 15.75 1.5 15.75C1.89782 15.75 2.27936 15.592 2.56066 15.3107C2.84196 15.0294 3 14.6478 3 14.25L3 1.87922C3 1.38082 2.80201 0.902832 2.44959 0.55041C2.09717 0.197989 1.61918 1.33227e-15 1.12078 0L1.12078 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(81.25%, 21.88%)" },
            },
            {
              d: "M16.5 18L16.5 1.875C16.5 1.62877 16.4515 1.38495 16.3573 1.15747C16.263 0.929983 16.1249 0.723285 15.9508 0.549175C15.7767 0.375065 15.57 0.236953 15.3425 0.142726C15.115 0.0484983 14.8712 0 14.625 0L1.875 0C1.37772 0 0.900805 0.197544 0.549175 0.549175C0.197544 0.900805 1.66533e-16 1.37772 0 1.875L0 18.375C6.66134e-16 19.0712 0.276562 19.7389 0.768845 20.2312C1.26113 20.7234 1.92881 21 2.625 21L18.6961 21C18.7032 21.0001 18.7102 20.9987 18.7168 20.996C18.7234 20.9933 18.7293 20.9894 18.7344 20.9844C18.7394 20.9793 18.7433 20.9734 18.746 20.9668C18.7487 20.9602 18.7501 20.9532 18.75 20.9461C18.75 20.9343 18.7461 20.9229 18.7388 20.9135C18.7316 20.9042 18.7216 20.8975 18.7102 20.8945C18.0757 20.7205 17.5159 20.3431 17.1167 19.8202C16.7174 19.2973 16.5008 18.6579 16.5 18L16.5 18ZM3 4.5C3 4.30109 3.07902 4.11032 3.21967 3.96967C3.36032 3.82902 3.55109 3.75 3.75 3.75L6.75 3.75C6.94891 3.75 7.13968 3.82902 7.28033 3.96967C7.42098 4.11032 7.5 4.30109 7.5 4.5L7.5 7.5C7.5 7.69891 7.42098 7.88968 7.28033 8.03033C7.13968 8.17098 6.94891 8.25 6.75 8.25L3.75 8.25C3.55109 8.25 3.36032 8.17098 3.21967 8.03033C3.07902 7.88968 3 7.69891 3 7.5L3 4.5ZM12.75 17.25L3.77109 17.25C3.3675 17.25 3.02109 16.9397 3.00094 16.5361C2.99605 16.4347 3.01181 16.3333 3.04724 16.2382C3.08268 16.1431 3.13707 16.0561 3.2071 15.9826C3.27714 15.9091 3.36137 15.8506 3.45469 15.8106C3.54801 15.7706 3.64848 15.75 3.75 15.75L12.7289 15.75C13.1325 15.75 13.4789 16.0603 13.4991 16.4639C13.5039 16.5653 13.4882 16.6667 13.4528 16.7618C13.4173 16.8569 13.3629 16.9439 13.2929 17.0174C13.2229 17.0909 13.1386 17.1494 13.0453 17.1894C12.952 17.2294 12.8515 17.25 12.75 17.25L12.75 17.25ZM12.75 14.25L3.77109 14.25C3.3675 14.25 3.02109 13.9397 3.00094 13.5361C2.99605 13.4347 3.01181 13.3333 3.04724 13.2382C3.08268 13.1431 3.13707 13.0561 3.2071 12.9826C3.27714 12.9091 3.36137 12.8506 3.45469 12.8106C3.54801 12.7706 3.64848 12.75 3.75 12.75L12.7289 12.75C13.1325 12.75 13.4789 13.0603 13.4991 13.4639C13.5039 13.5653 13.4882 13.6667 13.4528 13.7618C13.4173 13.8569 13.3629 13.9439 13.2929 14.0174C13.2229 14.0909 13.1386 14.1494 13.0453 14.1894C12.952 14.2294 12.8515 14.25 12.75 14.25L12.75 14.25ZM12.75 11.25L3.77109 11.25C3.3675 11.25 3.02109 10.9397 3.00094 10.5361C2.99605 10.4347 3.01181 10.3333 3.04724 10.2382C3.08268 10.1431 3.13707 10.0561 3.2071 9.98261C3.27714 9.90911 3.36137 9.8506 3.45469 9.81062C3.54801 9.77063 3.64848 9.75001 3.75 9.75L12.7289 9.75C13.1325 9.75 13.4789 10.0603 13.4991 10.4639C13.5039 10.5653 13.4882 10.6667 13.4528 10.7618C13.4173 10.8569 13.3629 10.9439 13.2929 11.0174C13.2229 11.0909 13.1386 11.1494 13.0453 11.1894C12.952 11.2294 12.8515 11.25 12.75 11.25L12.75 11.25ZM12.75 8.25L9.77109 8.25C9.3675 8.25 9.02109 7.93969 9.00094 7.53609C8.99605 7.43469 9.01181 7.33334 9.04724 7.2382C9.08268 7.14307 9.13707 7.05611 9.2071 6.98261C9.27714 6.90911 9.36137 6.8506 9.45469 6.81062C9.54801 6.77063 9.64848 6.75001 9.75 6.75L12.7289 6.75C13.1325 6.75 13.4789 7.06031 13.4991 7.46391C13.5039 7.56531 13.4882 7.66666 13.4528 7.7618C13.4173 7.85693 13.3629 7.94389 13.2929 8.01739C13.2229 8.09089 13.1386 8.1494 13.0453 8.18938C12.952 8.22937 12.8515 8.24999 12.75 8.25L12.75 8.25ZM12.75 5.25L9.77109 5.25C9.3675 5.25 9.02109 4.93969 9.00094 4.53609C8.99605 4.43469 9.01181 4.33334 9.04724 4.2382C9.08268 4.14307 9.13707 4.05611 9.2071 3.98261C9.27714 3.90911 9.36137 3.8506 9.45469 3.81062C9.54801 3.77063 9.64848 3.75001 9.75 3.75L12.7289 3.75C13.1325 3.75 13.4789 4.06031 13.4991 4.46391C13.5039 4.56531 13.4882 4.66666 13.4528 4.7618C13.4173 4.85693 13.3629 4.94389 13.2929 5.01739C13.2229 5.09089 13.1386 5.1494 13.0453 5.18938C12.952 5.22937 12.8515 5.24999 12.75 5.25Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 6.25%)" },
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
          d: "M15 1.125L15.75 1.125L15.75 1.12282L15 1.125ZM13.875 0L13.8772 -0.75L13.875 -0.75L13.875 0ZM1.125 0L1.125 -0.750003L1.12282 -0.749997L1.125 0ZM0 1.125L-0.75 1.12282L-0.75 1.125L0 1.125ZM0 17.625L-0.750003 17.625L-0.749997 17.6272L0 17.625ZM1.875 19.5L1.87276 20.25L1.875 20.25L1.875 19.5ZM15.75 17.2434L15.75 1.125L14.25 1.125L14.25 17.2434L15.75 17.2434ZM15.75 1.12282C15.7486 0.626563 15.5508 0.151041 15.1999 -0.199869L14.1392 0.860791C14.2099 0.931463 14.2497 1.02723 14.25 1.12718L15.75 1.12282ZM15.1999 -0.199869C14.849 -0.550779 14.3734 -0.748556 13.8772 -0.749997L13.8728 0.749997C13.9728 0.750287 14.0685 0.790119 14.1392 0.860791L15.1999 -0.199869ZM13.875 -0.75L1.125 -0.75L1.125 0.75L13.875 0.75L13.875 -0.75ZM1.12282 -0.749997C0.626563 -0.748556 0.151041 -0.550779 -0.199869 -0.199869L0.860791 0.860791C0.931464 0.790119 1.02723 0.750287 1.12718 0.749997L1.12282 -0.749997ZM-0.199869 -0.199869C-0.550779 0.151041 -0.748556 0.626563 -0.749997 1.12282L0.749997 1.12718C0.750287 1.02723 0.790119 0.931464 0.860791 0.860791L-0.199869 -0.199869ZM-0.75 1.125L-0.75 17.625L0.75 17.625L0.75 1.125L-0.75 1.125ZM-0.749997 17.6272C-0.747921 18.3222 -0.470929 18.9881 0.0204839 19.4795L1.08114 18.4189C0.869938 18.2076 0.750889 17.9214 0.749997 17.6228L-0.749997 17.6272ZM0.0204839 19.4795C0.511897 19.9709 1.1778 20.2479 1.87276 20.25L1.87724 18.75C1.57855 18.7491 1.29235 18.6301 1.08114 18.4189L0.0204839 19.4795ZM1.875 20.25L17.25 20.25L17.25 18.75L1.875 18.75L1.875 20.25Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 9.38%)" },
        },
        {
          d: "M2.25 15.75L2.25 16.5L2.25 15.75ZM0 13.5L-0.75 13.5L0 13.5ZM0 0L0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 1.66533e-16L0 0ZM3.375 0L3.375 -0.75L3.375 0ZM4.5 13.5L5.25 13.5L4.5 13.5ZM2.25 15C1.85217 15 1.47064 14.842 1.18934 14.5607L0.128679 15.6213C0.691289 16.1839 1.45435 16.5 2.25 16.5L2.25 15ZM1.18934 14.5607C0.908035 14.2794 0.75 13.8978 0.75 13.5L-0.75 13.5C-0.75 14.2956 -0.43393 15.0587 0.128679 15.6213L1.18934 14.5607ZM0.75 13.5L0.75 0L-0.75 0L-0.75 13.5L0.75 13.5ZM0 0.75L3.375 0.75L3.375 -0.75L0 -0.75L0 0.75ZM3.375 0.75C3.47446 0.75 3.56984 0.789509 3.64016 0.859835L4.70082 -0.200825C4.34919 -0.552456 3.87228 -0.75 3.375 -0.75L3.375 0.75ZM3.64016 0.859835C3.71049 0.930162 3.75 1.02554 3.75 1.125L5.25 1.125C5.25 0.627718 5.05245 0.150805 4.70082 -0.200825L3.64016 0.859835ZM3.75 1.125L3.75 13.5L5.25 13.5L5.25 1.125L3.75 1.125ZM3.75 13.5C3.75 13.8978 3.59196 14.2794 3.31066 14.5607L4.37132 15.6213C4.93393 15.0587 5.25 14.2956 5.25 13.5L3.75 13.5ZM3.31066 14.5607C3.02936 14.842 2.64783 15 2.25 15L2.25 16.5C3.04565 16.5 3.80871 16.1839 4.37132 15.6213L3.31066 14.5607Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(71.88%, 25%)" },
        },
        {
          d: "M6 -0.75C5.58579 -0.75 5.25 -0.414214 5.25 0C5.25 0.414214 5.58579 0.75 6 0.75L6 -0.75ZM9 0.75C9.41421 0.75 9.75 0.414214 9.75 0C9.75 -0.414214 9.41421 -0.75 9 -0.75L9 0.75ZM6 2.25C5.58579 2.25 5.25 2.58579 5.25 3C5.25 3.41421 5.58579 3.75 6 3.75L6 2.25ZM9 3.75C9.41421 3.75 9.75 3.41421 9.75 3C9.75 2.58579 9.41421 2.25 9 2.25L9 3.75ZM0 5.25C-0.414214 5.25 -0.75 5.58579 -0.75 6C-0.75 6.41421 -0.414214 6.75 0 6.75L0 5.25ZM9 6.75C9.41421 6.75 9.75 6.41421 9.75 6C9.75 5.58579 9.41421 5.25 9 5.25L9 6.75ZM0 8.25C-0.414214 8.25 -0.75 8.58579 -0.75 9C-0.75 9.41421 -0.414214 9.75 0 9.75L0 8.25ZM9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25L9 9.75ZM0 11.25C-0.414214 11.25 -0.75 11.5858 -0.75 12C-0.75 12.4142 -0.414214 12.75 0 12.75L0 11.25ZM9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25L9 12.75ZM6 0.75L9 0.75L9 -0.75L6 -0.75L6 0.75ZM6 3.75L9 3.75L9 2.25L6 2.25L6 3.75ZM0 6.75L9 6.75L9 5.25L0 5.25L0 6.75ZM0 9.75L9 9.75L9 8.25L0 8.25L0 9.75ZM0 12.75L9 12.75L9 11.25L0 11.25L0 12.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(21.88%, 25%)" },
        },
        {
          d: "M3.75 4.5L0.75 4.5C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790178 4.13968 0 3.94891 0 3.75L0 0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 -6.66134e-16 0.75 0L3.75 0C3.94891 0 4.13968 0.0790178 4.28033 0.21967C4.42098 0.360322 4.5 0.551088 4.5 0.75L4.5 3.75C4.5 3.94891 4.42098 4.13968 4.28033 4.28033C4.13968 4.42098 3.94891 4.5 3.75 4.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 21.88%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Newspaper")}
      {...rest}
    ></Icon>
  );
}
