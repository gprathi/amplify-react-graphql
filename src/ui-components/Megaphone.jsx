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
export default function Megaphone(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Megaphone: {} }, variantValues: { fill: "False" } },
    {
      overrides: {
        Megaphone: {
          paths: [
            {
              d: "M0.75 6.75241L0.75 6.78335C0.748893 6.97662 0.679113 7.16319 0.553125 7.30976L0.553125 7.3121C0.3 7.61116 0 8.14647 0 9.00241C0 9.77819 0.248438 10.3257 0.5475 10.6857C0.678712 10.8454 0.750302 11.0457 0.75 11.2524C0.75 11.6502 0.908035 12.0318 1.18934 12.3131C1.47064 12.5944 1.85218 12.7524 2.25 12.7524L2.625 12.7524C2.72446 12.7524 2.81984 12.7129 2.89016 12.6426C2.96049 12.5723 3 12.4769 3 12.3774L3 5.62741C3 5.52796 2.96049 5.43257 2.89016 5.36225C2.81984 5.29192 2.72446 5.25241 2.625 5.25241L2.25 5.25241C1.85218 5.25241 1.47064 5.41045 1.18934 5.69175C0.908035 5.97306 0.75 6.35459 0.75 6.75241L0.75 6.75241ZM19.6959 7.24694L19.6523 7.23897C19.6095 7.23079 19.5708 7.20792 19.543 7.17429C19.5152 7.14066 19.5 7.09839 19.5 7.05476L19.5 1.40866C19.5 0.816162 19.1067 0.283662 18.5208 0.0811621C17.962 -0.111494 17.3798 0.0455371 17.0358 0.481006C16.3038 1.35505 15.4992 2.1656 14.6306 2.90397C13.523 3.84147 12.4631 4.50944 11.49 4.88726C11.419 4.91431 11.358 4.96228 11.3149 5.0248C11.2717 5.08733 11.2486 5.16147 11.2486 5.23741L11.2486 12.518C11.2487 12.6646 11.2918 12.808 11.3725 12.9304C11.4533 13.0528 11.5681 13.1488 11.7028 13.2066C12.6094 13.5952 13.5891 14.2299 14.6091 15.0948C15.4842 15.8398 16.2946 16.6577 17.0316 17.5398C17.1496 17.6879 17.3003 17.8067 17.4719 17.887C17.6435 17.9672 17.8313 18.0067 18.0206 18.0024C18.1871 18.0017 18.3523 17.9741 18.51 17.9208C19.1114 17.7212 19.5 17.2079 19.5 16.6149L19.5 10.9491C19.5 10.9049 19.5157 10.8621 19.5443 10.8283C19.5729 10.7945 19.6125 10.7719 19.6561 10.7644L19.6959 10.7579C20.1469 10.6355 21 10.1119 21 9.00241C21 7.89288 20.1469 7.36929 19.6959 7.24694ZM9.75 13.5024L9.75 5.62741C9.75 5.52796 9.71049 5.43257 9.64017 5.36225C9.56984 5.29192 9.47446 5.25241 9.375 5.25241L4.875 5.25241C4.77554 5.25241 4.68016 5.29192 4.60983 5.36225C4.53951 5.43257 4.5 5.52796 4.5 5.62741L4.5 19.8774C4.5 20.1758 4.61853 20.4619 4.8295 20.6729C5.04048 20.8839 5.32663 21.0024 5.625 21.0024L8.08359 21.0024C8.3173 21.0044 8.54835 20.9528 8.75903 20.8516C8.96972 20.7505 9.15445 20.6024 9.29906 20.4188C9.44733 20.2288 9.54706 20.0054 9.58961 19.7682C9.63216 19.5309 9.61626 19.2868 9.54328 19.0571C9.46734 18.8143 9.37313 18.5415 9.27281 18.2513C8.90203 17.1779 8.41313 16.5137 8.28281 15.0019C8.67484 14.9934 9.04793 14.8316 9.32216 14.5513C9.59639 14.2711 9.74997 13.8945 9.75 13.5024Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 6.24%)" },
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
          d: "M16.8722 0.197877L17.4568 0.667819L17.4633 0.659509L16.8722 0.197877ZM0.75 6.00006L0 6.00006L0.75 6.00006ZM16.8722 16.3233L17.47 15.8705C17.466 15.8651 17.4619 15.8599 17.4577 15.8546L16.8722 16.3233ZM0.486657 10.4523C0.874498 10.5978 1.30681 10.4012 1.45225 10.0134C1.59769 9.62557 1.40118 9.19326 1.01334 9.04782L0.486657 10.4523ZM1.01334 7.45231C1.40118 7.30687 1.59769 6.87456 1.45225 6.48672C1.30681 6.09888 0.874498 5.90238 0.486657 6.04782L1.01334 7.45231ZM18.5541 8.55736C18.1542 8.66556 17.9178 9.0774 18.026 9.47724C18.1342 9.87707 18.5461 10.1135 18.9459 10.0053L18.5541 8.55736ZM18.9459 6.49486C18.5461 6.38665 18.1342 6.62306 18.026 7.02289C17.9178 7.42272 18.1542 7.83457 18.5541 7.94277L18.9459 6.49486ZM10.5 5.25006C10.5 4.83585 10.1642 4.50006 9.75 4.50006C9.33579 4.50006 9 4.83585 9 5.25006L10.5 5.25006ZM9 11.2501C9 11.6643 9.33579 12.0001 9.75 12.0001C10.1642 12.0001 10.5 11.6643 10.5 11.2501L9 11.2501ZM3.75 5.25006C3.75 4.83585 3.41421 4.50006 3 4.50006C2.58579 4.50006 2.25 4.83585 2.25 5.25006L3.75 5.25006ZM2.25 11.2501C2.25 11.6643 2.58579 12.0001 3 12.0001C3.41421 12.0001 3.75 11.6643 3.75 11.2501L2.25 11.2501ZM16.8722 0.197877C16.2876 -0.272019 16.2877 -0.27213 16.2878 -0.272223C16.2878 -0.272228 16.2879 -0.272302 16.2879 -0.272313C16.2879 -0.272334 16.2878 -0.27228 16.2877 -0.272151C16.2875 -0.271891 16.2871 -0.271331 16.2864 -0.270473C16.285 -0.268758 16.2826 -0.265857 16.2793 -0.261807C16.2727 -0.253708 16.2623 -0.241018 16.2483 -0.224046C16.2201 -0.190095 16.1773 -0.13904 16.121 -0.0733259C16.0082 0.0581629 15.8413 0.24798 15.6288 0.476646C15.2027 0.934963 14.5977 1.54435 13.8805 2.15159C12.405 3.40099 10.6174 4.50006 9 4.50006L9 6.00006C11.1935 6.00006 13.342 4.57305 14.8498 3.29635C15.6244 2.64054 16.2729 1.98689 16.7274 1.49792C16.9551 1.25294 17.1353 1.04806 17.2595 0.903253C17.3216 0.830821 17.3698 0.773333 17.403 0.733277C17.4196 0.713246 17.4325 0.697566 17.4415 0.686548C17.446 0.681038 17.4495 0.676693 17.4521 0.673551C17.4533 0.67198 17.4544 0.67071 17.4551 0.669745C17.4555 0.669263 17.4559 0.668857 17.4561 0.668528C17.4563 0.668364 17.4564 0.668175 17.4565 0.668093C17.4566 0.667923 17.4567 0.667773 16.8722 0.197877ZM9 4.50006L1.5 4.50006L1.5 6.00006L9 6.00006L9 4.50006ZM1.5 4.50006C1.10217 4.50006 0.720644 4.6581 0.43934 4.9394L1.5 6.00006L1.5 6.00006L1.5 4.50006ZM0.43934 4.9394C0.158036 5.22071 6.66135e-16 5.60224 0 6.00006L1.5 6.00006L1.5 6.00006L0.43934 4.9394ZM0 6.00006L0 10.5001L1.5 10.5001L1.5 6.00006L0 6.00006ZM0 10.5001C0 10.8979 0.158035 11.2794 0.43934 11.5607L1.5 10.5001L1.5 10.5001L0 10.5001ZM0.43934 11.5607C0.720645 11.842 1.10218 12.0001 1.5 12.0001L1.5 10.5001L1.5 10.5001L0.43934 11.5607ZM1.5 12.0001L9 12.0001L9 10.5001L1.5 10.5001L1.5 12.0001ZM9 12.0001C10.6163 12.0001 12.4035 13.1032 13.8794 14.3581C14.5966 14.9679 15.2016 15.5799 15.6277 16.0401C15.8403 16.2698 16.0072 16.4604 16.12 16.5925C16.1763 16.6585 16.2191 16.7097 16.2473 16.7438C16.2614 16.7609 16.2718 16.7736 16.2784 16.7818C16.2817 16.7859 16.284 16.7888 16.2854 16.7905C16.2861 16.7914 16.2866 16.7919 16.2868 16.7922C16.2869 16.7923 16.2869 16.7924 16.2869 16.7923C16.2869 16.7923 16.2869 16.7923 16.2868 16.7923C16.2868 16.7922 16.2867 16.7921 16.8722 16.3233C17.4577 15.8546 17.4576 15.8545 17.4574 15.8543C17.4574 15.8542 17.4572 15.854 17.4571 15.8539C17.4568 15.8536 17.4565 15.8531 17.4561 15.8527C17.4553 15.8517 17.4543 15.8504 17.453 15.8488C17.4505 15.8457 17.447 15.8413 17.4425 15.8358C17.4335 15.8247 17.4206 15.809 17.404 15.7889C17.3708 15.7487 17.3226 15.691 17.2605 15.6182C17.1363 15.4729 16.9562 15.2671 16.7285 15.0212C16.274 14.5302 15.6255 13.8738 14.851 13.2153C13.3436 11.9336 11.1946 10.5001 9 10.5001L9 12.0001ZM16.2743 16.7762C16.6998 17.3378 17.3994 17.301 17.7992 17.1554C18.2361 16.9964 18.75 16.5667 18.75 15.8626L17.25 15.8626C17.25 15.8421 17.254 15.8186 17.2628 15.7957C17.2713 15.7736 17.2817 15.7584 17.289 15.7496C17.3014 15.7349 17.3031 15.7397 17.2861 15.7459C17.268 15.7525 17.2664 15.747 17.2901 15.7509C17.3177 15.7555 17.4011 15.7796 17.47 15.8705L16.2743 16.7762ZM18.75 15.8626L18.75 0.656315L17.25 0.656315L17.25 15.8626L18.75 15.8626ZM18.75 0.656315C18.75 -0.0116264 18.2898 -0.465611 17.8368 -0.645336C17.392 -0.8218 16.7136 -0.817553 16.2811 -0.263754L17.4633 0.659509C17.4452 0.682681 17.4209 0.704193 17.3926 0.720621C17.3652 0.736593 17.3401 0.744252 17.3217 0.747581C17.2883 0.753637 17.2768 0.74622 17.2836 0.748942C17.2896 0.751323 17.2864 0.752611 17.2774 0.740909C17.2646 0.724469 17.25 0.692733 17.25 0.656315L18.75 0.656315ZM0.75 9.75006C1.01334 9.04782 1.01383 9.048 1.01431 9.04818C1.01447 9.04824 1.01495 9.04842 1.01527 9.04854C1.0159 9.04878 1.01652 9.04902 1.01713 9.04925C1.01836 9.04972 1.01954 9.05017 1.02069 9.05062C1.02298 9.05151 1.02512 9.05235 1.02712 9.05315C1.0311 9.05475 1.03451 9.05617 1.03736 9.0574C1.04307 9.05985 1.04664 9.06154 1.04837 9.06239C1.05175 9.06405 1.04818 9.06252 1.03971 9.05705C1.02278 9.04611 0.987865 9.02052 0.948683 8.97399C0.880702 8.89327 0.75 8.69163 0.75 8.25006L-0.75 8.25006C-0.75 9.02725 -0.505702 9.57561 -0.198683 9.9402C-0.0503649 10.1163 0.10222 10.2372 0.225918 10.3171C0.28776 10.357 0.342781 10.387 0.38718 10.4088C0.409414 10.4197 0.429102 10.4287 0.445791 10.4358C0.454141 10.4394 0.461755 10.4425 0.46858 10.4453C0.471993 10.4467 0.47521 10.4479 0.478224 10.4491C0.479732 10.4497 0.481189 10.4502 0.482594 10.4508C0.483297 10.451 0.483987 10.4513 0.484665 10.4516C0.485003 10.4517 0.485502 10.4519 0.485671 10.4519C0.486165 10.4521 0.486657 10.4523 0.75 9.75006ZM0.75 8.25006C0.75 7.8085 0.880702 7.60686 0.948683 7.52613C0.987865 7.47961 1.02278 7.45401 1.03971 7.44308C1.04818 7.43761 1.05175 7.43608 1.04837 7.43774C1.04664 7.43858 1.04307 7.44028 1.03736 7.44273C1.03451 7.44396 1.0311 7.44538 1.02712 7.44698C1.02512 7.44777 1.02298 7.44862 1.02069 7.44951C1.01954 7.44996 1.01836 7.45041 1.01713 7.45088C1.01652 7.45111 1.0159 7.45135 1.01527 7.45159C1.01495 7.45171 1.01447 7.45189 1.01431 7.45195C1.01383 7.45213 1.01334 7.45231 0.75 6.75006C0.486657 6.04782 0.486165 6.048 0.485671 6.04819C0.485502 6.04825 0.485003 6.04844 0.484665 6.04857C0.483987 6.04882 0.483297 6.04909 0.482594 6.04935C0.481189 6.04989 0.479732 6.05045 0.478224 6.05104C0.47521 6.0522 0.471993 6.05347 0.46858 6.05484C0.461755 6.05758 0.454141 6.06073 0.445791 6.06431C0.429102 6.07147 0.409414 6.0804 0.38718 6.09132C0.342781 6.11313 0.28776 6.14308 0.225918 6.18302C0.10222 6.26291 -0.0503649 6.3838 -0.198683 6.55993C-0.505702 6.92452 -0.75 7.47288 -0.75 8.25006L0.75 8.25006ZM18.75 9.28131C18.9459 10.0053 18.9463 10.0052 18.9467 10.0051C18.9468 10.005 18.9472 10.0049 18.9474 10.0049C18.9479 10.0047 18.9485 10.0046 18.949 10.0044C18.9501 10.0041 18.9512 10.0038 18.9524 10.0035C18.9547 10.0028 18.9573 10.0021 18.96 10.0013C18.9655 9.99974 18.9718 9.99788 18.9788 9.99572C18.9929 9.9914 19.01 9.98587 19.0297 9.97898C19.069 9.96525 19.1195 9.94582 19.1776 9.9194C19.2922 9.86728 19.4456 9.78373 19.6015 9.65545C19.9289 9.38609 20.25 8.92824 20.25 8.25006L18.75 8.25006C18.75 8.40017 18.6961 8.45795 18.6485 8.49714C18.6169 8.52314 18.5828 8.54209 18.5568 8.55392C18.5446 8.55947 18.5365 8.56237 18.5348 8.56297C18.534 8.56325 18.535 8.56289 18.538 8.56195C18.5396 8.56147 18.5416 8.56085 18.5443 8.56008C18.5456 8.5597 18.5471 8.55928 18.5487 8.55883C18.5495 8.5586 18.5504 8.55836 18.5513 8.55812C18.5517 8.558 18.5522 8.55787 18.5527 8.55774C18.5529 8.55768 18.5532 8.55758 18.5534 8.55755C18.5537 8.55745 18.5541 8.55736 18.75 9.28131ZM20.25 8.25006C20.25 7.57189 19.9289 7.11404 19.6015 6.84468C19.4456 6.7164 19.2922 6.63284 19.1776 6.58073C19.1195 6.55431 19.069 6.53488 19.0297 6.52115C19.01 6.51426 18.9929 6.50873 18.9788 6.50441C18.9718 6.50225 18.9655 6.50038 18.96 6.4988C18.9573 6.49801 18.9547 6.49728 18.9524 6.49663C18.9512 6.4963 18.9501 6.49599 18.949 6.49569C18.9485 6.49555 18.9479 6.4954 18.9474 6.49526C18.9472 6.49519 18.9468 6.49509 18.9467 6.49506C18.9463 6.49496 18.9459 6.49486 18.75 7.21881C18.5541 7.94277 18.5537 7.94267 18.5534 7.94258C18.5532 7.94255 18.5529 7.94245 18.5527 7.94238C18.5522 7.94226 18.5517 7.94213 18.5513 7.94201C18.5504 7.94177 18.5495 7.94153 18.5487 7.9413C18.5471 7.94085 18.5456 7.94043 18.5443 7.94004C18.5416 7.93928 18.5396 7.93865 18.538 7.93818C18.535 7.93724 18.534 7.93688 18.5348 7.93716C18.5365 7.93776 18.5446 7.94066 18.5568 7.94621C18.5828 7.95804 18.6169 7.97699 18.6485 8.00299C18.6961 8.04218 18.75 8.09996 18.75 8.25006L20.25 8.25006ZM9 5.25006L9 11.2501L10.5 11.2501L10.5 5.25006L9 5.25006ZM2.25 5.25006L2.25 11.2501L3.75 11.2501L3.75 5.25006L2.25 5.25006Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 9.37%)" },
        },
        {
          d: "M0.75 0C0.75 -0.414214 0.414214 -0.75 0 -0.75C-0.414214 -0.75 -0.75 -0.414214 -0.75 0L0.75 0ZM2.85938 8.25L2.85962 7.5L2.85938 7.5L2.85938 8.25ZM3.57609 7.27828L4.29257 7.05656L4.2921 7.05506L3.57609 7.27828ZM2.25 2.25L2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25L2.25 2.25ZM2.25 -0.75C1.83579 -0.75 1.5 -0.414214 1.5 0C1.5 0.414214 1.83579 0.75 2.25 0.75L2.25 -0.75ZM-0.75 0L-0.75 7.875L0.75 7.875L0.75 0L-0.75 0ZM-0.75 7.875C-0.75 8.17337 -0.631475 8.45952 -0.420495 8.6705L0.640165 7.60984C0.710492 7.68016 0.75 7.77555 0.75 7.875L-0.75 7.875ZM-0.420495 8.6705C-0.209516 8.88148 0.0766335 9 0.375 9L0.375 7.5C0.474454 7.5 0.569837 7.53951 0.640165 7.60984L-0.420495 8.6705ZM0.375 9L2.85938 9L2.85938 7.5L0.375 7.5L0.375 9ZM2.85913 9C3.09411 9.00008 3.32582 8.94495 3.53558 8.83906L2.85962 7.5L2.85962 7.5L2.85913 9ZM3.53558 8.83906C3.74535 8.73317 3.9273 8.57947 4.06677 8.39037L2.85962 7.5L2.85962 7.5L3.53558 8.83906ZM4.06677 8.39037C4.20625 8.20127 4.29935 7.98205 4.33857 7.75037L2.85962 7.5L2.85962 7.5L4.06677 8.39037ZM4.33857 7.75037C4.37779 7.51869 4.36204 7.28103 4.29257 7.05656L2.85962 7.5L2.85962 7.5L4.33857 7.75037ZM4.2921 7.05506C3.83213 5.57961 3 4.4493 3 2.25L1.5 2.25C1.5 4.7457 2.53444 6.45695 2.86008 7.5015L4.2921 7.05506ZM2.25 3L3 3L3 1.5L2.25 1.5L2.25 3ZM3 3C3.39782 3 3.77935 2.84197 4.06066 2.56066L3 1.5L3 1.5L3 3ZM4.06066 2.56066C4.34196 2.27936 4.5 1.89782 4.5 1.5L3 1.5L3 1.5L4.06066 2.56066ZM4.5 1.5L4.5 0.75L3 0.75L3 1.5L4.5 1.5ZM4.5 0.75C4.5 0.352176 4.34196 -0.029356 4.06066 -0.310661L3 0.749999L3 0.75L4.5 0.75ZM4.06066 -0.310661C3.77935 -0.591966 3.39782 -0.75 3 -0.75L3 0.75L3 0.749999L4.06066 -0.310661ZM3 -0.75L2.25 -0.75L2.25 0.75L3 0.75L3 -0.75Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(28.13%, 56.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Megaphone")}
      {...rest}
    ></Icon>
  );
}
