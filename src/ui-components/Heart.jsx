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
export default function Heart(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Heart: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Heart: {
          paths: [
            {
              d: "M9.75052 18C9.44944 17.9996 9.15544 17.9086 8.90677 17.7389C5.22286 15.2381 3.62771 13.5234 2.74786 12.4514C0.872864 10.1663 -0.024792 7.82016 0.000520508 5.27953C0.0300518 2.36813 2.36583 0 5.2074 0C7.27365 0 8.70474 1.16391 9.53818 2.13328C9.56458 2.16368 9.5972 2.18805 9.63383 2.20476C9.67047 2.22146 9.71026 2.23011 9.75052 2.23011C9.79078 2.23011 9.83058 2.22146 9.86721 2.20476C9.90384 2.18805 9.93646 2.16368 9.96286 2.13328C10.7963 1.16297 12.2274 0 14.2936 0C17.1352 0 19.471 2.36812 19.5005 5.28C19.5258 7.82109 18.6272 10.1672 16.7532 12.4519C15.8733 13.5239 14.2782 15.2386 10.5943 17.7394C10.3455 17.9089 10.0516 17.9998 9.75052 18L9.75052 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.37%, 12.5%)" },
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
          d: "M9.00048 3L8.32966 3.33541C8.4567 3.5895 8.7164 3.75 9.00048 3.75C9.28456 3.75 9.54426 3.5895 9.6713 3.33541L9.00048 3ZM0.00047924 4.53797L-0.749481 4.53028L-0.749483 4.53042L0.00047924 4.53797ZM8.5786 16.3702L9.00048 15.7501L8.99979 15.7496L8.5786 16.3702ZM9.42235 16.3702L9.00114 15.7496L9.00048 15.7501L9.42235 16.3702ZM18.0005 4.53797L18.7504 4.53049L18.7504 4.53028L18.0005 4.53797ZM13.5436 -0.75C13.1294 -0.75 12.7936 -0.414214 12.7936 0C12.7936 0.414214 13.1294 0.75 13.5436 0.75L13.5436 -0.75ZM13.5436 -0.75C11.7562 -0.75 10.4415 0.134746 9.60244 0.967774C9.18134 1.38587 8.86788 1.80207 8.65906 2.11419C8.55423 2.27087 8.47462 2.40305 8.41998 2.49849C8.39264 2.54625 8.37146 2.58497 8.35643 2.61312C8.34892 2.6272 8.34293 2.63865 8.33847 2.64729C8.33624 2.65161 8.33439 2.65523 8.33292 2.65812C8.33219 2.65956 8.33155 2.66083 8.33101 2.66191C8.33073 2.66245 8.33049 2.66294 8.33026 2.66339C8.33015 2.66361 8.33 2.66391 8.32994 2.66402C8.3298 2.66431 8.32966 2.66459 9.00048 3C9.6713 3.33541 9.67117 3.33566 9.67105 3.33591C9.67102 3.33597 9.6709 3.33621 9.67083 3.33634C9.6707 3.3366 9.67059 3.33683 9.6705 3.337C9.67032 3.33736 9.67023 3.33753 9.67023 3.33754C9.67023 3.33754 9.67058 3.33686 9.67128 3.3355C9.67268 3.33278 9.67549 3.32739 9.6797 3.3195C9.68813 3.3037 9.70216 3.27796 9.72177 3.2437C9.76105 3.17508 9.82241 3.07288 9.90575 2.94831C10.0733 2.69793 10.325 2.36413 10.6593 2.03223C11.3311 1.36525 12.2879 0.75 13.5436 0.75L13.5436 -0.75ZM9.00048 3C9.6713 2.66459 9.67116 2.66431 9.67102 2.66402C9.67096 2.66391 9.67081 2.66361 9.6707 2.66339C9.67047 2.66294 9.67022 2.66245 9.66995 2.66191C9.66941 2.66083 9.66877 2.65956 9.66803 2.65812C9.66656 2.65523 9.66472 2.65161 9.66249 2.64729C9.65803 2.63865 9.65204 2.6272 9.64452 2.61312C9.6295 2.58497 9.60832 2.54625 9.58098 2.49849C9.52634 2.40305 9.44673 2.27087 9.3419 2.11419C9.13308 1.80207 8.81962 1.38587 8.39852 0.967774C7.5595 0.134746 6.24474 -0.75 4.45735 -0.75L4.45735 0.75C5.71309 0.75 6.6699 1.36525 7.34166 2.03223C7.67595 2.36413 7.92769 2.69793 8.09521 2.94831C8.17855 3.07288 8.2399 3.17508 8.27919 3.2437C8.2988 3.27796 8.31283 3.3037 8.32126 3.3195C8.32547 3.32739 8.32828 3.33278 8.32968 3.3355C8.33038 3.33686 8.33073 3.33754 8.33073 3.33754C8.33073 3.33753 8.33064 3.33735 8.33046 3.337C8.33037 3.33683 8.33026 3.3366 8.33012 3.33634C8.33006 3.33621 8.32994 3.33597 8.32991 3.33591C8.32979 3.33566 8.32966 3.33541 9.00048 3ZM4.45735 -0.75C1.54537 -0.75 -0.720242 1.67838 -0.749481 4.53028L0.75044 4.54566C0.771826 2.45974 2.42309 0.75 4.45735 0.75L4.45735 -0.75ZM-0.749483 4.53042C-0.80545 10.093 3.66437 13.9412 8.15742 16.9907L8.99979 15.7496C4.46753 12.6735 0.703283 9.23261 0.750441 4.54551L-0.749483 4.53042ZM8.15673 16.9903C8.40555 17.1595 8.69954 17.2501 9.00048 17.2501L9.00048 15.7501L9.00048 15.7501L8.15673 16.9903ZM9.00048 17.2501C9.30142 17.2501 9.59541 17.1595 9.84423 16.9903L9.00048 15.7501L9.00048 15.7501L9.00048 17.2501ZM9.84357 16.9907C14.3361 13.9412 18.8059 10.093 18.7504 4.53049L17.2505 4.54545C17.2972 9.23261 13.5329 12.6735 9.00114 15.7496L9.84357 16.9907ZM18.7504 4.53028C18.7212 1.67838 16.4556 -0.75 13.5436 -0.75L13.5436 0.75C15.5779 0.75 17.2291 2.45974 17.2505 4.54566L18.7504 4.53028Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 15.63%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Heart")}
      {...rest}
    ></Icon>
  );
}
