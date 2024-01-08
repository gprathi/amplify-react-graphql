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
export default function Breakfast(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Breakfast: {} }, variantValues: { breatfast: "False" } },
    {
      overrides: {
        Breakfast: {
          paths: [
            {
              d: "M18 0L2.25 0C2.05109 0 1.86032 0.0790178 1.71967 0.21967C1.57902 0.360322 1.5 0.551088 1.5 0.75L1.5 9.75C1.50136 10.9431 1.97591 12.0869 2.81953 12.9305C3.66314 13.7741 4.80694 14.2486 6 14.25L11.25 14.25C12.4431 14.2486 13.5869 13.7741 14.4305 12.9305C15.2741 12.0869 15.7486 10.9431 15.75 9.75L15.75 6L16.5938 6C17.3643 5.99913 18.103 5.69266 18.6478 5.14782C19.1927 4.60298 19.4991 3.86427 19.5 3.09375L19.5 1.5C19.5 1.10218 19.342 0.720644 19.0607 0.43934C18.7794 0.158035 18.3978 9.99201e-16 18 0L18 0ZM18 3.09375C18 3.46671 17.8518 3.8244 17.5881 4.08812C17.3244 4.35184 16.9667 4.5 16.5938 4.5L15.75 4.5L15.75 1.5L18 1.5L18 3.09375ZM16.5 15.75L0.75 15.75C0.551088 15.75 0.360322 15.829 0.21967 15.9697C0.0790176 16.1103 6.66134e-16 16.3011 0 16.5C3.33067e-16 16.6989 0.0790176 16.8897 0.21967 17.0303C0.360322 17.171 0.551088 17.25 0.75 17.25L16.5 17.25C16.6989 17.25 16.8897 17.171 17.0303 17.0303C17.171 16.8897 17.25 16.6989 17.25 16.5C17.25 16.3011 17.171 16.1103 17.0303 15.9697C16.8897 15.829 16.6989 15.75 16.5 15.75Z",
              fill: "rgba(17,34,17,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { breatfast: "True" },
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
          d: "M14.25 -0.75C13.8358 -0.75 13.5 -0.414214 13.5 0C13.5 0.414214 13.8358 0.75 14.25 0.75L14.25 -0.75ZM15.8438 4.5L15.8438 5.25L15.8438 4.5ZM14.25 3.75C13.8358 3.75 13.5 4.08579 13.5 4.5C13.5 4.91421 13.8358 5.25 14.25 5.25L14.25 3.75ZM1.5 0L1.5 -0.75C1.08579 -0.75 0.75 -0.414214 0.75 1.66533e-16L1.5 0ZM14.25 0L15 0C15 -0.414214 14.6642 -0.75 14.25 -0.75L14.25 0ZM14.25 9L13.5 9L14.25 9ZM0 15C-0.414214 15 -0.75 15.3358 -0.75 15.75C-0.75 16.1642 -0.414214 16.5 0 16.5L0 15ZM15.75 16.5C16.1642 16.5 16.5 16.1642 16.5 15.75C16.5 15.3358 16.1642 15 15.75 15L15.75 16.5ZM14.25 0.75L17.25 0.75L17.25 -0.75L14.25 -0.75L14.25 0.75ZM17.25 0.75L17.25 0.75L18.3107 -0.31066C18.0294 -0.591965 17.6478 -0.75 17.25 -0.75L17.25 0.75ZM17.25 0.75L17.25 0.75L18.75 0.75C18.75 0.352177 18.592 -0.0293545 18.3107 -0.31066L17.25 0.75ZM17.25 0.75L17.25 2.34375L18.75 2.34375L18.75 0.75L17.25 0.75ZM17.25 2.34375C17.25 2.71671 17.1018 3.0744 16.8381 3.33812L17.8988 4.39878C18.4438 3.85375 18.75 3.11454 18.75 2.34375L17.25 2.34375ZM16.8381 3.33812C16.5744 3.60184 16.2167 3.75 15.8438 3.75L15.8438 5.25C16.6145 5.25 17.3538 4.94381 17.8988 4.39878L16.8381 3.33812ZM15.8438 3.75L14.25 3.75L14.25 5.25L15.8438 5.25L15.8438 3.75ZM1.5 0.75L14.25 0.75L14.25 -0.75L1.5 -0.75L1.5 0.75ZM13.5 0L13.5 9L15 9L15 0L13.5 0ZM13.5 9C13.5 9.39397 13.4224 9.78407 13.2716 10.1481L14.6575 10.7221C14.8836 10.1761 15 9.59095 15 9L13.5 9ZM13.2716 10.1481C13.1209 10.512 12.8999 10.8427 12.6213 11.1213L13.682 12.182C14.0998 11.7641 14.4313 11.268 14.6575 10.7221L13.2716 10.1481ZM12.6213 11.1213C12.3427 11.3999 12.012 11.6209 11.6481 11.7716L12.2221 13.1575C12.768 12.9313 13.2641 12.5998 13.682 12.182L12.6213 11.1213ZM11.6481 11.7716C11.2841 11.9224 10.894 12 10.5 12L10.5 13.5C11.0909 13.5 11.6761 13.3836 12.2221 13.1575L11.6481 11.7716ZM10.5 12L5.25 12L5.25 13.5L10.5 13.5L10.5 12ZM5.25 12C4.45435 12 3.69129 11.6839 3.12868 11.1213L2.06802 12.182C2.91193 13.0259 4.05653 13.5 5.25 13.5L5.25 12ZM3.12868 11.1213C2.56607 10.5587 2.25 9.79565 2.25 9L0.75 9C0.75 10.1935 1.22411 11.3381 2.06802 12.182L3.12868 11.1213ZM2.25 9L2.25 0L0.75 0L0.75 9L2.25 9ZM0 16.5L15.75 16.5L15.75 15L0 15L0 16.5Z",
          stroke: "rgba(17,34,17,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 15.63%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Breakfast")}
      {...rest}
    ></Icon>
  );
}
