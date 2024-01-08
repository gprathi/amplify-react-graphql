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
export default function Component60(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Component60: {} },
      variantValues: { property1: "ion:heart-circle" },
    },
    {
      overrides: {
        Component60: {
          paths: [
            {
              d: "M18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9ZM9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(12.5%, 12.5%)" },
            },
            {
              d: "M4.87528 9.00094C4.72476 9.00082 4.57777 8.95541 4.4534 8.87063C2.61122 7.62 1.8134 6.76125 1.37372 6.22641C0.436217 5.08406 -0.0128455 3.91078 0.000279463 2.64047C0.0148107 1.18453 1.18247 0 2.60325 0C3.5595 0 4.24387 0.498281 4.67044 0.956719C4.69672 0.984523 4.7284 1.00667 4.76355 1.02181C4.79869 1.03695 4.83655 1.04475 4.87481 1.04475C4.91307 1.04475 4.95093 1.03695 4.98608 1.02181C5.02122 1.00667 5.0529 0.984523 5.07919 0.956719C5.50622 0.498281 6.19012 0 7.14637 0C8.56715 0 9.73481 1.18453 9.74934 2.64047C9.76247 3.91078 9.31294 5.08406 8.3759 6.22641C7.93622 6.76266 7.1384 7.62 5.29622 8.87063C5.17212 8.95523 5.02547 9.00063 4.87528 9.00094Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(29.69%, 32.81%)" },
            },
          ],
        },
      },
      variantValues: { property1: "ion:heart-circle-outline" },
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
          d: "M9.75 0C4.37391 0 0 4.37391 0 9.75C0 15.1261 4.37391 19.5 9.75 19.5C15.1261 19.5 19.5 15.1261 19.5 9.75C19.5 4.37391 15.1261 0 9.75 0ZM13.2511 11.8509C12.8114 12.3872 12.0136 13.2445 10.1714 14.4952C10.0472 14.5802 9.90011 14.6257 9.74953 14.6257C9.59896 14.6257 9.4519 14.5802 9.32766 14.4952C7.48547 13.2445 6.68766 12.3858 6.24797 11.8509C5.31047 10.7086 4.86141 9.53531 4.87453 8.265C4.88906 6.80906 6.05672 5.62453 7.4775 5.62453C8.43375 5.62453 9.11812 6.12281 9.54469 6.58125C9.57097 6.60905 9.60266 6.6312 9.6378 6.64634C9.67294 6.66148 9.7108 6.66928 9.74906 6.66928C9.78732 6.66928 9.82519 6.66148 9.86033 6.64634C9.89547 6.6312 9.92715 6.60905 9.95344 6.58125C10.3805 6.12281 11.0644 5.62453 12.0206 5.62453C13.4414 5.62453 14.6091 6.80906 14.6236 8.265C14.6377 9.53531 14.1881 10.7086 13.2511 11.8509L13.2511 11.8509Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(9.38%, 9.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Component60")}
      {...rest}
    ></Icon>
  );
}
