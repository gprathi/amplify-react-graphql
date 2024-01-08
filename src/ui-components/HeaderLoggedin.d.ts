/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { AirplaneProps } from "./Airplane";
import { LogoProps } from "./Logo";
import { HeartProps } from "./Heart";
import { ArrowDownProps } from "./ArrowDown";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderLoggedinOverridesProps = {
    HeaderLoggedin?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 2608754"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    airplane?: AirplaneProps;
    "Find Flight"?: PrimitiveOverrideProps<TextProps>;
    "Frame 21"?: PrimitiveOverrideProps<FlexProps>;
    "ion:bed"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Find Stays"?: PrimitiveOverrideProps<TextProps>;
    Logo?: LogoProps;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    heart?: HeartProps;
    Favourites?: PrimitiveOverrideProps<TextProps>;
    "|"?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "John D."?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Arrow Down"?: ArrowDownProps;
} & EscapeHatchProps;
export declare type HeaderLoggedinProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderLoggedinOverridesProps | undefined | null;
}>;
export default function HeaderLoggedin(props: HeaderLoggedinProps): React.ReactElement;
