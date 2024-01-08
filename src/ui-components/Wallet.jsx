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
export default function Wallet(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Wallet: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Wallet: {
          paths: [
            {
              d: "M3 2.62414L18 2.62414C18.1752 2.62406 18.3503 2.63518 18.5241 2.65742C18.4651 2.24388 18.3231 1.84655 18.1065 1.48939C17.8899 1.13222 17.6031 0.82263 17.2636 0.579269C16.9241 0.335907 16.5389 0.163819 16.1311 0.0733799C15.7232 -0.0170589 15.3013 -0.0239753 14.8908 0.0530477L2.55469 2.15914L2.54062 2.15914C1.76628 2.30722 1.07769 2.74533 0.615469 3.38399C1.31184 2.88867 2.14544 2.62304 3 2.62414L3 2.62414ZM18 3.74914L3 3.74914C2.20462 3.75001 1.44206 4.06636 0.879639 4.62878C0.317218 5.1912 0.000868526 5.95376 0 6.74914L0 15.7491C0.000868526 16.5445 0.317218 17.3071 0.879639 17.8695C1.44206 18.4319 2.20462 18.7483 3 18.7491L18 18.7491C18.7954 18.7483 19.5579 18.4319 20.1204 17.8695C20.6828 17.3071 20.9991 16.5445 21 15.7491L21 6.74914C20.9991 5.95376 20.6828 5.1912 20.1204 4.62878C19.5579 4.06636 18.7954 3.75001 18 3.74914L18 3.74914ZM15.7734 12.7491C15.4768 12.7491 15.1868 12.6612 14.9401 12.4963C14.6934 12.3315 14.5011 12.0973 14.3876 11.8232C14.2741 11.5491 14.2444 11.2475 14.3023 10.9565C14.3601 10.6655 14.503 10.3983 14.7128 10.1885C14.9226 9.9787 15.1898 9.83584 15.4808 9.77796C15.7718 9.72009 16.0734 9.74979 16.3475 9.86332C16.6216 9.97685 16.8558 10.1691 17.0206 10.4158C17.1855 10.6625 17.2734 10.9525 17.2734 11.2491C17.2734 11.647 17.1154 12.0285 16.8341 12.3098C16.5528 12.5911 16.1713 12.7491 15.7734 12.7491Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.15%, 9.38%)" },
            },
            {
              d: "M0 8.0625L0 3.39844C0 2.38266 0.5625 0.679687 2.51484 0.310781C4.17188 -1.3411e-07 5.8125 0 5.8125 0C5.8125 0 6.89062 0.75 6 0.75C5.10938 0.75 5.13281 1.89844 6 1.89844C6.86719 1.89844 6 3 6 3L2.50781 6.96094L0 8.0625Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 17.09%)" },
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
          d: "M2.25 0.75L17.25 0.75L17.25 -0.75L2.25 -0.75L2.25 0.75ZM17.25 0.75C18.0784 0.75 18.75 1.42157 18.75 2.25L20.25 2.25C20.25 0.593146 18.9069 -0.75 17.25 -0.75L17.25 0.75ZM18.75 2.25L18.75 11.25L20.25 11.25L20.25 2.25L18.75 2.25ZM18.75 11.25C18.75 12.0784 18.0784 12.75 17.25 12.75L17.25 14.25C18.9069 14.25 20.25 12.9069 20.25 11.25L18.75 11.25ZM17.25 12.75L2.25 12.75L2.25 14.25L17.25 14.25L17.25 12.75ZM2.25 12.75C1.42157 12.75 0.75 12.0784 0.75 11.25L-0.75 11.25C-0.75 12.9069 0.593146 14.25 2.25 14.25L2.25 12.75ZM0.75 11.25L0.75 2.25L-0.75 2.25L-0.75 11.25L0.75 11.25ZM0.75 2.25C0.75 1.42157 1.42157 0.75 2.25 0.75L2.25 -0.75C0.593146 -0.75 -0.75 0.593146 -0.75 2.25L0.75 2.25Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 28.13%)" },
        },
        {
          d: "M17.0325 2.343L17.7825 2.343L17.7825 2.34275L17.0325 2.343ZM14.25 0.0414333L14.3762 0.780742C14.3809 0.779932 14.3857 0.779076 14.3904 0.778175L14.25 0.0414333ZM1.905 2.14846L1.77882 1.40916C1.77407 1.40997 1.76933 1.41082 1.7646 1.41172L1.905 2.14846ZM5.39377e-07 4.45237L0.750001 4.45237L0.75 4.45186L5.39377e-07 4.45237ZM17.7825 3.74925L17.7825 2.343L16.2825 2.343L16.2825 3.74925L17.7825 3.74925ZM17.7825 2.34275C17.7824 1.88748 17.6817 1.43785 17.4878 1.02595L16.1307 1.66488C16.2306 1.87708 16.2824 2.1087 16.2825 2.34324L17.7825 2.34275ZM17.4878 1.02595C17.2939 0.614043 17.0114 0.250016 16.6606 -0.0401606L15.7046 1.11567C15.8853 1.26516 16.0308 1.45269 16.1307 1.66488L17.4878 1.02595ZM16.6606 -0.0401606C16.3098 -0.330338 15.8993 -0.539512 15.4583 -0.65276L15.0852 0.800094C15.3124 0.858433 15.5238 0.966189 15.7046 1.11567L16.6606 -0.0401606ZM15.4583 -0.65276C15.0173 -0.766007 14.5568 -0.780535 14.1096 -0.695308L14.3904 0.778175C14.6208 0.73427 14.858 0.741754 15.0852 0.800094L15.4583 -0.65276ZM14.1238 -0.697875L1.77882 1.40916L2.03118 2.88777L14.3762 0.780742L14.1238 -0.697875ZM1.7646 1.41172C1.05695 1.54658 0.418543 1.92416 -0.0405117 2.47934L1.11549 3.43519C1.35198 3.14919 1.68085 2.95468 2.0454 2.88521L1.7646 1.41172ZM-0.0405117 2.47934C-0.499566 3.03452 -0.750488 3.73249 -0.749999 4.45288L0.75 4.45186C0.749749 4.08075 0.879011 3.72119 1.11549 3.43519L-0.0405117 2.47934ZM-0.749999 4.45237L-0.749999 6.74925L0.750001 6.74925L0.750001 4.45237L-0.749999 4.45237Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.37%, 12.5%)" },
        },
        {
          d: "M1.5 3C1.20333 3 0.913319 2.91203 0.666645 2.74721C0.419971 2.58238 0.227713 2.34812 0.114181 2.07403C0.000649922 1.79994 -0.0290551 1.49834 0.0288228 1.20737C0.0867006 0.916394 0.229562 0.64912 0.439341 0.439341C0.64912 0.229562 0.916394 0.0867006 1.20737 0.0288228C1.49834 -0.0290551 1.79994 0.000649922 2.07403 0.114181C2.34812 0.227713 2.58238 0.419971 2.74721 0.666645C2.91203 0.913319 3 1.20333 3 1.5C3 1.89783 2.84197 2.27936 2.56066 2.56066C2.27936 2.84197 1.89783 3 1.5 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(65.62%, 50%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Wallet")}
      {...rest}
    ></Icon>
  );
}