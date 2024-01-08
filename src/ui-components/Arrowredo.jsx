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
export default function Arrowredo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowredo: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Arrowredo: {
          paths: [
            {
              d: "M0 9.75C0 15.1345 4.36547 19.5 9.75 19.5C15.1345 19.5 19.5 15.1345 19.5 9.75C19.5 4.36547 15.1345 0 9.75 0C4.36547 0 0 4.36547 0 9.75ZM4.5 12.8752C4.75547 9.99469 6.10031 7.38656 10.2595 7.38656L10.2595 5.63719C10.2603 5.5615 10.283 5.48765 10.3249 5.42466C10.3669 5.36167 10.4263 5.31225 10.4959 5.28243C10.5655 5.25261 10.6422 5.24369 10.7168 5.25674C10.7913 5.26979 10.8605 5.30426 10.9158 5.35594L14.8791 9.09375C14.9172 9.12969 14.9476 9.17305 14.9684 9.22118C14.9892 9.2693 14.9999 9.32117 14.9999 9.37359C14.9999 9.42602 14.9892 9.47789 14.9684 9.52601C14.9476 9.57414 14.9172 9.6175 14.8791 9.65344L10.9219 13.3927C10.8666 13.4443 10.7974 13.4788 10.7229 13.4919C10.6483 13.5049 10.5716 13.496 10.502 13.4662C10.4324 13.4363 10.373 13.3869 10.331 13.3239C10.2891 13.2609 10.2663 13.1871 10.2656 13.1114L10.2656 11.3634C7.59047 11.3634 6.30422 11.9948 5.17594 13.1766C4.91859 13.4414 4.46953 13.2384 4.5 12.8752L4.5 12.8752Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
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
          d: "M5.76128 7.86192L5.76128 6.11254C3.08612 6.11254 1.79987 6.74395 0.671592 7.92567C0.418467 8.19051 -0.0315335 7.98754 0.00174777 7.62426C0.257217 4.74379 1.60206 2.13567 5.76128 2.13567L5.76128 0.386291C5.762 0.310601 5.78473 0.236756 5.8267 0.173763C5.86867 0.11077 5.92806 0.0613508 5.99763 0.0315336C6.06721 0.00171646 6.14395 -0.0072102 6.21851 0.00584235C6.29307 0.0188949 6.36222 0.0533623 6.41753 0.105041L10.3789 3.84285C10.4171 3.87879 10.4475 3.92216 10.4683 3.97028C10.4891 4.01841 10.4998 4.07027 10.4998 4.1227C10.4998 4.17512 10.4891 4.22699 10.4683 4.27511C10.4475 4.32324 10.4171 4.3666 10.3789 4.40254L6.42175 8.14176C6.3667 8.19475 6.2973 8.2304 6.22217 8.24429C6.14704 8.25818 6.06948 8.24969 5.99913 8.21988C5.92877 8.19007 5.86873 8.14026 5.82645 8.07662C5.78416 8.01298 5.7615 7.93832 5.76128 7.86192L5.76128 7.86192Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(28.13%, 31.25%)" },
        },
        {
          d: "M-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75ZM18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9ZM9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowredo")}
      {...rest}
    ></Icon>
  );
}
