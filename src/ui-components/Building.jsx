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
export default function Building(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Building: {} }, variantValues: { filled: "False" } },
    {
      overrides: {
        Building: {
          paths: [
            {
              d: "M18.75 7.5L13.5 7.5L13.5 2.25C13.5 1.65326 13.2629 1.08097 12.841 0.65901C12.419 0.237053 11.8467 3.33067e-16 11.25 0L2.25 0C1.65326 4.996e-16 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 6.66134e-16 1.65326 0 2.25L0 21.75C3.33067e-16 21.9489 0.0790176 22.1397 0.21967 22.2803C0.360322 22.421 0.551088 22.5 0.75 22.5L5.625 22.5C5.72446 22.5 5.81984 22.4605 5.89017 22.3902C5.96049 22.3198 6 22.2245 6 22.125L6 18.7711C6 18.3675 6.31031 18.0211 6.71391 18.0009C6.81531 17.9961 6.91666 18.0118 7.0118 18.0472C7.10693 18.0827 7.19389 18.1371 7.26739 18.2071C7.34089 18.2771 7.3994 18.3614 7.43938 18.4547C7.47937 18.548 7.49999 18.6485 7.5 18.75L7.5 22.125C7.5 22.2245 7.53951 22.3198 7.60983 22.3902C7.68016 22.4605 7.77554 22.5 7.875 22.5L20.25 22.5C20.4489 22.5 20.6397 22.421 20.7803 22.2803C20.921 22.1397 21 21.9489 21 21.75L21 9.75C21 9.15326 20.7629 8.58097 20.341 8.15901C19.919 7.73705 19.3467 7.5 18.75 7.5L18.75 7.5ZM3.0975 19.4939C2.94217 19.5142 2.78438 19.4854 2.64627 19.4115C2.50816 19.3375 2.39667 19.2222 2.32744 19.0817C2.25822 18.9411 2.23473 18.7825 2.26028 18.6279C2.28583 18.4734 2.35914 18.3307 2.46991 18.2199C2.58068 18.1091 2.72336 18.0358 2.87791 18.0103C3.03247 17.9847 3.19114 18.0082 3.33167 18.0774C3.4722 18.1467 3.58752 18.2582 3.66145 18.3963C3.73539 18.5344 3.76422 18.6922 3.74391 18.8475C3.72247 19.0114 3.64747 19.1637 3.53057 19.2806C3.41367 19.3975 3.26142 19.4725 3.0975 19.4939L3.0975 19.4939ZM3.0975 15.7439C2.94217 15.7642 2.78438 15.7354 2.64627 15.6615C2.50816 15.5875 2.39667 15.4722 2.32744 15.3317C2.25822 15.1911 2.23473 15.0325 2.26028 14.8779C2.28583 14.7234 2.35914 14.5807 2.46991 14.4699C2.58068 14.3591 2.72336 14.2858 2.87791 14.2603C3.03247 14.2347 3.19114 14.2582 3.33167 14.3274C3.4722 14.3967 3.58752 14.5082 3.66145 14.6463C3.73539 14.7844 3.76422 14.9422 3.74391 15.0975C3.72247 15.2614 3.64747 15.4137 3.53057 15.5306C3.41367 15.6475 3.26142 15.7225 3.0975 15.7439L3.0975 15.7439ZM3.0975 11.9939C2.94217 12.0142 2.78438 11.9854 2.64627 11.9115C2.50816 11.8375 2.39667 11.7222 2.32744 11.5817C2.25822 11.4411 2.23473 11.2825 2.26028 11.1279C2.28583 10.9734 2.35914 10.8307 2.46991 10.7199C2.58068 10.6091 2.72336 10.5358 2.87791 10.5103C3.03247 10.4847 3.19114 10.5082 3.33167 10.5774C3.4722 10.6467 3.58752 10.7582 3.66145 10.8963C3.73539 11.0344 3.76422 11.1922 3.74391 11.3475C3.72247 11.5114 3.64747 11.6637 3.53057 11.7806C3.41367 11.8975 3.26142 11.9725 3.0975 11.9939L3.0975 11.9939ZM3.0975 8.24391C2.94217 8.26422 2.78438 8.23539 2.64627 8.16145C2.50816 8.08752 2.39667 7.9722 2.32744 7.83167C2.25822 7.69114 2.23473 7.53247 2.26028 7.37791C2.28583 7.22335 2.35914 7.08068 2.46991 6.96991C2.58068 6.85914 2.72336 6.78583 2.87791 6.76028C3.03247 6.73473 3.19114 6.75822 3.33167 6.82744C3.4722 6.89667 3.58752 7.00816 3.66145 7.14627C3.73539 7.28438 3.76422 7.44217 3.74391 7.5975C3.72247 7.76142 3.64747 7.91367 3.53057 8.03057C3.41367 8.14747 3.26142 8.22247 3.0975 8.24391L3.0975 8.24391ZM3.0975 4.49391C2.94217 4.51422 2.78438 4.48539 2.64627 4.41145C2.50816 4.33752 2.39667 4.2222 2.32744 4.08167C2.25822 3.94114 2.23473 3.78247 2.26028 3.62791C2.28583 3.47336 2.35914 3.33068 2.46991 3.21991C2.58068 3.10914 2.72336 3.03583 2.87791 3.01028C3.03247 2.98473 3.19114 3.00822 3.33167 3.07744C3.4722 3.14667 3.58752 3.25816 3.66145 3.39627C3.73539 3.53438 3.76422 3.69217 3.74391 3.8475C3.72247 4.01142 3.64747 4.16367 3.53057 4.28057C3.41367 4.39747 3.26142 4.47247 3.0975 4.49391L3.0975 4.49391ZM6.8475 15.7439C6.69217 15.7642 6.53438 15.7354 6.39627 15.6615C6.25816 15.5875 6.14667 15.4722 6.07744 15.3317C6.00822 15.1911 5.98473 15.0325 6.01028 14.8779C6.03583 14.7234 6.10914 14.5807 6.21991 14.4699C6.33068 14.3591 6.47335 14.2858 6.62791 14.2603C6.78247 14.2347 6.94114 14.2582 7.08167 14.3274C7.2222 14.3967 7.33752 14.5082 7.41145 14.6463C7.48539 14.7844 7.51422 14.9422 7.49391 15.0975C7.47247 15.2614 7.39747 15.4137 7.28057 15.5306C7.16367 15.6475 7.01142 15.7225 6.8475 15.7439L6.8475 15.7439ZM6.8475 11.9939C6.69217 12.0142 6.53438 11.9854 6.39627 11.9115C6.25816 11.8375 6.14667 11.7222 6.07744 11.5817C6.00822 11.4411 5.98473 11.2825 6.01028 11.1279C6.03583 10.9734 6.10914 10.8307 6.21991 10.7199C6.33068 10.6091 6.47335 10.5358 6.62791 10.5103C6.78247 10.4847 6.94114 10.5082 7.08167 10.5774C7.2222 10.6467 7.33752 10.7582 7.41145 10.8963C7.48539 11.0344 7.51422 11.1922 7.49391 11.3475C7.47247 11.5114 7.39747 11.6637 7.28057 11.7806C7.16367 11.8975 7.01142 11.9725 6.8475 11.9939L6.8475 11.9939ZM6.8475 8.24391C6.69217 8.26422 6.53438 8.23539 6.39627 8.16145C6.25816 8.08752 6.14667 7.9722 6.07744 7.83167C6.00822 7.69114 5.98473 7.53247 6.01028 7.37791C6.03583 7.22335 6.10914 7.08068 6.21991 6.96991C6.33068 6.85914 6.47335 6.78583 6.62791 6.76028C6.78247 6.73473 6.94114 6.75822 7.08167 6.82744C7.2222 6.89667 7.33752 7.00816 7.41145 7.14627C7.48539 7.28438 7.51422 7.44217 7.49391 7.5975C7.47247 7.76142 7.39747 7.91367 7.28057 8.03057C7.16367 8.14747 7.01142 8.22247 6.8475 8.24391L6.8475 8.24391ZM6.8475 4.49391C6.69217 4.51422 6.53438 4.48539 6.39627 4.41145C6.25816 4.33752 6.14667 4.2222 6.07744 4.08167C6.00822 3.94114 5.98473 3.78247 6.01028 3.62791C6.03583 3.47336 6.10914 3.33068 6.21991 3.21991C6.33068 3.10914 6.47335 3.03583 6.62791 3.01028C6.78247 2.98473 6.94114 3.00822 7.08167 3.07744C7.2222 3.14667 7.33752 3.25816 7.41145 3.39627C7.48539 3.53438 7.51422 3.69217 7.49391 3.8475C7.47247 4.01142 7.39747 4.16367 7.28057 4.28057C7.16367 4.39747 7.01142 4.47247 6.8475 4.49391L6.8475 4.49391ZM10.5975 19.4939C10.4422 19.5142 10.2844 19.4854 10.1463 19.4115C10.0082 19.3375 9.89667 19.2222 9.82744 19.0817C9.75822 18.9411 9.73473 18.7825 9.76028 18.6279C9.78583 18.4734 9.85914 18.3307 9.96991 18.2199C10.0807 18.1091 10.2234 18.0358 10.3779 18.0103C10.5325 17.9847 10.6911 18.0082 10.8317 18.0774C10.9722 18.1467 11.0875 18.2582 11.1615 18.3963C11.2354 18.5344 11.2642 18.6922 11.2439 18.8475C11.2225 19.0114 11.1475 19.1637 11.0306 19.2806C10.9137 19.3975 10.7614 19.4725 10.5975 19.4939L10.5975 19.4939ZM10.5975 15.7439C10.4422 15.7642 10.2844 15.7354 10.1463 15.6615C10.0082 15.5875 9.89667 15.4722 9.82744 15.3317C9.75822 15.1911 9.73473 15.0325 9.76028 14.8779C9.78583 14.7234 9.85914 14.5807 9.96991 14.4699C10.0807 14.3591 10.2234 14.2858 10.3779 14.2603C10.5325 14.2347 10.6911 14.2582 10.8317 14.3274C10.9722 14.3967 11.0875 14.5082 11.1615 14.6463C11.2354 14.7844 11.2642 14.9422 11.2439 15.0975C11.2225 15.2614 11.1475 15.4137 11.0306 15.5306C10.9137 15.6475 10.7614 15.7225 10.5975 15.7439L10.5975 15.7439ZM10.5975 11.9939C10.4422 12.0142 10.2844 11.9854 10.1463 11.9115C10.0082 11.8375 9.89667 11.7222 9.82744 11.5817C9.75822 11.4411 9.73473 11.2825 9.76028 11.1279C9.78583 10.9734 9.85914 10.8307 9.96991 10.7199C10.0807 10.6091 10.2234 10.5358 10.3779 10.5103C10.5325 10.4847 10.6911 10.5082 10.8317 10.5774C10.9722 10.6467 11.0875 10.7582 11.1615 10.8963C11.2354 11.0344 11.2642 11.1922 11.2439 11.3475C11.2225 11.5114 11.1475 11.6637 11.0306 11.7806C10.9137 11.8975 10.7614 11.9725 10.5975 11.9939L10.5975 11.9939ZM10.5975 8.24391C10.4422 8.26422 10.2844 8.23539 10.1463 8.16145C10.0082 8.08752 9.89667 7.9722 9.82744 7.83167C9.75822 7.69114 9.73473 7.53247 9.76028 7.37791C9.78583 7.22335 9.85914 7.08068 9.96991 6.96991C10.0807 6.85914 10.2234 6.78583 10.3779 6.76028C10.5325 6.73473 10.6911 6.75822 10.8317 6.82744C10.9722 6.89667 11.0875 7.00816 11.1615 7.14627C11.2354 7.28438 11.2642 7.44217 11.2439 7.5975C11.2225 7.76142 11.1475 7.91367 11.0306 8.03057C10.9137 8.14747 10.7614 8.22247 10.5975 8.24391L10.5975 8.24391ZM10.5975 4.49391C10.4422 4.51422 10.2844 4.48539 10.1463 4.41145C10.0082 4.33752 9.89667 4.2222 9.82744 4.08167C9.75822 3.94114 9.73473 3.78247 9.76028 3.62791C9.78583 3.47336 9.85914 3.33068 9.96991 3.21991C10.0807 3.10914 10.2234 3.03583 10.3779 3.01028C10.5325 2.98473 10.6911 3.00822 10.8317 3.07744C10.9722 3.14667 11.0875 3.25816 11.1615 3.39627C11.2354 3.53438 11.2642 3.69217 11.2439 3.8475C11.2225 4.01142 11.1475 4.16367 11.0306 4.28057C10.9137 4.39747 10.7614 4.47247 10.5975 4.49391L10.5975 4.49391ZM19.3125 21L13.5 21L13.5 9L18.75 9C18.9489 9 19.1397 9.07902 19.2803 9.21967C19.421 9.36032 19.5 9.55109 19.5 9.75L19.5 20.8125C19.5 20.8622 19.4802 20.9099 19.4451 20.9451C19.4099 20.9802 19.3622 21 19.3125 21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 3.13%)" },
            },
            {
              d: "M3.75 7.5C3.60166 7.5 3.45666 7.54399 3.33332 7.6264C3.20999 7.70881 3.11386 7.82594 3.05709 7.96299C3.00032 8.10003 2.98547 8.25083 3.01441 8.39632C3.04335 8.5418 3.11478 8.67544 3.21967 8.78033C3.32456 8.88522 3.4582 8.95665 3.60368 8.98559C3.74917 9.01453 3.89997 8.99968 4.03701 8.94291C4.17406 8.88614 4.29119 8.79002 4.3736 8.66668C4.45601 8.54334 4.5 8.39834 4.5 8.25C4.5 8.05109 4.42098 7.86032 4.28033 7.71967C4.13968 7.57902 3.94891 7.5 3.75 7.5ZM3.75 3.75C3.60166 3.75 3.45666 3.79399 3.33332 3.8764C3.20999 3.95881 3.11386 4.07594 3.05709 4.21299C3.00032 4.35003 2.98547 4.50083 3.01441 4.64632C3.04335 4.7918 3.11478 4.92544 3.21967 5.03033C3.32456 5.13522 3.4582 5.20665 3.60368 5.23559C3.74917 5.26453 3.89997 5.24968 4.03701 5.19291C4.17406 5.13614 4.29119 5.04001 4.3736 4.91668C4.45601 4.79334 4.5 4.64834 4.5 4.5C4.5 4.30109 4.42098 4.11032 4.28033 3.96967C4.13968 3.82902 3.94891 3.75 3.75 3.75ZM3.75 0C3.60166 0 3.45666 0.0439868 3.33332 0.126398C3.20999 0.208809 3.11386 0.325943 3.05709 0.462987C3.00032 0.600032 2.98547 0.750833 3.01441 0.896318C3.04335 1.0418 3.11478 1.17544 3.21967 1.28033C3.32456 1.38522 3.4582 1.45665 3.60368 1.48559C3.74917 1.51453 3.89997 1.49968 4.03701 1.44291C4.17406 1.38614 4.29119 1.29001 4.3736 1.16668C4.45601 1.04334 4.5 0.898336 4.5 0.75C4.5 0.551088 4.42098 0.360322 4.28033 0.21967C4.13968 0.0790178 3.94891 0 3.75 0ZM0.75 7.5C0.601664 7.5 0.456659 7.54399 0.333322 7.6264C0.209986 7.70881 0.113856 7.82594 0.0570907 7.96299C0.000324961 8.10003 -0.0145275 8.25083 0.0144114 8.39632C0.0433503 8.5418 0.11478 8.67544 0.21967 8.78033C0.324559 8.88522 0.458196 8.95665 0.603682 8.98559C0.749168 9.01453 0.899968 8.99968 1.03701 8.94291C1.17406 8.88614 1.29119 8.79002 1.3736 8.66668C1.45601 8.54334 1.5 8.39834 1.5 8.25C1.5 8.05109 1.42098 7.86032 1.28033 7.71967C1.13968 7.57902 0.948913 7.5 0.75 7.5ZM0.75 3.75C0.601664 3.75 0.456659 3.79399 0.333322 3.8764C0.209986 3.95881 0.113856 4.07594 0.0570907 4.21299C0.000324961 4.35003 -0.0145275 4.50083 0.0144114 4.64632C0.0433503 4.7918 0.11478 4.92544 0.21967 5.03033C0.324559 5.13522 0.458196 5.20665 0.603682 5.23559C0.749168 5.26453 0.899968 5.24968 1.03701 5.19291C1.17406 5.13614 1.29119 5.04001 1.3736 4.91668C1.45601 4.79334 1.5 4.64834 1.5 4.5C1.5 4.30109 1.42098 4.11032 1.28033 3.96967C1.13968 3.82902 0.948913 3.75 0.75 3.75ZM0.75 0C0.601664 0 0.456659 0.0439868 0.333322 0.126398C0.209986 0.208809 0.113856 0.325943 0.0570907 0.462987C0.000324961 0.600032 -0.0145275 0.750833 0.0144114 0.896318C0.0433503 1.0418 0.11478 1.17544 0.21967 1.28033C0.324559 1.38522 0.458196 1.45665 0.603682 1.48559C0.749168 1.51453 0.899968 1.49968 1.03701 1.44291C1.17406 1.38614 1.29119 1.29001 1.3736 1.16668C1.45601 1.04334 1.5 0.898336 1.5 0.75C1.5 0.551088 1.42098 0.360322 1.28033 0.21967C1.13968 0.0790178 0.948913 0 0.75 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(62.5%, 46.88%)" },
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
          d: "M6.75 18C6.75 17.5858 6.41421 17.25 6 17.25C5.58579 17.25 5.25 17.5858 5.25 18L6.75 18ZM5.25 21C5.25 21.4142 5.58579 21.75 6 21.75C6.41421 21.75 6.75 21.4142 6.75 21L5.25 21ZM1.5 -0.75C1.08579 -0.75 0.75 -0.414214 0.75 0C0.75 0.414214 1.08579 0.75 1.5 0.75L1.5 -0.75ZM10.5 0L10.5 -0.75L10.5 0ZM0 21L-0.75 21C-0.75 21.4142 -0.414214 21.75 1.66533e-16 21.75L0 21ZM19.5 21L19.5 21.75C19.9142 21.75 20.25 21.4142 20.25 21L19.5 21ZM12 21L11.25 21C11.25 21.4142 11.5858 21.75 12 21.75L12 21ZM5.25 18L5.25 21L6.75 21L6.75 18L5.25 18ZM1.5 0.75L10.5 0.75L10.5 -0.75L1.5 -0.75L1.5 0.75ZM10.5 0.75C10.6989 0.75 10.8897 0.829018 11.0303 0.96967L12.091 -0.0909903C11.669 -0.512947 11.0967 -0.75 10.5 -0.75L10.5 0.75ZM11.0303 0.96967C11.171 1.11032 11.25 1.30109 11.25 1.5L12.75 1.5C12.75 0.903263 12.5129 0.330966 12.091 -0.0909903L11.0303 0.96967ZM11.25 1.5L11.25 20.8125L12.75 20.8125L12.75 1.5L11.25 1.5ZM11.25 20.8125C11.25 20.6633 11.3093 20.5202 11.4148 20.4148L12.4754 21.4754C12.6512 21.2996 12.75 21.0611 12.75 20.8125L11.25 20.8125ZM11.4148 20.4148C11.5202 20.3093 11.6633 20.25 11.8125 20.25L11.8125 21.75C12.0611 21.75 12.2996 21.6512 12.4754 21.4754L11.4148 20.4148ZM11.8125 20.25L0 20.25L0 21.75L11.8125 21.75L11.8125 20.25ZM0.75 21L0.75 1.5L-0.75 1.5L-0.75 21L0.75 21ZM0.75 1.5C0.75 1.30109 0.829018 1.11032 0.96967 0.96967L-0.0909903 -0.0909903C-0.512947 0.330967 -0.75 0.903263 -0.75 1.5L0.75 1.5ZM0.96967 0.96967C1.11032 0.829018 1.30109 0.75 1.5 0.75L1.5 -0.75C0.903263 -0.75 0.330967 -0.512947 -0.0909903 -0.0909903L0.96967 0.96967ZM12.75 8.25L18 8.25L18 6.75L12.75 6.75L12.75 8.25ZM18 8.25C18.1989 8.25 18.3897 8.32902 18.5303 8.46967L19.591 7.40901C19.169 6.98705 18.5967 6.75 18 6.75L18 8.25ZM18.5303 8.46967C18.671 8.61032 18.75 8.80109 18.75 9L20.25 9C20.25 8.40326 20.0129 7.83097 19.591 7.40901L18.5303 8.46967ZM18.75 9L18.75 21L20.25 21L20.25 9L18.75 9ZM19.5 20.25L12 20.25L12 21.75L19.5 21.75L19.5 20.25ZM12.75 21L12.75 8.25L11.25 8.25L11.25 21L12.75 21ZM12.75 8.25L12.75 8.25L11.6893 7.18934C11.408 7.47065 11.25 7.85218 11.25 8.25L12.75 8.25ZM12.75 8.25L12.75 8.25L12.75 6.75C12.3522 6.75 11.9706 6.90804 11.6893 7.18934L12.75 8.25Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 1,
          style: { transform: "translate(9.38%, 6.25%)" },
        },
        {
          d: "M0.847262 16.4937C0.691931 16.514 0.534139 16.4851 0.39603 16.4112C0.257922 16.3373 0.146431 16.222 0.077205 16.0814C0.00797903 15.9409 -0.0155068 15.7822 0.0100442 15.6277C0.0355952 15.4731 0.1089 15.3304 0.219671 15.2197C0.330441 15.1089 0.473116 15.0356 0.627672 15.01C0.782227 14.9845 0.940903 15.008 1.08143 15.0772C1.22196 15.1464 1.33728 15.2579 1.41122 15.396C1.48515 15.5341 1.51398 15.6919 1.49367 15.8473C1.47223 16.0112 1.39723 16.1634 1.28033 16.2803C1.16343 16.3972 1.01119 16.4722 0.847262 16.4937L0.847262 16.4937ZM0.847262 12.7437C0.691931 12.764 0.534139 12.7351 0.39603 12.6612C0.257922 12.5873 0.146431 12.472 0.077205 12.3314C0.00797903 12.1909 -0.0155068 12.0322 0.0100442 11.8777C0.0355952 11.7231 0.1089 11.5804 0.219671 11.4697C0.330441 11.3589 0.473116 11.2856 0.627672 11.26C0.782227 11.2345 0.940903 11.258 1.08143 11.3272C1.22196 11.3964 1.33728 11.5079 1.41122 11.646C1.48515 11.7841 1.51398 11.9419 1.49367 12.0973C1.47223 12.2612 1.39723 12.4134 1.28033 12.5303C1.16343 12.6472 1.01119 12.7222 0.847262 12.7437L0.847262 12.7437ZM0.847262 8.99367C0.691931 9.01398 0.534139 8.98515 0.39603 8.91121C0.257922 8.83728 0.146431 8.72196 0.077205 8.58143C0.00797903 8.4409 -0.0155068 8.28223 0.0100442 8.12767C0.0355952 7.97312 0.1089 7.83044 0.219671 7.71967C0.330441 7.6089 0.473116 7.5356 0.627672 7.51004C0.782227 7.48449 0.940903 7.50798 1.08143 7.5772C1.22196 7.64643 1.33728 7.75792 1.41122 7.89603C1.48515 8.03414 1.51398 8.19193 1.49367 8.34726C1.47223 8.51118 1.39723 8.66343 1.28033 8.78033C1.16343 8.89723 1.01119 8.97223 0.847262 8.99367L0.847262 8.99367ZM0.847262 5.24367C0.691931 5.26398 0.534139 5.23515 0.39603 5.16122C0.257922 5.08728 0.146431 4.97196 0.077205 4.83143C0.00797903 4.6909 -0.0155068 4.53223 0.0100442 4.37767C0.0355952 4.22312 0.1089 4.08044 0.219671 3.96967C0.330441 3.8589 0.473116 3.7856 0.627672 3.76004C0.782227 3.73449 0.940903 3.75798 1.08143 3.82721C1.22196 3.89643 1.33728 4.00792 1.41122 4.14603C1.48515 4.28414 1.51398 4.44193 1.49367 4.59726C1.47223 4.76119 1.39723 4.91343 1.28033 5.03033C1.16343 5.14723 1.01119 5.22223 0.847262 5.24367L0.847262 5.24367ZM0.847262 1.49367C0.691931 1.51398 0.534139 1.48515 0.39603 1.41122C0.257922 1.33728 0.146431 1.22196 0.077205 1.08143C0.00797903 0.940903 -0.0155068 0.782227 0.0100442 0.627671C0.0355952 0.473116 0.1089 0.330441 0.219671 0.219671C0.330441 0.1089 0.473116 0.0355952 0.627672 0.0100442C0.782227 -0.0155068 0.940903 0.00797903 1.08143 0.077205C1.22196 0.146431 1.33728 0.257922 1.41122 0.39603C1.48515 0.534139 1.51398 0.691931 1.49367 0.847261C1.47223 1.01119 1.39723 1.16343 1.28033 1.28033C1.16343 1.39723 1.01119 1.47223 0.847262 1.49367L0.847262 1.49367ZM4.59726 12.7437C4.44193 12.764 4.28414 12.7351 4.14603 12.6612C4.00792 12.5873 3.89643 12.472 3.82721 12.3314C3.75798 12.1909 3.73449 12.0322 3.76005 11.8777C3.7856 11.7231 3.8589 11.5804 3.96967 11.4697C4.08044 11.3589 4.22312 11.2856 4.37767 11.26C4.53223 11.2345 4.6909 11.258 4.83143 11.3272C4.97196 11.3964 5.08728 11.5079 5.16122 11.646C5.23515 11.7841 5.26398 11.9419 5.24367 12.0973C5.22223 12.2612 5.14723 12.4134 5.03033 12.5303C4.91343 12.6472 4.76119 12.7222 4.59726 12.7437L4.59726 12.7437ZM4.59726 8.99367C4.44193 9.01398 4.28414 8.98515 4.14603 8.91121C4.00792 8.83728 3.89643 8.72196 3.82721 8.58143C3.75798 8.4409 3.73449 8.28223 3.76005 8.12767C3.7856 7.97312 3.8589 7.83044 3.96967 7.71967C4.08044 7.6089 4.22312 7.5356 4.37767 7.51004C4.53223 7.48449 4.6909 7.50798 4.83143 7.5772C4.97196 7.64643 5.08728 7.75792 5.16122 7.89603C5.23515 8.03414 5.26398 8.19193 5.24367 8.34726C5.22223 8.51118 5.14723 8.66343 5.03033 8.78033C4.91343 8.89723 4.76119 8.97223 4.59726 8.99367L4.59726 8.99367ZM4.59726 5.24367C4.44193 5.26398 4.28414 5.23515 4.14603 5.16122C4.00792 5.08728 3.89643 4.97196 3.82721 4.83143C3.75798 4.6909 3.73449 4.53223 3.76005 4.37767C3.7856 4.22312 3.8589 4.08044 3.96967 3.96967C4.08044 3.8589 4.22312 3.7856 4.37767 3.76004C4.53223 3.73449 4.6909 3.75798 4.83143 3.82721C4.97196 3.89643 5.08728 4.00792 5.16122 4.14603C5.23515 4.28414 5.26398 4.44193 5.24367 4.59726C5.22223 4.76119 5.14723 4.91343 5.03033 5.03033C4.91343 5.14723 4.76119 5.22223 4.59726 5.24367L4.59726 5.24367ZM4.59726 1.49367C4.44193 1.51398 4.28414 1.48515 4.14603 1.41122C4.00792 1.33728 3.89643 1.22196 3.82721 1.08143C3.75798 0.940903 3.73449 0.782227 3.76005 0.627671C3.7856 0.473116 3.8589 0.330441 3.96967 0.219671C4.08044 0.1089 4.22312 0.0355952 4.37767 0.0100442C4.53223 -0.0155068 4.6909 0.00797903 4.83143 0.077205C4.97196 0.146431 5.08728 0.257922 5.16122 0.39603C5.23515 0.534139 5.26398 0.691931 5.24367 0.847261C5.22223 1.01119 5.14723 1.16343 5.03033 1.28033C4.91343 1.39723 4.76119 1.47223 4.59726 1.49367L4.59726 1.49367ZM8.34726 16.4937C8.19193 16.514 8.03414 16.4851 7.89603 16.4112C7.75792 16.3373 7.64643 16.222 7.57721 16.0814C7.50798 15.9409 7.48449 15.7822 7.51005 15.6277C7.5356 15.4731 7.6089 15.3304 7.71967 15.2197C7.83044 15.1089 7.97312 15.0356 8.12767 15.01C8.28223 14.9845 8.4409 15.008 8.58143 15.0772C8.72196 15.1464 8.83728 15.2579 8.91122 15.396C8.98515 15.5341 9.01398 15.6919 8.99367 15.8473C8.97223 16.0112 8.89723 16.1634 8.78033 16.2803C8.66343 16.3972 8.51118 16.4722 8.34726 16.4937L8.34726 16.4937ZM8.34726 12.7437C8.19193 12.764 8.03414 12.7351 7.89603 12.6612C7.75792 12.5873 7.64643 12.472 7.57721 12.3314C7.50798 12.1909 7.48449 12.0322 7.51005 11.8777C7.5356 11.7231 7.6089 11.5804 7.71967 11.4697C7.83044 11.3589 7.97312 11.2856 8.12767 11.26C8.28223 11.2345 8.4409 11.258 8.58143 11.3272C8.72196 11.3964 8.83728 11.5079 8.91122 11.646C8.98515 11.7841 9.01398 11.9419 8.99367 12.0973C8.97223 12.2612 8.89723 12.4134 8.78033 12.5303C8.66343 12.6472 8.51118 12.7222 8.34726 12.7437L8.34726 12.7437ZM8.34726 8.99367C8.19193 9.01398 8.03414 8.98515 7.89603 8.91121C7.75792 8.83728 7.64643 8.72196 7.57721 8.58143C7.50798 8.4409 7.48449 8.28223 7.51005 8.12767C7.5356 7.97312 7.6089 7.83044 7.71967 7.71967C7.83044 7.6089 7.97312 7.5356 8.12767 7.51004C8.28223 7.48449 8.4409 7.50798 8.58143 7.5772C8.72196 7.64643 8.83728 7.75792 8.91122 7.89603C8.98515 8.03414 9.01398 8.19193 8.99367 8.34726C8.97223 8.51118 8.89723 8.66343 8.78033 8.78033C8.66343 8.89723 8.51118 8.97223 8.34726 8.99367L8.34726 8.99367Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(15.63%, 15.63%)" },
        },
        {
          d: "M0.747656 1.50281C1.16058 1.50281 1.49531 1.1664 1.49531 0.751406C1.49531 0.336416 1.16058 0 0.747656 0C0.334737 0 0 0.336416 0 0.751406C0 1.1664 0.334737 1.50281 0.747656 1.50281Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(45.59%, 34.36%)" },
        },
        {
          d: "M0.847261 1.49367C0.69193 1.51398 0.534138 1.48515 0.39603 1.41122C0.257922 1.33728 0.146431 1.22196 0.0772047 1.08143C0.00797873 0.940903 -0.0155067 0.782227 0.0100443 0.627671C0.0355953 0.473116 0.1089 0.330441 0.219671 0.219671C0.330441 0.1089 0.473116 0.0355952 0.627671 0.0100442C0.782226 -0.0155068 0.940904 0.00797903 1.08143 0.077205C1.22196 0.146431 1.33728 0.257922 1.41122 0.39603C1.48515 0.534139 1.51398 0.691931 1.49367 0.847261C1.47223 1.01119 1.39723 1.16343 1.28033 1.28033C1.16343 1.39723 1.01118 1.47223 0.847261 1.49367L0.847261 1.49367ZM7.49976 14.9998C7.35143 14.9998 7.20642 15.0437 7.08308 15.1262C6.95975 15.2086 6.86362 15.3257 6.80685 15.4627C6.75009 15.5998 6.73523 15.7506 6.76417 15.8961C6.79311 16.0416 6.86454 16.1752 6.96943 16.2801C7.07432 16.385 7.20796 16.4564 7.35344 16.4853C7.49893 16.5143 7.64973 16.4994 7.78677 16.4427C7.92382 16.3859 8.04095 16.2898 8.12336 16.1664C8.20578 16.0431 8.24976 15.8981 8.24976 15.7498C8.24976 15.5508 8.17074 15.3601 8.03009 15.2194C7.88944 15.0788 7.69867 14.9998 7.49976 14.9998ZM7.49976 11.2498C7.35143 11.2498 7.20642 11.2937 7.08308 11.3762C6.95975 11.4586 6.86362 11.5757 6.80685 11.7127C6.75009 11.8498 6.73523 12.0006 6.76417 12.1461C6.79311 12.2916 6.86454 12.4252 6.96943 12.5301C7.07432 12.635 7.20796 12.7064 7.35344 12.7353C7.49893 12.7643 7.64973 12.7494 7.78677 12.6927C7.92382 12.6359 8.04095 12.5398 8.12336 12.4164C8.20578 12.2931 8.24976 12.1481 8.24976 11.9998C8.24976 11.8008 8.17074 11.6101 8.03009 11.4694C7.88944 11.3288 7.69867 11.2498 7.49976 11.2498ZM7.49976 7.49976C7.35143 7.49976 7.20642 7.54375 7.08308 7.62616C6.95975 7.70857 6.86362 7.8257 6.80685 7.96275C6.75009 8.09979 6.73523 8.25059 6.76417 8.39608C6.79311 8.54156 6.86454 8.6752 6.96943 8.78009C7.07432 8.88498 7.20796 8.95641 7.35344 8.98535C7.49893 9.01429 7.64973 8.99944 7.78677 8.94267C7.92382 8.88591 8.04095 8.78978 8.12336 8.66644C8.20578 8.5431 8.24976 8.3981 8.24976 8.24976C8.24976 8.05085 8.17074 7.86008 8.03009 7.71943C7.88944 7.57878 7.69867 7.49976 7.49976 7.49976ZM4.49976 14.9998C4.35143 14.9998 4.20642 15.0437 4.08308 15.1262C3.95975 15.2086 3.86362 15.3257 3.80685 15.4627C3.75009 15.5998 3.73523 15.7506 3.76417 15.8961C3.79311 16.0416 3.86454 16.1752 3.96943 16.2801C4.07432 16.385 4.20796 16.4564 4.35344 16.4853C4.49893 16.5143 4.64973 16.4994 4.78677 16.4427C4.92382 16.3859 5.04095 16.2898 5.12336 16.1664C5.20578 16.0431 5.24976 15.8981 5.24976 15.7498C5.24976 15.5508 5.17074 15.3601 5.03009 15.2194C4.88944 15.0788 4.69867 14.9998 4.49976 14.9998ZM4.49976 11.2498C4.35143 11.2498 4.20642 11.2937 4.08308 11.3762C3.95975 11.4586 3.86362 11.5757 3.80685 11.7127C3.75009 11.8498 3.73523 12.0006 3.76417 12.1461C3.79311 12.2916 3.86454 12.4252 3.96943 12.5301C4.07432 12.635 4.20796 12.7064 4.35344 12.7353C4.49893 12.7643 4.64973 12.7494 4.78677 12.6927C4.92382 12.6359 5.04095 12.5398 5.12336 12.4164C5.20578 12.2931 5.24976 12.1481 5.24976 11.9998C5.24976 11.8008 5.17074 11.6101 5.03009 11.4694C4.88944 11.3288 4.69867 11.2498 4.49976 11.2498ZM4.49976 7.49976C4.35143 7.49976 4.20642 7.54375 4.08308 7.62616C3.95975 7.70857 3.86362 7.8257 3.80685 7.96275C3.75009 8.09979 3.73523 8.25059 3.76417 8.39608C3.79311 8.54156 3.86454 8.6752 3.96943 8.78009C4.07432 8.88498 4.20796 8.95641 4.35344 8.98535C4.49893 9.01429 4.64973 8.99944 4.78677 8.94267C4.92382 8.88591 5.04095 8.78978 5.12336 8.66644C5.20578 8.5431 5.24976 8.3981 5.24976 8.24976C5.24976 8.05085 5.17074 7.86008 5.03009 7.71943C4.88944 7.57878 4.69867 7.49976 4.49976 7.49976Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(46.88%, 15.63%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Building")}
      {...rest}
    ></Icon>
  );
}