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
export default function Menu(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Menu: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Menu: {
          paths: [
            {
              d: "M0 -1.125C-0.62132 -1.125 -1.125 -0.62132 -1.125 0C-1.125 0.62132 -0.62132 1.125 0 1.125L0 -1.125ZM15.75 1.125C16.3713 1.125 16.875 0.62132 16.875 0C16.875 -0.62132 16.3713 -1.125 15.75 -1.125L15.75 1.125ZM0 3.75C-0.62132 3.75 -1.125 4.25368 -1.125 4.875C-1.125 5.49632 -0.62132 6 0 6L0 3.75ZM15.75 6C16.3713 6 16.875 5.49632 16.875 4.875C16.875 4.25368 16.3713 3.75 15.75 3.75L15.75 6ZM0 8.625C-0.62132 8.625 -1.125 9.12868 -1.125 9.75C-1.125 10.3713 -0.62132 10.875 0 10.875L0 8.625ZM15.75 10.875C16.3713 10.875 16.875 10.3713 16.875 9.75C16.875 9.12868 16.3713 8.625 15.75 8.625L15.75 10.875ZM0 1.125L15.75 1.125L15.75 -1.125L0 -1.125L0 1.125ZM0 6L15.75 6L15.75 3.75L0 3.75L0 6ZM0 10.875L15.75 10.875L15.75 8.625L0 8.625L0 10.875Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(17.19%, 29.69%)" },
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
          d: "M0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0C-0.75 0.414214 -0.414214 0.75 0 0.75L0 -0.75ZM16.5 0.75C16.9142 0.75 17.25 0.414214 17.25 0C17.25 -0.414214 16.9142 -0.75 16.5 -0.75L16.5 0.75ZM0 3.75C-0.414214 3.75 -0.75 4.08579 -0.75 4.5C-0.75 4.91421 -0.414214 5.25 0 5.25L0 3.75ZM16.5 5.25C16.9142 5.25 17.25 4.91421 17.25 4.5C17.25 4.08579 16.9142 3.75 16.5 3.75L16.5 5.25ZM0 8.25C-0.414214 8.25 -0.75 8.58579 -0.75 9C-0.75 9.41421 -0.414214 9.75 0 9.75L0 8.25ZM16.5 9.75C16.9142 9.75 17.25 9.41421 17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25L16.5 9.75ZM0 0.75L16.5 0.75L16.5 -0.75L0 -0.75L0 0.75ZM0 5.25L16.5 5.25L16.5 3.75L0 3.75L0 5.25ZM0 9.75L16.5 9.75L16.5 8.25L0 8.25L0 9.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(15.63%, 31.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Menu")}
      {...rest}
    ></Icon>
  );
}
