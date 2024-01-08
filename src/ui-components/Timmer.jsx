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
export default function Timmer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Timmer: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Timmer: {
          paths: [
            {
              d: "M9 0C4.02966 0 0 4.02966 0 9C0 13.9703 4.02966 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02966 13.9703 0 9 0ZM13.1538 10.3846L9 10.3846C8.81639 10.3846 8.6403 10.3117 8.51046 10.1818C8.38063 10.052 8.30769 9.87592 8.30769 9.69231L8.30769 3.46154C8.30769 3.27793 8.38063 3.10184 8.51046 2.972C8.6403 2.84217 8.81639 2.76923 9 2.76923C9.18361 2.76923 9.3597 2.84217 9.48954 2.972C9.61937 3.10184 9.69231 3.27793 9.69231 3.46154L9.69231 9L13.1538 9C13.3375 9 13.5135 9.07294 13.6434 9.20277C13.7732 9.3326 13.8462 9.5087 13.8462 9.69231C13.8462 9.87592 13.7732 10.052 13.6434 10.1818C13.5135 10.3117 13.3375 10.3846 13.1538 10.3846Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75ZM18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M0.75 0C0.75 -0.414214 0.414214 -0.75 0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0L0.75 0ZM0 6.75L-0.75 6.75C-0.75 7.16421 -0.414214 7.5 1.66533e-16 7.5L0 6.75ZM4.5 7.5C4.91421 7.5 5.25 7.16421 5.25 6.75C5.25 6.33579 4.91421 6 4.5 6L4.5 7.5ZM-0.75 0L-0.75 6.75L0.75 6.75L0.75 0L-0.75 0ZM0 7.5L4.5 7.5L4.5 6L0 6L0 7.5Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(50%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Timmer")}
      {...rest}
    ></Icon>
  );
}
