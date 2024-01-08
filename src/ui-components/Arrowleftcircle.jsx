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
export default function Arrowleftcircle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Arrowleftcircle: {} },
      variantValues: { property1: "ion:arrow-back-circle-outline" },
    },
    {
      overrides: {
        Arrowleftcircle: {
          paths: [
            {
              d: "M0 9.75C0 15.1345 4.36547 19.5 9.75 19.5C15.1345 19.5 19.5 15.1345 19.5 9.75C19.5 4.36547 15.1345 0 9.75 0C4.36547 0 0 4.36547 0 9.75ZM9.96797 5.4675C10.0379 5.53687 10.0935 5.61934 10.1316 5.71019C10.1696 5.80105 10.1894 5.89851 10.1898 5.99702C10.1902 6.09552 10.1712 6.19314 10.1338 6.2843C10.0965 6.37545 10.0416 6.45836 9.97219 6.52828L7.51969 9L13.7812 9C13.9802 9 14.1709 9.07902 14.3116 9.21967C14.4522 9.36032 14.5312 9.55109 14.5312 9.75C14.5312 9.94891 14.4522 10.1397 14.3116 10.2803C14.1709 10.421 13.9802 10.5 13.7812 10.5L7.51969 10.5L9.97219 12.9717C10.0416 13.0417 10.0965 13.1247 10.1338 13.2159C10.1711 13.3071 10.1901 13.4048 10.1896 13.5033C10.1892 13.6019 10.1694 13.6994 10.1312 13.7902C10.0931 13.8811 10.0375 13.9636 9.9675 14.033C9.89751 14.1023 9.81454 14.1573 9.72333 14.1946C9.63212 14.2319 9.53445 14.2509 9.4359 14.2504C9.33736 14.25 9.23986 14.2301 9.14898 14.192C9.05811 14.1539 8.97563 14.0983 8.90625 14.0283L5.18484 10.2783C5.04544 10.1378 4.96722 9.94791 4.96722 9.75C4.96722 9.55209 5.04544 9.3622 5.18484 9.22172L8.90625 5.47172C8.97564 5.40164 9.05816 5.34593 9.1491 5.30778C9.24004 5.26964 9.33762 5.2498 9.43623 5.24941C9.53485 5.24902 9.63258 5.26808 9.72382 5.3055C9.81506 5.34292 9.89803 5.39797 9.96797 5.4675L9.96797 5.4675Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { property1: "ion:arrow-back-circle" },
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
          d: "M3.18855 8.02826C3.4803 8.32229 3.95517 8.32414 4.2492 8.03239C4.54323 7.74064 4.54508 7.26577 4.25333 6.97174L3.18855 8.02826ZM0 3.75L-0.532389 3.22174C-0.822537 3.51415 -0.822537 3.98585 -0.532389 4.27826L0 3.75ZM4.25333 0.528263C4.54508 0.234233 4.54323 -0.240637 4.2492 -0.532389C3.95517 -0.824141 3.4803 -0.822293 3.18855 -0.528263L4.25333 0.528263ZM0.517031 3C0.102818 3 -0.232969 3.33579 -0.232969 3.75C-0.232969 4.16421 0.102818 4.5 0.517031 4.5L0.517031 3ZM8.0625 4.5C8.47671 4.5 8.8125 4.16421 8.8125 3.75C8.8125 3.33579 8.47671 3 8.0625 3L8.0625 4.5ZM4.25333 6.97174L0.532389 3.22174L-0.532389 4.27826L3.18855 8.02826L4.25333 6.97174ZM0.532389 4.27826L4.25333 0.528263L3.18855 -0.528263L-0.532389 3.22174L0.532389 4.27826ZM0.517031 4.5L8.0625 4.5L8.0625 3L0.517031 3L0.517031 4.5Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(33.2%, 34.38%)" },
        },
        {
          d: "M18.75 9C18.75 3.61704 14.383 -0.75 9 -0.75L9 0.75C13.5545 0.75 17.25 4.44546 17.25 9L18.75 9ZM9 -0.75C3.61704 -0.75 -0.75 3.61704 -0.75 9L0.75 9C0.75 4.44546 4.44546 0.75 9 0.75L9 -0.75ZM-0.75 9C-0.75 14.383 3.61704 18.75 9 18.75L9 17.25C4.44546 17.25 0.75 13.5545 0.75 9L-0.75 9ZM9 18.75C14.383 18.75 18.75 14.383 18.75 9L17.25 9C17.25 13.5545 13.5545 17.25 9 17.25L9 18.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowleftcircle")}
      {...rest}
    ></Icon>
  );
}
