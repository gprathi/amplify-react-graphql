/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Airplane from "./Airplane";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function HeaderDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="332px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 16px rgba(0.06666667014360428, 0.13333334028720856, 0.06666667014360428, 0.05000000074505806)"
      padding="21px 104px 21px 104px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HeaderDefault")}
      {...rest}
    >
      <Flex
        gap="288px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2608754")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 22")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 20")}
          >
            <Airplane
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              filled="True"
              {...getOverrideProps(overrides, "airplane")}
            ></Airplane>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="600"
              color="rgba(17,34,17,1)"
              lineHeight="17.06599998474121px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Find Flight"
              {...getOverrideProps(overrides, "Find Flight")}
            ></Text>
          </Flex>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 21")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "ion:bed")}
            >
              <Icon
                width="21px"
                height="16.5px"
                viewBox={{ minX: 0, minY: 0, width: 21, height: 16.5 }}
                paths={[
                  {
                    d: "M18.75 7.06406C18.2772 6.85651 17.7664 6.74955 17.25 6.75L3.75 6.75C3.23368 6.7495 2.72288 6.85629 2.25 7.06359C1.58166 7.35587 1.01294 7.83652 0.613357 8.4468C0.213775 9.05708 0.000638647 9.77055 0 10.5L0 15.75C3.33067e-16 15.9489 0.0790176 16.1397 0.21967 16.2803C0.360322 16.421 0.551088 16.5 0.75 16.5C0.948912 16.5 1.13968 16.421 1.28033 16.2803C1.42098 16.1397 1.5 15.9489 1.5 15.75L1.5 15.375C1.50122 15.2759 1.54112 15.1812 1.61118 15.1112C1.68124 15.0411 1.77592 15.0012 1.875 15L19.125 15C19.2241 15.0012 19.3188 15.0411 19.3888 15.1112C19.4589 15.1812 19.4988 15.2759 19.5 15.375L19.5 15.75C19.5 15.9489 19.579 16.1397 19.7197 16.2803C19.8603 16.421 20.0511 16.5 20.25 16.5C20.4489 16.5 20.6397 16.421 20.7803 16.2803C20.921 16.1397 21 15.9489 21 15.75L21 10.5C20.9993 9.77062 20.7861 9.05726 20.3865 8.44707C19.9869 7.83688 19.4183 7.3563 18.75 7.06406ZM16.125 0L4.875 0C4.17881 0 3.51113 0.276562 3.01884 0.768845C2.52656 1.26113 2.25 1.92881 2.25 2.625L2.25 6C2.25002 6.02906 2.25679 6.05771 2.26979 6.0837C2.28278 6.10969 2.30163 6.1323 2.32486 6.14976C2.34809 6.16721 2.37505 6.17903 2.40363 6.18428C2.43221 6.18953 2.46162 6.18806 2.48953 6.18C2.89896 6.06025 3.32341 5.99964 3.75 6L3.94828 6C3.99456 6.00029 4.03932 5.98346 4.07393 5.95274C4.10855 5.92202 4.13058 5.87958 4.13578 5.83359C4.17669 5.46712 4.35115 5.12856 4.62586 4.88256C4.90056 4.63656 5.25625 4.50037 5.625 4.5L8.25 4.5C8.61899 4.50003 8.97503 4.63606 9.25002 4.88209C9.52502 5.12812 9.69969 5.46688 9.74063 5.83359C9.74583 5.87958 9.76786 5.92202 9.80247 5.95274C9.83709 5.98346 9.88184 6.00029 9.92813 6L11.0747 6C11.121 6.00029 11.1657 5.98346 11.2003 5.95274C11.235 5.92202 11.257 5.87958 11.2622 5.83359C11.3031 5.46736 11.4773 5.12899 11.7517 4.88303C12.0261 4.63706 12.3815 4.50072 12.75 4.5L15.375 4.5C15.744 4.50003 16.1 4.63606 16.375 4.88209C16.65 5.12812 16.8247 5.46688 16.8656 5.83359C16.8708 5.87958 16.8929 5.92202 16.9275 5.95274C16.9621 5.98346 17.0068 6.00029 17.0531 6L17.25 6C17.6766 5.99979 18.1011 6.06057 18.5105 6.18047C18.5384 6.18854 18.5679 6.19 18.5965 6.18473C18.6251 6.17945 18.6521 6.16759 18.6753 6.15009C18.6986 6.13258 18.7174 6.1099 18.7304 6.08385C18.7433 6.0578 18.7501 6.0291 18.75 6L18.75 2.625C18.75 1.92881 18.4734 1.26113 17.9812 0.768845C17.4889 0.276562 16.8212 0 16.125 0Z",
                    fill: "rgba(17,34,17,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="15.63%"
                bottom="15.63%"
                left="6.25%"
                right="6.25%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="600"
              color="rgba(17,34,17,1)"
              lineHeight="17.06599998474121px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Find Stays"
              {...getOverrideProps(overrides, "Find Stays")}
            ></Text>
          </Flex>
        </Flex>
        <Logo
          width="110.35px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        ></Logo>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 24")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="600"
          color="rgba(17,34,17,1)"
          lineHeight="17.06599998474121px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Login"
          {...getOverrideProps(overrides, "Login")}
        ></Text>
        <Flex
          width="unset"
          height="48px"
          {...getOverrideProps(overrides, "Patient-button")}
        ></Flex>
      </Flex>
      <View
        width="103px"
        height="5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(141,211,187,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <View
        width="107px"
        height="5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(141,211,187,1)"
        {...getOverrideProps(overrides, "Rectangle 5")}
      ></View>
    </Flex>
  );
}
