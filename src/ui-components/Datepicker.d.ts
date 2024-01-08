/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DatepickerOverridesProps = {
    Datepicker?: PrimitiveOverrideProps<ViewProps>;
    "shape/color"?: PrimitiveOverrideProps<ViewProps>;
    "return to different location"?: PrimitiveOverrideProps<FlexProps>;
    Vector153?: PrimitiveOverrideProps<IconProps>;
    "Return car to different location"?: PrimitiveOverrideProps<TextProps>;
    location19?: PrimitiveOverrideProps<ViewProps>;
    location3443?: PrimitiveOverrideProps<FlexProps>;
    "Pick-up Location"?: PrimitiveOverrideProps<TextProps>;
    "pick-up "?: PrimitiveOverrideProps<ViewProps>;
    "box-retirada46917"?: PrimitiveOverrideProps<FlexProps>;
    data46918?: PrimitiveOverrideProps<FlexProps>;
    date46919?: PrimitiveOverrideProps<FlexProps>;
    calendar5246920?: PrimitiveOverrideProps<IconProps>;
    "Mon 05/12"?: PrimitiveOverrideProps<TextProps>;
    Line46922?: PrimitiveOverrideProps<IconProps>;
    hour46923?: PrimitiveOverrideProps<FlexProps>;
    Vector46924?: PrimitiveOverrideProps<IconProps>;
    "10:0046925"?: PrimitiveOverrideProps<TextProps>;
    "Pick-up Date and Time"?: PrimitiveOverrideProps<TextProps>;
    "drop-off"?: PrimitiveOverrideProps<ViewProps>;
    "box-retirada46868"?: PrimitiveOverrideProps<FlexProps>;
    data46869?: PrimitiveOverrideProps<FlexProps>;
    date46870?: PrimitiveOverrideProps<FlexProps>;
    calendar5246871?: PrimitiveOverrideProps<IconProps>;
    "Tue 05/12"?: PrimitiveOverrideProps<TextProps>;
    Line46873?: PrimitiveOverrideProps<IconProps>;
    hour46874?: PrimitiveOverrideProps<FlexProps>;
    Vector46875?: PrimitiveOverrideProps<IconProps>;
    "10:0046876"?: PrimitiveOverrideProps<TextProps>;
    "Drop-off Date and Time"?: PrimitiveOverrideProps<TextProps>;
    residence?: PrimitiveOverrideProps<ViewProps>;
    country?: PrimitiveOverrideProps<FlexProps>;
    Residence?: PrimitiveOverrideProps<TextProps>;
    "call to action"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type DatepickerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DatepickerOverridesProps | undefined | null;
}>;
export default function Datepicker(props: DatepickerProps): React.ReactElement;
