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
export default function Bookmark(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Bookmark: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Bookmark: {
          paths: [
            {
              d: "M14.25 21C14.0666 21.0005 13.8893 20.9338 13.7517 20.8125L7.5 15.2536L1.24828 20.8125C1.1401 20.9087 1.00639 20.9715 0.863299 20.9933C0.720208 21.0152 0.573846 20.9952 0.441874 20.9357C0.309902 20.8763 0.197959 20.7799 0.119552 20.6582C0.0411455 20.5365 -0.000374336 20.3948 2.5431e-06 20.25L2.5431e-06 3C0.000871069 2.20462 0.317221 1.44206 0.879642 0.879639C1.44206 0.317218 2.20462 0.000868526 3 0L12 0C12.7954 0.000868526 13.5579 0.317218 14.1204 0.879639C14.6828 1.44206 14.9991 2.20462 15 3L15 20.25C15 20.4489 14.921 20.6397 14.7803 20.7803C14.6397 20.921 14.4489 21 14.25 21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.75%, 6.25%)" },
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
          d: "M11.25 0L11.25 -0.75L11.25 0ZM2.25 0L2.25 -0.75L2.25 0ZM0 19.5L-0.75 19.5C-0.75 19.7953 -0.576667 20.0632 -0.307242 20.1842C-0.0378174 20.3052 0.27753 20.2568 0.498273 20.0606L0 19.5ZM6.75 13.5L7.24827 12.9394C6.96411 12.6869 6.53589 12.6869 6.25173 12.9394L6.75 13.5ZM13.5 19.5L13.0017 20.0606C13.2225 20.2568 13.5378 20.3052 13.8072 20.1842C14.0767 20.0632 14.25 19.7953 14.25 19.5L13.5 19.5ZM13.5 2.25L14.25 2.25L13.5 2.25ZM11.25 -0.75L2.25 -0.75L2.25 0.75L11.25 0.75L11.25 -0.75ZM2.25 -0.75C1.45435 -0.75 0.691289 -0.433929 0.12868 0.12868L1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75L2.25 -0.75ZM0.12868 0.12868C-0.433929 0.691289 -0.75 1.45435 -0.75 2.25L0.75 2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934L0.12868 0.12868ZM-0.75 2.25L-0.75 19.5L0.75 19.5L0.75 2.25L-0.75 2.25ZM0.498273 20.0606L7.24827 14.0606L6.25173 12.9394L-0.498273 18.9394L0.498273 20.0606ZM6.25173 14.0606L13.0017 20.0606L13.9983 18.9394L7.24827 12.9394L6.25173 14.0606ZM14.25 19.5L14.25 2.25L12.75 2.25L12.75 19.5L14.25 19.5ZM14.25 2.25C14.25 1.45435 13.9339 0.691289 13.3713 0.12868L12.3107 1.18934C12.592 1.47064 12.75 1.85217 12.75 2.25L14.25 2.25ZM13.3713 0.12868C12.8087 -0.433929 12.0456 -0.75 11.25 -0.75L11.25 0.75C11.6478 0.75 12.0294 0.908035 12.3107 1.18934L13.3713 0.12868Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(21.88%, 9.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Bookmark")}
      {...rest}
    ></Icon>
  );
}
