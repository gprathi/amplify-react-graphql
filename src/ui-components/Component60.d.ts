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
export declare type Component60OverridesProps = {
    Component60?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component60Props = React.PropsWithChildren<Partial<IconProps> & {
    property1?: "ion:heart-circle" | "ion:heart-circle-outline";
} & {
    overrides?: Component60OverridesProps | undefined | null;
}>;
export default function Component60(props: Component60Props): React.ReactElement;
