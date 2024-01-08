/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RadiobuttonsOverridesProps = {
    Radiobuttons?: PrimitiveOverrideProps<FlexProps>;
    container?: PrimitiveOverrideProps<FlexProps>;
    "state-layer"?: PrimitiveOverrideProps<FlexProps>;
    icon?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type RadiobuttonsProps = React.PropsWithChildren<Partial<FlexProps> & {
    selected?: "false" | "true";
    state?: "Disabled" | "Enabled" | "Focused" | "Hovered" | "Pressed";
} & {
    overrides?: RadiobuttonsOverridesProps | undefined | null;
}>;
export default function Radiobuttons(props: RadiobuttonsProps): React.ReactElement;
