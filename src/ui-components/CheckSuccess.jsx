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
export default function CheckSuccess(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { CheckSuccess: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        CheckSuccess: {
          paths: [
            {
              d: "M9.75 0C4.37391 0 0 4.37391 0 9.75C0 15.1261 4.37391 19.5 9.75 19.5C15.1261 19.5 19.5 15.1261 19.5 9.75C19.5 4.37391 15.1261 0 9.75 0ZM14.8242 6.48234L8.52422 13.9823C8.45511 14.0647 8.36912 14.1312 8.27207 14.1773C8.17502 14.2235 8.06918 14.2483 7.96172 14.25L7.94906 14.25C7.84394 14.25 7.74 14.2278 7.64398 14.185C7.54797 14.1422 7.46202 14.0797 7.39172 14.0016L4.69172 11.0016C4.62315 10.9288 4.56981 10.8431 4.53483 10.7495C4.49986 10.6559 4.48395 10.5562 4.48805 10.4563C4.49215 10.3564 4.51617 10.2584 4.5587 10.1679C4.60124 10.0775 4.66142 9.99643 4.73572 9.92957C4.81002 9.8627 4.89694 9.81137 4.99136 9.77857C5.08579 9.74578 5.18581 9.73219 5.28556 9.73861C5.38531 9.74502 5.48277 9.77131 5.57222 9.81594C5.66166 9.86056 5.74128 9.9226 5.80641 9.99844L7.92938 12.3572L13.6758 5.51766C13.8047 5.36863 13.987 5.27631 14.1835 5.26066C14.3799 5.24501 14.5746 5.30728 14.7254 5.43402C14.8763 5.56075 14.9712 5.74176 14.9897 5.93793C15.0082 6.1341 14.9488 6.32966 14.8242 6.48234L14.8242 6.48234Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
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
          d: "M18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9ZM9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M9.57428 0.482394C9.8407 0.165229 9.79956 -0.30786 9.48239 -0.574279C9.16523 -0.840698 8.69214 -0.799559 8.42572 -0.482394L9.57428 0.482394ZM2.7 7.5L2.14253 8.00172C2.28775 8.16308 2.49576 8.2536 2.71281 8.24989C2.92986 8.24618 3.13465 8.14861 3.27428 7.98239L2.7 7.5ZM0.557471 3.99828C0.280376 3.69039 -0.193841 3.66544 -0.501724 3.94253C-0.809606 4.21962 -0.834565 4.69384 -0.557471 5.00172L0.557471 3.99828ZM8.42572 -0.482394L2.12572 7.01761L3.27428 7.98239L9.57428 0.482394L8.42572 -0.482394ZM3.25747 6.99828L0.557471 3.99828L-0.557471 5.00172L2.14253 8.00172L3.25747 6.99828Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(31.25%, 34.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CheckSuccess")}
      {...rest}
    ></Icon>
  );
}
