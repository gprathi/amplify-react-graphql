/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps } from "@aws-amplify/ui-react";
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
export declare type Component24OverridesProps = {
    Component24?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component24Props = React.PropsWithChildren<Partial<IconProps> & {
    property1?: "ion:bed" | "ion:bed-outline";
} & {
    overrides?: Component24OverridesProps | undefined | null;
}>;
export default function Component24(props: Component24Props): React.ReactElement;
