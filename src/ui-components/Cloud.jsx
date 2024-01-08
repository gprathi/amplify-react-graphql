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
export default function Cloud(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Cloud: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Cloud: {
          paths: [
            {
              d: "M17.625 16.5001L5.4375 16.5001C3.92016 16.5001 2.61422 16.0984 1.65984 15.339C0.57375 14.4741 0 13.1902 0 11.6251C0 8.92648 1.96875 7.37914 4.10437 6.90242C4.24485 6.87041 4.37314 6.79862 4.47389 6.69562C4.57464 6.59262 4.64359 6.46279 4.6725 6.32164C5.0325 4.60226 5.81859 3.12711 6.97781 2.00914C8.32705 0.712043 10.1284 -0.00857262 12 7.69746e-05C13.6641 7.69746e-05 15.1987 0.548046 16.4381 1.58445C17.2853 2.29904 17.9593 3.19658 18.4092 4.20945C18.4576 4.31817 18.5312 4.41382 18.6239 4.48848C18.7165 4.56314 18.8257 4.61468 18.9422 4.63883C20.2078 4.9018 21.3361 5.45117 22.185 6.22555C23.3723 7.30695 24 8.78539 24 10.5001C24 12.1876 23.3259 13.7288 22.102 14.8402C20.9231 15.9109 19.3331 16.5001 17.625 16.5001Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 15.62%)" },
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
          d: "M3.94594 6.80578L4.05641 7.5476L4.05714 7.54749L3.94594 6.80578ZM4.57266 6.18469L5.31333 6.30257L5.31341 6.30208L4.57266 6.18469ZM17.1056 4.07812L17.8066 3.81133L17.8058 3.80943L17.1056 4.07812ZM17.693 4.55531L17.8106 3.8146L17.8106 3.81459L17.693 4.55531ZM4.05714 7.54749C4.37162 7.50034 4.66291 7.35426 4.88878 7.13042L3.83291 6.06499C3.83341 6.0645 3.83404 6.06417 3.83473 6.06407L4.05714 7.54749ZM4.88878 7.13042C5.11464 6.90658 5.26335 6.61662 5.31333 6.30257L3.83198 6.0668C3.83209 6.06611 3.83241 6.06548 3.83291 6.06499L4.88878 7.13042ZM5.31341 6.30208C5.87257 2.7736 8.38571 0.75 11.25 0.75L11.25 -0.75C7.58367 -0.75 4.49618 1.87546 3.8319 6.0673L5.31341 6.30208ZM11.25 0.75C13.909 0.75 15.6893 2.48079 16.4054 4.34682L17.8058 3.80943C16.916 1.49046 14.6557 -0.75 11.25 -0.75L11.25 0.75ZM16.4047 4.34492C16.4989 4.59243 16.6567 4.8107 16.8623 4.9777L17.8081 3.8135C17.8074 3.81293 17.8069 3.81218 17.8066 3.81133L16.4047 4.34492ZM16.8623 4.9777C17.0678 5.1447 17.3138 5.2545 17.5754 5.29603L17.8106 3.81459C17.8097 3.81445 17.8088 3.81407 17.8081 3.8135L16.8623 4.9777ZM17.5753 5.29603C18.7636 5.48475 19.8103 5.96755 20.5511 6.70237C21.2803 7.42557 21.75 8.42719 21.75 9.75L23.25 9.75C23.25 8.03578 22.6266 6.64818 21.6074 5.63736C20.6 4.63815 19.2432 4.04212 17.8106 3.8146L17.5753 5.29603ZM21.75 9.75C21.75 12.3631 19.6243 14.25 16.875 14.25L16.875 15.75C20.3132 15.75 23.25 13.3244 23.25 9.75L21.75 9.75ZM16.875 14.25L4.6875 14.25L4.6875 15.75L16.875 15.75L16.875 14.25ZM4.6875 14.25C3.51153 14.25 2.52256 13.9554 1.84409 13.4153C1.19002 12.8945 0.75 12.0883 0.75 10.875L-0.75 10.875C-0.75 12.5004 -0.135335 13.7567 0.909815 14.5888C1.93057 15.4014 3.28535 15.75 4.6875 15.75L4.6875 14.25ZM0.75 10.875C0.75 9.82626 1.16288 9.08005 1.76142 8.55105C2.37882 8.00539 3.21957 7.67222 4.05641 7.5476L3.83547 6.06396C2.78372 6.22059 1.65149 6.64633 0.768069 7.42711C-0.13421 8.22456 -0.75 9.37233 -0.75 10.875L0.75 10.875Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(3.13%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Cloud")}
      {...rest}
    ></Icon>
  );
}