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
export default function Component25(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Component25: {} },
      variantValues: { property1: "ion:bicycle" },
    },
    {
      overrides: {
        Component25: {
          paths: [
            {
              d: "M19.5 3.5625L20.25 3.5625L20.25 3.56014L19.5 3.5625ZM3.5625 5.32907e-15L3.56486 -0.75L3.5625 -0.75L3.5625 5.32907e-15ZM7.125 3.5625L7.87501 3.5625L7.875 3.56014L7.125 3.5625ZM15.9375 -0.75C15.0846 -0.75 14.2508 -0.497076 13.5416 -0.0232122L14.375 1.22399C14.8375 0.91495 15.3812 0.75 15.9375 0.75L15.9375 -0.75ZM13.5416 -0.0232122C12.8324 0.450651 12.2797 1.12417 11.9533 1.91218L13.3391 2.4862C13.552 1.97229 13.9124 1.53303 14.375 1.22399L13.5416 -0.0232122ZM11.9533 1.91218C11.6269 2.70018 11.5415 3.56728 11.7079 4.40383L13.179 4.11119C13.0705 3.56562 13.1262 3.00012 13.3391 2.4862L11.9533 1.91218ZM11.7079 4.40383C11.8743 5.24037 12.285 6.00878 12.8881 6.6119L13.9488 5.55124C13.5554 5.1579 13.2876 4.65676 13.179 4.11119L11.7079 4.40383ZM12.8881 6.6119C13.4912 7.21501 14.2596 7.62574 15.0962 7.79214L15.3888 6.32096C14.8432 6.21244 14.3421 5.94457 13.9488 5.55124L12.8881 6.6119ZM15.0962 7.79214C15.9327 7.95853 16.7998 7.87313 17.5878 7.54673L17.0138 6.16091C16.4999 6.37378 15.9344 6.42948 15.3888 6.32096L15.0962 7.79214ZM17.5878 7.54673C18.3758 7.22033 19.0494 6.66758 19.5232 5.9584L18.276 5.12504C17.967 5.58755 17.5277 5.94804 17.0138 6.16091L17.5878 7.54673ZM19.5232 5.9584C19.9971 5.24921 20.25 4.41543 20.25 3.5625L18.75 3.5625C18.75 4.11876 18.5851 4.66253 18.276 5.12504L19.5232 5.9584ZM20.25 3.56014C20.2464 2.41813 19.7912 1.32391 18.9836 0.516379L17.923 1.57704C18.4503 2.10442 18.7477 2.81903 18.75 3.56486L20.25 3.56014ZM18.9836 0.516379C18.1761 -0.291152 17.0819 -0.746407 15.9399 -0.749996L15.9351 0.749996C16.681 0.75234 17.3956 1.04966 17.923 1.57704L18.9836 0.516379ZM3.5625 -0.75C2.70957 -0.75 1.87579 -0.497076 1.16661 -0.0232122L1.99996 1.22399C2.46247 0.91495 3.00624 0.75 3.5625 0.75L3.5625 -0.75ZM1.16661 -0.0232122C0.457419 0.450651 -0.0953257 1.12417 -0.421729 1.91218L0.96409 2.4862C1.17696 1.97229 1.53745 1.53303 1.99996 1.22399L1.16661 -0.0232122ZM-0.421729 1.91218C-0.748132 2.70018 -0.833534 3.56728 -0.667135 4.40383L0.804043 4.11119C0.695522 3.56562 0.751219 3.00012 0.96409 2.4862L-0.421729 1.91218ZM-0.667135 4.40383C-0.500736 5.24037 -0.09001 6.00878 0.513104 6.6119L1.57376 5.55124C1.18043 5.1579 0.912564 4.65676 0.804043 4.11119L-0.667135 4.40383ZM0.513104 6.6119C1.11622 7.21501 1.88463 7.62574 2.72117 7.79214L3.01381 6.32096C2.46824 6.21244 1.9671 5.94457 1.57376 5.55124L0.513104 6.6119ZM2.72117 7.79214C3.55772 7.95853 4.42482 7.87313 5.21282 7.54673L4.6388 6.16091C4.12488 6.37378 3.55938 6.42948 3.01381 6.32096L2.72117 7.79214ZM5.21282 7.54673C6.00083 7.22033 6.67435 6.66758 7.14821 5.9584L5.90101 5.12504C5.59197 5.58755 5.15272 5.94804 4.6388 6.16091L5.21282 7.54673ZM7.14821 5.9584C7.62208 5.24921 7.875 4.41543 7.875 3.5625L6.375 3.5625C6.375 4.11876 6.21005 4.66253 5.90101 5.12504L7.14821 5.9584ZM7.875 3.56014C7.87141 2.41813 7.41615 1.32391 6.60862 0.516379L5.54796 1.57704C6.07534 2.10442 6.37266 2.81903 6.37501 3.56486L7.875 3.56014ZM6.60862 0.516379C5.80109 -0.291152 4.70687 -0.746407 3.56486 -0.749996L3.56014 0.749996C4.30597 0.75234 5.02058 1.04966 5.54796 1.57704L6.60862 0.516379Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(9.37%, 56.25%)" },
            },
            {
              d: "M2.25 10.125C2.25 10.5392 2.58579 10.875 3 10.875C3.41421 10.875 3.75 10.5392 3.75 10.125L2.25 10.125ZM3 6.09375L3.75 6.09375C3.75 5.84106 3.62275 5.60535 3.41149 5.46671L3 6.09375ZM0 4.125L-0.554955 3.6205C-0.702542 3.78284 -0.77164 4.00167 -0.744044 4.21933C-0.716447 4.437 -0.594925 4.63166 -0.411492 4.75204L0 4.125ZM3.75 0L4.40562 -0.364232C4.28827 -0.575454 4.07635 -0.717203 3.83633 -0.745015C3.5963 -0.772827 3.35758 -0.683296 3.19504 -0.504505L3.75 0ZM5.625 3.375L4.96938 3.73923C5.10166 3.97733 5.35262 4.125 5.625 4.125L5.625 3.375ZM8.25 4.125C8.66421 4.125 9 3.78921 9 3.375C9 2.96079 8.66421 2.625 8.25 2.625L8.25 4.125ZM3.75 10.125L3.75 6.09375L2.25 6.09375L2.25 10.125L3.75 10.125ZM3.41149 5.46671L0.411492 3.49796L-0.411492 4.75204L2.58851 6.72079L3.41149 5.46671ZM0.554955 4.6295L4.30496 0.504505L3.19504 -0.504505L-0.554955 3.6205L0.554955 4.6295ZM3.09438 0.364232L4.96938 3.73923L6.28062 3.01077L4.40562 -0.364232L3.09438 0.364232ZM5.625 4.125L8.25 4.125L8.25 2.625L5.625 2.625L5.625 4.125Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 1,
              style: { transform: "translate(37.5%, 28.13%)" },
            },
            {
              d: "M1.49532 3.00005C1.69289 3.00073 1.88864 2.96225 2.07124 2.88681C2.25384 2.81138 2.41968 2.7005 2.55917 2.56058C2.69866 2.42065 2.80902 2.25447 2.88388 2.07163C2.95875 1.88879 2.99662 1.69293 2.99532 1.49536C2.99751 1.29878 2.96048 1.10374 2.8864 0.921638C2.81232 0.739537 2.70268 0.574034 2.56389 0.434805C2.4251 0.295576 2.25994 0.185416 2.07807 0.110767C1.8962 0.0361175 1.70128 -0.00152278 1.5047 4.7162e-05C1.30771 -0.000568409 1.11254 0.0376205 0.930313 0.112434C0.748089 0.187247 0.582385 0.29722 0.442662 0.436072C0.160478 0.716498 0.00125054 1.09753 7.33456e-06 1.49536C-0.00123587 1.89318 0.155607 2.27521 0.436033 2.55739C0.716458 2.83958 1.09749 2.9988 1.49532 3.00005L1.49532 3.00005Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(56.27%, 14.06%)" },
            },
          ],
        },
      },
      variantValues: { property1: "ion:bicycle-outline" },
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
          d: "M16.6875 18C15.8346 18 15.0008 17.7471 14.2916 17.2733C13.5824 16.7994 13.0297 16.1259 12.7033 15.3379C12.3769 14.5499 12.2915 13.6828 12.4579 12.8462C12.6243 12.0097 13.035 11.2413 13.6381 10.6381C14.2412 10.035 15.0096 9.62431 15.8462 9.45791C16.6827 9.29151 17.5498 9.37691 18.3378 9.70332C19.1258 10.0297 19.7994 10.5825 20.2732 11.2917C20.7471 12.0008 21 12.8346 21 13.6875C20.9988 14.8309 20.544 15.9271 19.7355 16.7356C18.927 17.5441 17.8309 17.9988 16.6875 18L16.6875 18ZM16.6875 10.875C16.1312 10.875 15.5875 11.04 15.125 11.349C14.6624 11.6581 14.302 12.0973 14.0891 12.6112C13.8762 13.1252 13.8205 13.6907 13.929 14.2362C14.0376 14.7818 14.3054 15.283 14.6988 15.6763C15.0921 16.0696 15.5932 16.3375 16.1388 16.446C16.6844 16.5545 17.2499 16.4988 17.7638 16.286C18.2777 16.0731 18.717 15.7126 19.026 15.2501C19.3351 14.7876 19.5 14.2438 19.5 13.6875C19.4991 12.9419 19.2025 12.227 18.6753 11.6998C18.148 11.1725 17.4332 10.8759 16.6875 10.875L16.6875 10.875ZM4.3125 18C3.45957 18 2.62579 17.7471 1.91661 17.2733C1.20742 16.7994 0.654674 16.1259 0.328271 15.3379C0.00186854 14.5499 -0.0835333 13.6828 0.0828654 12.8462C0.249264 12.0097 0.65999 11.2413 1.2631 10.6381C1.86622 10.035 2.63463 9.62431 3.47117 9.45791C4.30772 9.29151 5.17482 9.37691 5.96282 9.70332C6.75083 10.0297 7.42435 10.5825 7.89822 11.2917C8.37208 12.0008 8.625 12.8346 8.625 13.6875C8.62376 14.8309 8.16901 15.9271 7.36053 16.7356C6.55205 17.5441 5.45587 17.9988 4.3125 18L4.3125 18ZM4.3125 10.875C3.75624 10.875 3.21247 11.04 2.74996 11.349C2.28745 11.6581 1.92696 12.0973 1.71409 12.6112C1.50122 13.1252 1.44552 13.6907 1.55404 14.2362C1.66256 14.7818 1.93043 15.283 2.32376 15.6763C2.7171 16.0696 3.21824 16.3375 3.76381 16.446C4.30938 16.5545 4.87488 16.4988 5.3888 16.286C5.90272 16.0731 6.34197 15.7126 6.65101 15.2501C6.96005 14.7876 7.125 14.2438 7.125 13.6875C7.12413 12.9419 6.82754 12.227 6.30028 11.6998C5.77302 11.1725 5.05816 10.8759 4.3125 10.875L4.3125 10.875ZM13.5 3.00005C13.6976 3.00073 13.8933 2.96225 14.0759 2.88681C14.2585 2.81138 14.4244 2.7005 14.5639 2.56058C14.7033 2.42065 14.8137 2.25447 14.8886 2.07163C14.9634 1.88879 15.0013 1.69293 15 1.49536C15.0022 1.29878 14.9652 1.10374 14.8911 0.921638C14.817 0.739537 14.7074 0.574034 14.5686 0.434805C14.4298 0.295576 14.2646 0.185416 14.0828 0.110767C13.9009 0.0361175 13.706 -0.00152278 13.5094 4.7162e-05C13.3124 -0.000568412 13.1172 0.0376205 12.935 0.112434C12.7528 0.187247 12.5871 0.29722 12.4473 0.436072C12.3076 0.574925 12.1966 0.739938 12.1207 0.921691C12.0447 1.10344 12.0053 1.29838 12.0047 1.49536C12.0041 1.69234 12.0423 1.88752 12.1171 2.06974C12.1919 2.25197 12.3019 2.41767 12.4407 2.55739C12.5796 2.69712 12.7446 2.80812 12.9263 2.88407C13.1081 2.96002 13.303 2.99943 13.5 3.00005L13.5 3.00005Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6.25%, 12.5%)" },
        },
        {
          d: "M9.72891 3.60965L7.67766 3.60965C7.64401 3.60966 7.61097 3.60061 7.58203 3.58346C7.55308 3.5663 7.52928 3.54167 7.51312 3.51215L6.02531 0.785433C5.92048 0.582798 5.76941 0.407693 5.58433 0.274293C5.39925 0.140893 5.18536 0.0529465 4.95997 0.0175729C4.73459 -0.0178006 4.50404 0.000392631 4.28699 0.0706799C4.06994 0.140967 3.87249 0.261373 3.71063 0.422152L0.435938 3.72215C0.160826 4.00295 0.00466853 4.37907 0 4.77215C-1.33227e-15 5.58778 0.590625 5.8784 0.867188 6.04246C2.20312 6.81215 3.14391 7.37512 3.66 7.68778C3.68744 7.70448 3.71012 7.72795 3.72588 7.75594C3.74164 7.78393 3.74995 7.8155 3.75 7.84762L3.75 11.0876C3.75 11.4912 4.06031 11.8376 4.46391 11.8578C4.56523 11.8627 4.6665 11.8469 4.76158 11.8116C4.85665 11.7762 4.94356 11.7219 5.01705 11.6519C5.09053 11.582 5.14907 11.4979 5.18911 11.4047C5.22915 11.3115 5.24986 11.2111 5.25 11.1097L5.25 7.0784C5.25007 6.95934 5.22179 6.84197 5.1675 6.73601C5.11322 6.63005 5.03448 6.53853 4.93781 6.46903L3.20344 5.22168C3.18167 5.20611 3.16348 5.18605 3.15011 5.16286C3.13674 5.13967 3.12849 5.11388 3.12591 5.08724C3.12334 5.06059 3.1265 5.03371 3.13518 5.00838C3.14386 4.98306 3.15787 4.95989 3.17625 4.94043L5.145 2.8409C5.16519 2.8193 5.19019 2.80278 5.21798 2.79269C5.24577 2.78259 5.27555 2.77921 5.30489 2.78282C5.33424 2.78644 5.36231 2.79693 5.38682 2.81346C5.41133 2.82999 5.43159 2.85208 5.44594 2.87793L6.46875 4.72387C6.53376 4.84089 6.62889 4.93837 6.74429 5.00621C6.85969 5.07405 6.99114 5.10976 7.125 5.10965L9.75 5.10965C9.8516 5.10977 9.95217 5.08924 10.0456 5.04931C10.139 5.00939 10.2234 4.95089 10.2935 4.87738C10.3636 4.80387 10.4181 4.71687 10.4536 4.62167C10.4891 4.52647 10.5049 4.42504 10.5 4.32356C10.4803 3.91996 10.1325 3.60965 9.72891 3.60965Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(31.25%, 22.46%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Component25")}
      {...rest}
    ></Icon>
  );
}