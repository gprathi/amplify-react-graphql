/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AirplaneProps } from "./Airplane";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LogoProps } from "./Logo";
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
export declare type HeaderDefaultOverridesProps = {
    HeaderDefault?: PrimitiveOverrideProps<FlexProps>;
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
    Login?: PrimitiveOverrideProps<TextProps>;
    "Patient-button"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HeaderDefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderDefaultOverridesProps | undefined | null;
}>;
export default function HeaderDefault(props: HeaderDefaultProps): React.ReactElement;
