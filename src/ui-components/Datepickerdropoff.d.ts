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
export declare type DatepickerdropoffOverridesProps = {
    Datepickerdropoff?: PrimitiveOverrideProps<ViewProps>;
    "shape/color"?: PrimitiveOverrideProps<ViewProps>;
    "pick-up "?: PrimitiveOverrideProps<ViewProps>;
    "box-retirada48927"?: PrimitiveOverrideProps<FlexProps>;
    data48928?: PrimitiveOverrideProps<FlexProps>;
    date48929?: PrimitiveOverrideProps<FlexProps>;
    calendar5248930?: PrimitiveOverrideProps<IconProps>;
    "Mon 05/12"?: PrimitiveOverrideProps<TextProps>;
    Line48932?: PrimitiveOverrideProps<IconProps>;
    hour48933?: PrimitiveOverrideProps<FlexProps>;
    Vector48934?: PrimitiveOverrideProps<IconProps>;
    "10:0048935"?: PrimitiveOverrideProps<TextProps>;
    "Pick-up Date and Time"?: PrimitiveOverrideProps<TextProps>;
    "drop-off"?: PrimitiveOverrideProps<ViewProps>;
    "box-retirada48938"?: PrimitiveOverrideProps<FlexProps>;
    data48939?: PrimitiveOverrideProps<FlexProps>;
    date48940?: PrimitiveOverrideProps<FlexProps>;
    calendar5248941?: PrimitiveOverrideProps<IconProps>;
    "Tue 05/12"?: PrimitiveOverrideProps<TextProps>;
    Line48943?: PrimitiveOverrideProps<IconProps>;
    hour48944?: PrimitiveOverrideProps<FlexProps>;
    Vector48945?: PrimitiveOverrideProps<IconProps>;
    "10:0048946"?: PrimitiveOverrideProps<TextProps>;
    "Drop-off Date and Time"?: PrimitiveOverrideProps<TextProps>;
    residence?: PrimitiveOverrideProps<ViewProps>;
    country?: PrimitiveOverrideProps<FlexProps>;
    Residence?: PrimitiveOverrideProps<TextProps>;
    location48960?: PrimitiveOverrideProps<ViewProps>;
    location48961?: PrimitiveOverrideProps<ViewProps>;
    Vector48962?: PrimitiveOverrideProps<IconProps>;
    "S\u00E3o Paulo, S\u00E3o Paulo,...48963"?: PrimitiveOverrideProps<TextProps>;
    location48964?: PrimitiveOverrideProps<ViewProps>;
    Vector48965?: PrimitiveOverrideProps<IconProps>;
    "S\u00E3o Paulo, S\u00E3o Paulo,...48966"?: PrimitiveOverrideProps<TextProps>;
    "Pick-up Location"?: PrimitiveOverrideProps<TextProps>;
    "Drop-off Location"?: PrimitiveOverrideProps<TextProps>;
    "return to different location"?: PrimitiveOverrideProps<FlexProps>;
    "Group 1575"?: PrimitiveOverrideProps<FlexProps>;
    Vector48969?: PrimitiveOverrideProps<IconProps>;
    Vector48996?: PrimitiveOverrideProps<IconProps>;
    "Return car to different location"?: PrimitiveOverrideProps<TextProps>;
    "call to action"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type DatepickerdropoffProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DatepickerdropoffOverridesProps | undefined | null;
}>;
export default function Datepickerdropoff(props: DatepickerdropoffProps): React.ReactElement;
