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
export declare type Component59OverridesProps = {
    Component59?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Component59Props = React.PropsWithChildren<Partial<IconProps> & {
    property1?: "ion:game-controller" | "ion:game-controller-outline";
} & {
    overrides?: Component59OverridesProps | undefined | null;
}>;
export default function Component59(props: Component59Props): React.ReactElement;
