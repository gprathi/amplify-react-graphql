/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DropdowndateopenOverridesProps = {
    Dropdowndateopen?: PrimitiveOverrideProps<ViewProps>;
    shape?: PrimitiveOverrideProps<ViewProps>;
    pick35313?: PrimitiveOverrideProps<ViewProps>;
    pick2826?: PrimitiveOverrideProps<ViewProps>;
    "call to action"?: PrimitiveOverrideProps<FlexProps>;
    "datepicke/selected"?: PrimitiveOverrideProps<ViewProps>;
    "datepicke/blank"?: PrimitiveOverrideProps<ViewProps>;
    line?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DropdowndateopenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DropdowndateopenOverridesProps | undefined | null;
}>;
export default function Dropdowndateopen(props: DropdowndateopenProps): React.ReactElement;
