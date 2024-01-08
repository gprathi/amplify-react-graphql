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
export default function Addcircle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Addcircle: {} },
      variantValues: { property1: "ion:add-circle-outline" },
    },
    {
      overrides: {
        Addcircle: {
          paths: [
            {
              d: "M9.75 0C4.37391 0 0 4.37391 0 9.75C0 15.1261 4.37391 19.5 9.75 19.5C15.1261 19.5 19.5 15.1261 19.5 9.75C19.5 4.37391 15.1261 0 9.75 0ZM13.5 10.5L10.5 10.5L10.5 13.5C10.5 13.6989 10.421 13.8897 10.2803 14.0303C10.1397 14.171 9.94891 14.25 9.75 14.25C9.55109 14.25 9.36032 14.171 9.21967 14.0303C9.07902 13.8897 9 13.6989 9 13.5L9 10.5L6 10.5C5.80109 10.5 5.61032 10.421 5.46967 10.2803C5.32902 10.1397 5.25 9.94891 5.25 9.75C5.25 9.55109 5.32902 9.36032 5.46967 9.21967C5.61032 9.07902 5.80109 9 6 9L9 9L9 6C9 5.80109 9.07902 5.61032 9.21967 5.46967C9.36032 5.32902 9.55109 5.25 9.75 5.25C9.94891 5.25 10.1397 5.32902 10.2803 5.46967C10.421 5.61032 10.5 5.80109 10.5 6L10.5 9L13.5 9C13.6989 9 13.8897 9.07902 14.0303 9.21967C14.171 9.36032 14.25 9.55109 14.25 9.75C14.25 9.94891 14.171 10.1397 14.0303 10.2803C13.8897 10.421 13.6989 10.5 13.5 10.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { property1: "ion:add-circle" },
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
          d: "M18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9ZM9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M4.5 0C4.5 -0.414214 4.16421 -0.75 3.75 -0.75C3.33579 -0.75 3 -0.414214 3 0L4.5 0ZM3 7.5C3 7.91421 3.33579 8.25 3.75 8.25C4.16421 8.25 4.5 7.91421 4.5 7.5L3 7.5ZM7.5 4.5C7.91421 4.5 8.25 4.16421 8.25 3.75C8.25 3.33579 7.91421 3 7.5 3L7.5 4.5ZM0 3C-0.414214 3 -0.75 3.33579 -0.75 3.75C-0.75 4.16421 -0.414214 4.5 0 4.5L0 3ZM3 0L3 7.5L4.5 7.5L4.5 0L3 0ZM7.5 3L0 3L0 4.5L7.5 4.5L7.5 3Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(34.38%, 34.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Addcircle")}
      {...rest}
    ></Icon>
  );
}
