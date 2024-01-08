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
export default function Cart(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Cart: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Cart: {
          paths: [
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(28.13%, 75%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(71.88%, 75%)" },
            },
            {
              d: "M19.9125 2.66156C19.8071 2.53268 19.6744 2.42888 19.5239 2.35769C19.3734 2.2865 19.209 2.24971 19.0425 2.25L4.77609 2.25L4.48875 0.619688C4.45811 0.446029 4.36726 0.28872 4.23216 0.175391C4.09706 0.0620626 3.92634 -3.70507e-05 3.75 1.65845e-08L0.75 1.65845e-08C0.551088 1.65845e-08 0.360322 0.0790178 0.21967 0.21967C0.0790176 0.360322 6.66134e-16 0.551088 0 0.75C3.33067e-16 0.948912 0.0790176 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5L3.12094 1.5L5.26125 13.6303C5.29189 13.804 5.38274 13.9613 5.51784 14.0746C5.65294 14.1879 5.82366 14.25 6 14.25L18 14.25C18.1989 14.25 18.3897 14.171 18.5303 14.0303C18.671 13.8897 18.75 13.6989 18.75 13.5C18.75 13.3011 18.671 13.1103 18.5303 12.9697C18.3897 12.829 18.1989 12.75 18 12.75L6.62906 12.75L6.36469 11.25L17.6925 11.25C17.9526 11.2497 18.2046 11.1595 18.4058 10.9947C18.6071 10.8299 18.7452 10.6007 18.7969 10.3458L20.1469 3.59578C20.1794 3.43242 20.1753 3.26388 20.1347 3.10232C20.0942 2.94076 20.0183 2.79022 19.9125 2.66156L19.9125 2.66156Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { filled: "True" },
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
          d: "M0.75 0.75L0.75 2.25C1.57843 2.25 2.25 1.57843 2.25 0.75L0.75 0.75ZM0.75 0.75L-0.75 0.75C-0.75 1.57843 -0.0784271 2.25 0.75 2.25L0.75 0.75ZM0.75 0.75L0.75 -0.75C-0.0784271 -0.75 -0.75 -0.0784271 -0.75 0.75L0.75 0.75ZM0.75 0.75L2.25 0.75C2.25 -0.0784271 1.57843 -0.75 0.75 -0.75L0.75 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(31.25%, 78.13%)" },
        },
        {
          d: "M0.75 0.75L0.75 2.25C1.57843 2.25 2.25 1.57843 2.25 0.75L0.75 0.75ZM0.75 0.75L-0.75 0.75C-0.75 1.57843 -0.0784271 2.25 0.75 2.25L0.75 0.75ZM0.75 0.75L0.75 -0.75C-0.0784271 -0.75 -0.75 -0.0784271 -0.75 0.75L0.75 0.75ZM0.75 0.75L2.25 0.75C2.25 -0.0784271 1.57843 -0.75 0.75 -0.75L0.75 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(75%, 78.13%)" },
        },
        {
          d: "M0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0C-0.75 0.414214 -0.414214 0.75 0 0.75L0 -0.75ZM3 0L3.73859 -0.130339C3.67534 -0.488732 3.36393 -0.75 3 -0.75L3 0ZM5.25 12.75L4.51141 12.8803C4.57466 13.2387 4.88607 13.5 5.25 13.5L5.25 12.75ZM17.25 13.5C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12L17.25 13.5ZM0 0.75L3 0.75L3 -0.75L0 -0.75L0 0.75ZM2.26141 0.130339L4.51141 12.8803L5.98859 12.6197L3.73859 -0.130339L2.26141 0.130339ZM5.25 13.5L17.25 13.5L17.25 12L5.25 12L5.25 13.5Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 15.63%)" },
        },
        {
          d: "M1.5 6.75C1.08579 6.75 0.75 7.08579 0.75 7.5C0.75 7.91421 1.08579 8.25 1.5 8.25L1.5 6.75ZM13.1925 7.5L13.193 6.75L13.1925 6.75L13.1925 7.5ZM13.5605 7.19859L14.2959 7.34578L14.2959 7.34568L13.5605 7.19859ZM14.9105 0.448594L14.1751 0.301407L14.175 0.301507L14.9105 0.448594ZM14.5425 9.0884e-08L14.5425 0.75L14.543 0.75L14.5425 9.0884e-08ZM0 -0.75C-0.414214 -0.75 -0.75 -0.414213 -0.75 9.0884e-08C-0.75 0.414214 -0.414214 0.75 0 0.75L0 -0.75ZM1.5 8.25L13.1925 8.25L13.1925 6.75L1.5 6.75L1.5 8.25ZM13.192 8.25C13.4522 8.25018 13.7044 8.16017 13.9056 7.99531L12.9551 6.8349C13.0222 6.77994 13.1063 6.74994 13.193 6.75L13.192 8.25ZM13.9056 7.99531C14.1069 7.83044 14.2448 7.60091 14.2959 7.34578L12.8251 7.05141C12.8421 6.96636 12.888 6.88985 12.9551 6.8349L13.9056 7.99531ZM14.2959 7.34568L15.6459 0.595681L14.175 0.301507L12.825 7.05151L14.2959 7.34568ZM15.6459 0.595782C15.6786 0.432496 15.6746 0.26399 15.6342 0.102426L14.1789 0.465858C14.1655 0.412003 14.1642 0.355834 14.1751 0.301407L15.6459 0.595782ZM15.6342 0.102426C15.5939 -0.0591419 15.5182 -0.209732 15.4126 -0.338481L14.2528 0.612827C14.2176 0.569913 14.1924 0.519717 14.1789 0.465858L15.6342 0.102426ZM15.4126 -0.338481C15.307 -0.467228 15.1741 -0.57093 15.0235 -0.642097L14.3825 0.714032C14.3323 0.690308 14.288 0.65574 14.2528 0.612827L15.4126 -0.338481ZM15.0235 -0.642097C14.873 -0.713263 14.7085 -0.750116 14.542 -0.75L14.543 0.75C14.4875 0.750039 14.4327 0.737755 14.3825 0.714032L15.0235 -0.642097ZM14.5425 -0.75L0 -0.75L0 0.75L14.5425 0.75L14.5425 -0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(25%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Cart")}
      {...rest}
    ></Icon>
  );
}
