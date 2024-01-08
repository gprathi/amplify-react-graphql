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
export default function Checkbox(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Checkbox: {} }, variantValues: { checkbox: "False" } },
    {
      overrides: {
        Checkbox: {
          paths: [
            {
              d: "M16.5 0L3 0C2.20462 0.000868526 1.44206 0.317218 0.879639 0.879639C0.317218 1.44206 0.000868526 2.20462 0 3L0 16.5C0.000868526 17.2954 0.317218 18.0579 0.879639 18.6204C1.44206 19.1828 2.20462 19.4991 3 19.5L16.5 19.5C17.2954 19.4991 18.0579 19.1828 18.6204 18.6204C19.1828 18.0579 19.4991 17.2954 19.5 16.5L19.5 3C19.4991 2.20462 19.1828 1.44206 18.6204 0.879639C18.0579 0.317218 17.2954 0.000868526 16.5 0L16.5 0ZM14.8242 6.48234L8.52422 13.9823C8.45511 14.0647 8.36912 14.1312 8.27207 14.1773C8.17502 14.2235 8.06918 14.2483 7.96172 14.25L7.94906 14.25C7.84394 14.25 7.74 14.2278 7.64398 14.185C7.54797 14.1422 7.46202 14.0797 7.39172 14.0016L4.69172 11.0016C4.62315 10.9288 4.56981 10.8431 4.53483 10.7495C4.49986 10.6559 4.48395 10.5562 4.48805 10.4563C4.49215 10.3564 4.51617 10.2584 4.5587 10.1679C4.60124 10.0775 4.66142 9.99643 4.73572 9.92957C4.81002 9.8627 4.89694 9.81137 4.99136 9.77857C5.08579 9.74578 5.18581 9.73219 5.28556 9.73861C5.38531 9.74502 5.48277 9.77131 5.57222 9.81594C5.66166 9.86056 5.74128 9.9226 5.80641 9.99844L7.92938 12.3572L13.6758 5.51766C13.8047 5.36863 13.987 5.27631 14.1835 5.26066C14.3799 5.24501 14.5746 5.30728 14.7254 5.43402C14.8763 5.56075 14.9712 5.74176 14.9897 5.93793C15.0082 6.1341 14.9488 6.32966 14.8242 6.48234L14.8242 6.48234Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { checkbox: "True" },
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
          d: "M2.25 1L15.75 1L15.75 -1L2.25 -1L2.25 1ZM15.75 1C16.4404 1 17 1.55964 17 2.25L19 2.25C19 0.455075 17.5449 -1 15.75 -1L15.75 1ZM17 2.25L17 15.75L19 15.75L19 2.25L17 2.25ZM17 15.75C17 16.4404 16.4404 17 15.75 17L15.75 19C17.5449 19 19 17.5449 19 15.75L17 15.75ZM15.75 17L2.25 17L2.25 19L15.75 19L15.75 17ZM2.25 17C1.55964 17 1 16.4404 1 15.75L-1 15.75C-1 17.5449 0.455075 19 2.25 19L2.25 17ZM1 15.75L1 2.25L-1 2.25L-1 15.75L1 15.75ZM1 2.25C1 1.55964 1.55964 1 2.25 1L2.25 -1C0.455075 -1 -1 0.455075 -1 2.25L1 2.25Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 2,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Checkbox")}
      {...rest}
    ></Icon>
  );
}
