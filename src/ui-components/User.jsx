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
export default function User(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { User: {} }, variantValues: { user: "False" } },
    {
      overrides: {
        User: {
          paths: [
            {
              d: "M13.3428 1.52719C12.4306 0.542344 11.1565 0 9.75027 0C8.33652 0 7.05824 0.539062 6.15027 1.51781C5.23246 2.50734 4.78527 3.85219 4.89027 5.30437C5.09839 8.16937 7.27855 10.5 9.75027 10.5C12.222 10.5 14.3984 8.16984 14.6098 5.30531C14.7162 3.86625 14.2662 2.52422 13.3428 1.52719L13.3428 1.52719ZM18.0003 21L1.50027 21C1.2843 21.0028 1.07042 20.9574 0.874189 20.8672C0.677959 20.7769 0.504316 20.6441 0.365893 20.4783C0.0612056 20.1141 -0.0616069 19.6167 0.0293306 19.1137C0.424956 16.9191 1.65964 15.0755 3.60027 13.7812C5.32433 12.6323 7.50824 12 9.75027 12C11.9923 12 14.1762 12.6328 15.9003 13.7812C17.8409 15.075 19.0756 16.9186 19.4712 19.1133C19.5621 19.6162 19.4393 20.1136 19.1346 20.4778C18.9963 20.6437 18.8226 20.7766 18.6264 20.867C18.4302 20.9573 18.2163 21.0028 18.0003 21L18.0003 21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.38%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { user: "True" },
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
          d: "M8.26322 4.5L9.01117 4.55546L9.01117 4.5554L8.26322 4.5ZM0.0132215 4.5L-0.734803 4.5544L-0.734799 4.55446L0.0132215 4.5ZM7.51528 4.44454C7.35233 6.64219 5.70574 8.25 4.13822 8.25L4.13822 9.75C6.6957 9.75 8.80661 7.31437 9.01117 4.55546L7.51528 4.44454ZM4.13822 8.25C2.56994 8.25 0.921149 6.64188 0.761242 4.44554L-0.734799 4.55446C-0.533768 7.31562 1.5815 9.75 4.13822 9.75L4.13822 8.25ZM0.761246 4.4456C0.605179 2.29968 2.09178 0.75 4.13822 0.75L4.13822 -0.75C1.21592 -0.75 -0.953736 1.54407 -0.734803 4.5544L0.761246 4.4456ZM4.13822 0.75C6.17993 0.75 7.67105 2.34156 7.51527 4.4446L9.01117 4.5554C9.23039 1.59594 7.06526 -0.75 4.13822 -0.75L4.13822 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(32.76%, 9.38%)" },
        },
        {
          d: "M0.0169889 6.49688L0.755075 6.63003L0.755081 6.62999L0.0169889 6.49688ZM17.9837 6.49688L18.7218 6.36372L18.7218 6.36368L17.9837 6.49688ZM9.00011 -0.75C4.70905 -0.75 0.132609 1.6302 -0.721103 6.36376L0.755081 6.62999C1.43324 2.8698 5.13493 0.75 9.00011 0.75L9.00011 -0.75ZM-0.721097 6.36372C-0.79791 6.78951 -0.723279 7.24528 -0.470909 7.614C-0.207009 7.99957 0.228121 8.25 0.750114 8.25L0.750114 6.75C0.733598 6.75 0.73736 6.74699 0.750271 6.7539C0.762141 6.76025 0.767263 6.76728 0.766918 6.76678C0.765836 6.7652 0.758664 6.75369 0.753922 6.72886C0.749223 6.70426 0.74778 6.67046 0.755075 6.63003L-0.721097 6.36372ZM0.750114 8.25L17.2501 8.25L17.2501 6.75L0.750114 6.75L0.750114 8.25ZM17.2501 8.25C17.7721 8.25 18.2074 7.99978 18.4715 7.61413C18.724 7.24535 18.7986 6.78951 18.7218 6.36372L17.2456 6.63003C17.2529 6.67046 17.2515 6.70424 17.2468 6.72882C17.242 6.75361 17.2349 6.76509 17.2338 6.76665C17.2335 6.76713 17.2386 6.76011 17.2504 6.7538C17.2632 6.74694 17.2669 6.75 17.2501 6.75L17.2501 8.25ZM18.7218 6.36368C17.8676 1.63021 13.2912 -0.75 9.00011 -0.75L9.00011 0.75C12.8653 0.75 16.567 2.86979 17.2456 6.63007L18.7218 6.36368Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(12.5%, 59.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "User")}
      {...rest}
    ></Icon>
  );
}
