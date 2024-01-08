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
export default function Lockclosed(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Lockclosed: {} }, variantValues: { property1: "False" } },
    {
      overrides: {
        Lockclosed: {
          paths: [
            {
              d: "M13.5 8.25L12.75 8.25L12.75 4.5C12.75 3.30653 12.2759 2.16193 11.432 1.31802C10.5881 0.474106 9.44347 7.49401e-16 8.25 0C7.05653 7.49401e-16 5.91193 0.474106 5.06802 1.31802C4.22411 2.16193 3.75 3.30653 3.75 4.5L3.75 8.25L3 8.25C2.20462 8.25087 1.44206 8.56722 0.879639 9.12964C0.317218 9.69206 0.000868526 10.4546 0 11.25L0 19.5C0.000868526 20.2954 0.317218 21.0579 0.879639 21.6204C1.44206 22.1828 2.20462 22.4991 3 22.5L13.5 22.5C14.2954 22.4991 15.0579 22.1828 15.6204 21.6204C16.1828 21.0579 16.4991 20.2954 16.5 19.5L16.5 11.25C16.4991 10.4546 16.1828 9.69206 15.6204 9.12964C15.0579 8.56722 14.2954 8.25087 13.5 8.25L13.5 8.25ZM11.25 8.25L5.25 8.25L5.25 4.5C5.25 3.70435 5.56607 2.94129 6.12868 2.37868C6.69129 1.81607 7.45435 1.5 8.25 1.5C9.04565 1.5 9.80871 1.81607 10.3713 2.37868C10.9339 2.94129 11.25 3.70435 11.25 4.5L11.25 8.25Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.63%, 3.13%)" },
            },
          ],
        },
      },
      variantValues: { property1: "True" },
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
          d: "M6.75 8.20312C6.75 8.61734 7.08579 8.95312 7.5 8.95312C7.91421 8.95312 8.25 8.61734 8.25 8.20312L6.75 8.20312ZM0 3.75L-0.75 3.75L0 3.75ZM-0.75 8.20312C-0.75 8.61734 -0.414214 8.95312 0 8.95312C0.414214 8.95312 0.75 8.61734 0.75 8.20312L-0.75 8.20312ZM8.25 8.20312L8.25 3.75L6.75 3.75L6.75 8.20312L8.25 8.20312ZM8.25 3.75C8.25 2.55653 7.77589 1.41193 6.93198 0.56802L5.87132 1.62868C6.43393 2.19129 6.75 2.95435 6.75 3.75L8.25 3.75ZM6.93198 0.56802C6.08807 -0.275894 4.94347 -0.75 3.75 -0.75L3.75 0.75C4.54565 0.75 5.30871 1.06607 5.87132 1.62868L6.93198 0.56802ZM3.75 -0.75C2.55653 -0.75 1.41193 -0.275894 0.56802 0.56802L1.62868 1.62868C2.19129 1.06607 2.95435 0.75 3.75 0.75L3.75 -0.75ZM0.56802 0.56802C-0.275894 1.41193 -0.75 2.55653 -0.75 3.75L0.75 3.75C0.75 2.95435 1.06607 2.19129 1.62868 1.62868L0.56802 0.56802ZM-0.75 3.75L-0.75 8.20312L0.75 8.20312L0.75 3.75L-0.75 3.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(34.38%, 6.45%)" },
        },
        {
          d: "M2.25 0.75L12.75 0.75L12.75 -0.75L2.25 -0.75L2.25 0.75ZM12.75 0.75C13.5784 0.75 14.25 1.42157 14.25 2.25L15.75 2.25C15.75 0.593146 14.4069 -0.75 12.75 -0.75L12.75 0.75ZM14.25 2.25L14.25 10.5L15.75 10.5L15.75 2.25L14.25 2.25ZM14.25 10.5C14.25 11.3284 13.5784 12 12.75 12L12.75 13.5C14.4069 13.5 15.75 12.1569 15.75 10.5L14.25 10.5ZM12.75 12L2.25 12L2.25 13.5L12.75 13.5L12.75 12ZM2.25 12C1.42157 12 0.75 11.3284 0.75 10.5L-0.75 10.5C-0.75 12.1569 0.593146 13.5 2.25 13.5L2.25 12ZM0.75 10.5L0.75 2.25L-0.75 2.25L-0.75 10.5L0.75 10.5ZM0.75 2.25C0.75 1.42157 1.42157 0.75 2.25 0.75L2.25 -0.75C0.593146 -0.75 -0.75 0.593146 -0.75 2.25L0.75 2.25Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(18.75%, 40.63%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Lockclosed")}
      {...rest}
    ></Icon>
  );
}
