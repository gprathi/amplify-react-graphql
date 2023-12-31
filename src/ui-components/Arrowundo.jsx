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
export default function Arrowundo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowundo: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Arrowundo: {
          paths: [
            {
              d: "M9.75 0C4.36547 0 0 4.36547 0 9.75C0 15.1345 4.36547 19.5 9.75 19.5C15.1345 19.5 19.5 15.1345 19.5 9.75C19.5 4.36547 15.1345 0 9.75 0ZM14.3283 13.1766C13.2 11.9948 11.9137 11.3634 9.23859 11.3634L9.23859 13.1128C9.2383 13.189 9.21571 13.2634 9.17363 13.3268C9.13154 13.3903 9.0718 13.4401 9.00176 13.47C8.93173 13.4999 8.85447 13.5086 8.77952 13.4951C8.70457 13.4816 8.63521 13.4465 8.58 13.3941L4.62094 9.65625C4.58277 9.62031 4.55236 9.57695 4.53157 9.52882C4.51078 9.4807 4.50006 9.42883 4.50006 9.37641C4.50006 9.32398 4.51078 9.27211 4.53157 9.22399C4.55236 9.17586 4.58277 9.1325 4.62094 9.09656L8.57812 5.35734C8.63334 5.3049 8.7027 5.26976 8.77765 5.25627C8.8526 5.24279 8.92985 5.25154 8.99989 5.28144C9.06992 5.31135 9.12967 5.36111 9.17175 5.42458C9.21384 5.48804 9.23642 5.56244 9.23672 5.63859L9.23672 7.38797C13.3959 7.38797 14.7408 9.99609 14.9963 12.8766C15.0305 13.2384 14.5814 13.4414 14.3283 13.1766L14.3283 13.1766Z",
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
          d: "M4.73853 7.86411L4.73853 6.11474C7.41369 6.11474 8.69994 6.74614 9.82822 7.92786C10.0813 8.19271 10.5313 7.98974 10.4981 7.62646C10.2426 4.74599 8.89775 2.13786 4.73853 2.13786L4.73853 0.388485C4.73824 0.312333 4.71565 0.237934 4.67357 0.174467C4.63148 0.111 4.57174 0.0612435 4.5017 0.0313358C4.43167 0.00142804 4.35441 -0.00732171 4.27946 0.00616594C4.20451 0.0196536 4.13515 0.0547881 4.07994 0.107235L0.120876 3.84505C0.0827097 3.88099 0.0522979 3.92435 0.0315106 3.97248C0.0107233 4.0206 1.33227e-15 4.07247 0 4.12489C1.33227e-15 4.17731 0.0107233 4.22918 0.0315106 4.27731C0.0522979 4.32543 0.0827097 4.3688 0.120876 4.40474L4.07806 8.14395C4.13311 8.19694 4.20251 8.2326 4.27764 8.24648C4.35278 8.26037 4.43033 8.25189 4.50068 8.22208C4.57104 8.19227 4.63108 8.14245 4.67337 8.07881C4.71565 8.01517 4.73831 7.94052 4.73853 7.86411L4.73853 7.86411Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(28.13%, 31.24%)" },
        },
        {
          d: "M9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75ZM18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowundo")}
      {...rest}
    ></Icon>
  );
}
