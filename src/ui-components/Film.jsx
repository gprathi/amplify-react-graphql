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
export default function Film(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Film: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Film: {
          paths: [
            {
              d: "M18.9375 0L2.0625 0C1.51568 0.000620328 0.991437 0.218118 0.604777 0.604777C0.218118 0.991437 0.000620328 1.51568 0 2.0625L0 14.4375C0.000620328 14.9843 0.218118 15.5086 0.604777 15.8952C0.991437 16.2819 1.51568 16.4994 2.0625 16.5L18.9375 16.5C19.4843 16.4994 20.0086 16.2819 20.3952 15.8952C20.7819 15.5086 20.9994 14.9843 21 14.4375L21 2.0625C20.9994 1.51568 20.7819 0.991437 20.3952 0.604777C20.0086 0.218118 19.4843 0.000620328 18.9375 0L18.9375 0ZM3.75 14.4375C3.75 14.5867 3.69074 14.7298 3.58525 14.8352C3.47976 14.9407 3.33668 15 3.1875 15L2.0625 15C1.91332 15 1.77024 14.9407 1.66475 14.8352C1.55926 14.7298 1.5 14.5867 1.5 14.4375L1.5 13.3125C1.5 13.1633 1.55926 13.0202 1.66475 12.9148C1.77024 12.8093 1.91332 12.75 2.0625 12.75L3.1875 12.75C3.33668 12.75 3.47976 12.8093 3.58525 12.9148C3.69074 13.0202 3.75 13.1633 3.75 13.3125L3.75 14.4375ZM3.75 10.6875C3.75 10.8367 3.69074 10.9798 3.58525 11.0852C3.47976 11.1907 3.33668 11.25 3.1875 11.25L2.0625 11.25C1.91332 11.25 1.77024 11.1907 1.66475 11.0852C1.55926 10.9798 1.5 10.8367 1.5 10.6875L1.5 9.5625C1.5 9.41332 1.55926 9.27024 1.66475 9.16475C1.77024 9.05926 1.91332 9 2.0625 9L3.1875 9C3.33668 9 3.47976 9.05926 3.58525 9.16475C3.69074 9.27024 3.75 9.41332 3.75 9.5625L3.75 10.6875ZM3.75 6.9375C3.75 7.08668 3.69074 7.22976 3.58525 7.33525C3.47976 7.44074 3.33668 7.5 3.1875 7.5L2.0625 7.5C1.91332 7.5 1.77024 7.44074 1.66475 7.33525C1.55926 7.22976 1.5 7.08668 1.5 6.9375L1.5 5.8125C1.5 5.66332 1.55926 5.52024 1.66475 5.41475C1.77024 5.30926 1.91332 5.25 2.0625 5.25L3.1875 5.25C3.33668 5.25 3.47976 5.30926 3.58525 5.41475C3.69074 5.52024 3.75 5.66332 3.75 5.8125L3.75 6.9375ZM3.75 3.1875C3.75 3.33668 3.69074 3.47976 3.58525 3.58525C3.47976 3.69074 3.33668 3.75 3.1875 3.75L2.0625 3.75C1.91332 3.75 1.77024 3.69074 1.66475 3.58525C1.55926 3.47976 1.5 3.33668 1.5 3.1875L1.5 2.0625C1.5 1.91332 1.55926 1.77024 1.66475 1.66475C1.77024 1.55926 1.91332 1.5 2.0625 1.5L3.1875 1.5C3.33668 1.5 3.47976 1.55926 3.58525 1.66475C3.69074 1.77024 3.75 1.91332 3.75 2.0625L3.75 3.1875ZM15.0787 9L5.92125 9C5.72234 9 5.53157 8.92098 5.39092 8.78033C5.25027 8.63968 5.17125 8.44891 5.17125 8.25C5.17125 8.05109 5.25027 7.86032 5.39092 7.71967C5.53157 7.57902 5.72234 7.5 5.92125 7.5L15.0787 7.5C15.2777 7.5 15.4684 7.57902 15.6091 7.71967C15.7497 7.86032 15.8287 8.05109 15.8287 8.25C15.8287 8.44891 15.7497 8.63968 15.6091 8.78033C15.4684 8.92098 15.2777 9 15.0787 9ZM19.5 14.4375C19.5 14.5867 19.4407 14.7298 19.3352 14.8352C19.2298 14.9407 19.0867 15 18.9375 15L17.8125 15C17.6633 15 17.5202 14.9407 17.4148 14.8352C17.3093 14.7298 17.25 14.5867 17.25 14.4375L17.25 13.3125C17.25 13.1633 17.3093 13.0202 17.4148 12.9148C17.5202 12.8093 17.6633 12.75 17.8125 12.75L18.9375 12.75C19.0867 12.75 19.2298 12.8093 19.3352 12.9148C19.4407 13.0202 19.5 13.1633 19.5 13.3125L19.5 14.4375ZM19.5 10.6875C19.5 10.8367 19.4407 10.9798 19.3352 11.0852C19.2298 11.1907 19.0867 11.25 18.9375 11.25L17.8125 11.25C17.6633 11.25 17.5202 11.1907 17.4148 11.0852C17.3093 10.9798 17.25 10.8367 17.25 10.6875L17.25 9.5625C17.25 9.41332 17.3093 9.27024 17.4148 9.16475C17.5202 9.05926 17.6633 9 17.8125 9L18.9375 9C19.0867 9 19.2298 9.05926 19.3352 9.16475C19.4407 9.27024 19.5 9.41332 19.5 9.5625L19.5 10.6875ZM19.5 6.9375C19.5 7.08668 19.4407 7.22976 19.3352 7.33525C19.2298 7.44074 19.0867 7.5 18.9375 7.5L17.8125 7.5C17.6633 7.5 17.5202 7.44074 17.4148 7.33525C17.3093 7.22976 17.25 7.08668 17.25 6.9375L17.25 5.8125C17.25 5.66332 17.3093 5.52024 17.4148 5.41475C17.5202 5.30926 17.6633 5.25 17.8125 5.25L18.9375 5.25C19.0867 5.25 19.2298 5.30926 19.3352 5.41475C19.4407 5.52024 19.5 5.66332 19.5 5.8125L19.5 6.9375ZM19.5 3.1875C19.5 3.33668 19.4407 3.47976 19.3352 3.58525C19.2298 3.69074 19.0867 3.75 18.9375 3.75L17.8125 3.75C17.6633 3.75 17.5202 3.69074 17.4148 3.58525C17.3093 3.47976 17.25 3.33668 17.25 3.1875L17.25 2.0625C17.25 1.91332 17.3093 1.77024 17.4148 1.66475C17.5202 1.55926 17.6633 1.5 17.8125 1.5L18.9375 1.5C19.0867 1.5 19.2298 1.55926 19.3352 1.66475C19.4407 1.77024 19.5 1.91332 19.5 2.0625L19.5 3.1875Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 15.63%)" },
            },
          ],
        },
      },
      variantValues: { filled: "ion:film" },
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
          d: "M1.3125 0.75L18.1875 0.75L18.1875 -0.75L1.3125 -0.75L1.3125 0.75ZM18.1875 0.75C18.4982 0.75 18.75 1.00184 18.75 1.3125L20.25 1.3125C20.25 0.173413 19.3266 -0.75 18.1875 -0.75L18.1875 0.75ZM18.75 1.3125L18.75 13.6875L20.25 13.6875L20.25 1.3125L18.75 1.3125ZM18.75 13.6875C18.75 13.9982 18.4982 14.25 18.1875 14.25L18.1875 15.75C19.3266 15.75 20.25 14.8266 20.25 13.6875L18.75 13.6875ZM18.1875 14.25L1.3125 14.25L1.3125 15.75L18.1875 15.75L18.1875 14.25ZM1.3125 14.25C1.00184 14.25 0.75 13.9982 0.75 13.6875L-0.75 13.6875C-0.75 14.8266 0.173413 15.75 1.3125 15.75L1.3125 14.25ZM0.75 13.6875L0.75 1.3125L-0.75 1.3125L-0.75 13.6875L0.75 13.6875ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 18.75%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(75%, 65.63%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(75%, 50%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(75%, 34.38%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(75%, 18.75%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 65.63%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 50%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 34.38%)" },
        },
        {
          d: "M1.3125 0.75L2.4375 0.75L2.4375 -0.75L1.3125 -0.75L1.3125 0.75ZM2.4375 0.75C2.74816 0.75 3 1.00184 3 1.3125L4.5 1.3125C4.5 0.173413 3.57659 -0.75 2.4375 -0.75L2.4375 0.75ZM3 1.3125L3 2.4375L4.5 2.4375L4.5 1.3125L3 1.3125ZM3 2.4375C3 2.74816 2.74816 3 2.4375 3L2.4375 4.5C3.57659 4.5 4.5 3.57659 4.5 2.4375L3 2.4375ZM2.4375 3L1.3125 3L1.3125 4.5L2.4375 4.5L2.4375 3ZM1.3125 3C1.00184 3 0.75 2.74816 0.75 2.4375L-0.75 2.4375C-0.75 3.57659 0.173413 4.5 1.3125 4.5L1.3125 3ZM0.75 2.4375L0.75 1.3125L-0.75 1.3125L-0.75 2.4375L0.75 2.4375ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 18.75%)" },
        },
        {
          d: "M1.3125 0.75L10.6875 0.75L10.6875 -0.75L1.3125 -0.75L1.3125 0.75ZM10.6875 0.75C10.9982 0.75 11.25 1.00184 11.25 1.3125L12.75 1.3125C12.75 0.173413 11.8266 -0.75 10.6875 -0.75L10.6875 0.75ZM11.25 1.3125L11.25 6.1875L12.75 6.1875L12.75 1.3125L11.25 1.3125ZM11.25 6.1875C11.25 6.49816 10.9982 6.75 10.6875 6.75L10.6875 8.25C11.8266 8.25 12.75 7.32659 12.75 6.1875L11.25 6.1875ZM10.6875 6.75L1.3125 6.75L1.3125 8.25L10.6875 8.25L10.6875 6.75ZM1.3125 6.75C1.00184 6.75 0.75 6.49816 0.75 6.1875L-0.75 6.1875C-0.75 7.32659 0.173413 8.25 1.3125 8.25L1.3125 6.75ZM0.75 6.1875L0.75 1.3125L-0.75 1.3125L-0.75 6.1875L0.75 6.1875ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(25%, 18.75%)" },
        },
        {
          d: "M1.3125 0.75L10.6875 0.75L10.6875 -0.75L1.3125 -0.75L1.3125 0.75ZM10.6875 0.75C10.9982 0.75 11.25 1.00184 11.25 1.3125L12.75 1.3125C12.75 0.173413 11.8266 -0.75 10.6875 -0.75L10.6875 0.75ZM11.25 1.3125L11.25 6.1875L12.75 6.1875L12.75 1.3125L11.25 1.3125ZM11.25 6.1875C11.25 6.49816 10.9982 6.75 10.6875 6.75L10.6875 8.25C11.8266 8.25 12.75 7.32659 12.75 6.1875L11.25 6.1875ZM10.6875 6.75L1.3125 6.75L1.3125 8.25L10.6875 8.25L10.6875 6.75ZM1.3125 6.75C1.00184 6.75 0.75 6.49816 0.75 6.1875L-0.75 6.1875C-0.75 7.32659 0.173413 8.25 1.3125 8.25L1.3125 6.75ZM0.75 6.1875L0.75 1.3125L-0.75 1.3125L-0.75 6.1875L0.75 6.1875ZM0.75 1.3125C0.75 1.00184 1.00184 0.75 1.3125 0.75L1.3125 -0.75C0.173413 -0.75 -0.75 0.173413 -0.75 1.3125L0.75 1.3125Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(25%, 50%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Film")}
      {...rest}
    ></Icon>
  );
}