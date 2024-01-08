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
export default function Ball(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Ball: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Ball: {
          paths: [
            {
              d: "M19.5 10.5C20.0026 10.5 20.5044 10.4579 21 10.3744C20.9674 7.63305 19.8639 5.01319 17.9254 3.07464C15.9868 1.13609 13.367 0.0326065 10.6256 0C10.5421 0.49563 10.5 0.997374 10.5 1.5C10.5 6.46266 14.5373 10.5 19.5 10.5ZM10.3758 21C10.4198 20.7342 10.4531 20.4656 10.4738 20.1947C10.4911 19.9659 10.5 19.7325 10.5 19.5014C10.5 14.5387 6.46266 10.5014 1.5 10.5014C0.997374 10.5014 0.49563 10.5435 0 10.627C0.032978 13.3684 1.13681 15.9881 3.07563 17.9264C5.01444 19.8646 7.63445 20.9678 10.3758 21L10.3758 21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 6.25%)" },
            },
            {
              d: "M11.9817 8.83078C11.0036 7.85806 10.2282 6.701 9.70029 5.42658C9.17238 4.15215 8.9025 2.78568 8.90625 1.40625C8.90626 0.935939 8.93758 0.46615 9 0C6.72166 0.308531 4.60747 1.35601 2.98174 2.98174C1.35601 4.60747 0.308531 6.72166 0 9C0.46615 8.93758 0.935939 8.90626 1.40625 8.90625C2.78568 8.9025 4.15215 9.17238 5.42658 9.70029C6.701 10.2282 7.85806 11.0036 8.83078 11.9817C9.80887 12.9544 10.5843 14.1115 11.1122 15.3859C11.6401 16.6603 11.91 18.0268 11.9062 19.4062C11.9062 19.6753 11.8959 19.9467 11.8758 20.2134C11.8602 20.4141 11.8389 20.6139 11.812 20.813C14.0905 20.5044 16.2047 19.4568 17.8305 17.831C19.4563 16.2052 20.5039 14.0909 20.8125 11.8125C20.3463 11.8749 19.8766 11.9062 19.4062 11.9062C18.0268 11.91 16.6603 11.6401 15.3859 11.1122C14.1115 10.5843 12.9544 9.80887 11.9817 8.83078L11.9817 8.83078Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.64%, 6.64%)" },
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
          d: "M18.75 9.75C18.75 14.7206 14.7206 18.75 9.75 18.75L9.75 20.25C15.549 20.25 20.25 15.549 20.25 9.75L18.75 9.75ZM9.75 18.75C4.77944 18.75 0.75 14.7206 0.75 9.75L-0.75 9.75C-0.75 15.549 3.95101 20.25 9.75 20.25L9.75 18.75ZM0.75 9.75C0.75 4.77944 4.77944 0.75 9.75 0.75L9.75 -0.75C3.95101 -0.75 -0.75 3.95101 -0.75 9.75L0.75 9.75ZM9.75 0.75C14.7206 0.75 18.75 4.77944 18.75 9.75L20.25 9.75C20.25 3.95101 15.549 -0.75 9.75 -0.75L9.75 0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 9.38%)" },
        },
        {
          d: "M19.3566 11.128C19.7697 11.098 20.0802 10.7387 20.0502 10.3256C20.0202 9.9125 19.6609 9.60194 19.2478 9.63197L19.3566 11.128ZM9.69866 0.0563376C9.72978 -0.356706 9.42016 -0.716767 9.00712 -0.747881C8.59408 -0.778995 8.23402 -0.469381 8.2029 -0.0563376L9.69866 0.0563376ZM-0.045617 8.18389C-0.459064 8.20908 -0.773805 8.56467 -0.748611 8.97812C-0.723418 9.39156 -0.36783 9.7063 0.045617 9.68111L-0.045617 8.18389ZM9.64593 19.2596C9.6167 19.6727 9.92794 20.0314 10.3411 20.0606C10.7543 20.0899 11.113 19.7786 11.1422 19.3654L9.64593 19.2596ZM19.2478 9.63197C19.0173 9.64873 18.89 9.65625 18.6727 9.65625L18.6727 11.1562C18.9419 11.1562 19.1099 11.146 19.3566 11.128L19.2478 9.63197ZM18.6727 9.65625C13.7019 9.65625 9.67266 5.62704 9.67266 0.65625L8.17266 0.65625C8.17266 6.45546 12.8734 11.1562 18.6727 11.1562L18.6727 9.65625ZM9.67266 0.65625C9.67266 0.430924 9.68061 0.296016 9.69866 0.0563376L8.2029 -0.0563376C8.18346 0.201797 8.17266 0.378138 8.17266 0.65625L9.67266 0.65625ZM0 8.9325C0.045617 9.68111 0.0456062 9.68111 0.045597 9.68111C0.0455961 9.68111 0.0455885 9.68111 0.0455867 9.68111C0.0455831 9.68111 0.045586 9.68111 0.0455954 9.68111C0.0456141 9.68111 0.0456586 9.68111 0.0457286 9.6811C0.0458686 9.6811 0.0461106 9.68108 0.0464523 9.68106C0.0471357 9.68102 0.0482175 9.68095 0.0496789 9.68087C0.0526021 9.68069 0.0570415 9.68043 0.0628468 9.68009C0.0744618 9.67941 0.0915175 9.67842 0.112815 9.67724C0.155484 9.67486 0.214801 9.67169 0.281268 9.66853C0.418426 9.662 0.571084 9.65625 0.672656 9.65625L0.672656 8.15625C0.532353 8.15625 0.348683 8.16362 0.209982 8.17022C0.138519 8.17362 0.0750241 8.17702 0.0293627 8.17956C0.00649519 8.18083 -0.0119936 8.1819 -0.0248817 8.18266C-0.031328 8.18303 -0.0363799 8.18333 -0.0398851 8.18354C-0.0416378 8.18365 -0.0430045 8.18373 -0.043966 8.18379C-0.0444468 8.18382 -0.0448263 8.18384 -0.0451023 8.18386C-0.0452402 8.18387 -0.0453523 8.18387 -0.0454382 8.18388C-0.0454812 8.18388 -0.0455176 8.18388 -0.0455474 8.18388C-0.0455623 8.18389 -0.0455797 8.18389 -0.0455872 8.18389C-0.0456029 8.18389 -0.045617 8.18389 0 8.9325ZM0.672656 9.65625C5.64344 9.65625 9.67266 13.6855 9.67266 18.6562L11.1727 18.6562C11.1727 12.857 6.47187 8.15625 0.672656 8.15625L0.672656 9.65625ZM9.67266 18.6562C9.67266 18.761 9.66648 18.9082 9.65945 19.0386C9.65604 19.1017 9.65263 19.1575 9.65007 19.1975C9.64879 19.2174 9.64773 19.2332 9.64701 19.244C9.64664 19.2493 9.64636 19.2534 9.64618 19.256C9.64609 19.2574 9.64602 19.2583 9.64598 19.2589C9.64596 19.2592 9.64594 19.2594 9.64594 19.2595C9.64593 19.2596 9.64593 19.2596 9.64593 19.2596C9.64593 19.2596 9.64593 19.2596 9.64593 19.2596C9.64593 19.2596 9.64593 19.2596 9.64593 19.2596C9.64593 19.2596 9.64593 19.2596 10.3941 19.3125C11.1422 19.3654 11.1422 19.3654 11.1422 19.3654C11.1422 19.3654 11.1422 19.3654 11.1422 19.3654C11.1422 19.3653 11.1422 19.3653 11.1422 19.3652C11.1422 19.3651 11.1422 19.365 11.1422 19.3649C11.1423 19.3646 11.1423 19.3642 11.1423 19.3637C11.1424 19.3628 11.1425 19.3615 11.1426 19.3598C11.1428 19.3564 11.1432 19.3515 11.1436 19.3453C11.1444 19.333 11.1456 19.3153 11.147 19.2934C11.1498 19.2497 11.1535 19.1887 11.1573 19.1193C11.1645 18.9846 11.1727 18.8037 11.1727 18.6562L9.67266 18.6562Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.7%, 9.77%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Ball")}
      {...rest}
    ></Icon>
  );
}
