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
export declare type DropdownlocationopenOverridesProps = {
    Dropdownlocationopen?: PrimitiveOverrideProps<ViewProps>;
    shape?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 741"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 739"?: PrimitiveOverrideProps<ViewProps>;
    description?: PrimitiveOverrideProps<FlexProps>;
    city?: PrimitiveOverrideProps<FlexProps>;
    "city-icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector35161?: PrimitiveOverrideProps<IconProps>;
    City?: PrimitiveOverrideProps<TextProps>;
    citys?: PrimitiveOverrideProps<FlexProps>;
    "Guarulhos, S\u00E3o Paulo, Brazil1926"?: PrimitiveOverrideProps<TextProps>;
    "Ribeir\u00E3o Preto, S\u00E3o Paulo, Brazil1927"?: PrimitiveOverrideProps<TextProps>;
    "S\u00E3o Jos\u00E9 do Rio Preto, S\u00E3o Paulo, Brazil1928"?: PrimitiveOverrideProps<TextProps>;
    airport?: PrimitiveOverrideProps<FlexProps>;
    "airport-icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector35157?: PrimitiveOverrideProps<IconProps>;
    Airport?: PrimitiveOverrideProps<TextProps>;
    airports?: PrimitiveOverrideProps<FlexProps>;
    "Guarulhos, S\u00E3o Paulo, Brazil2018"?: PrimitiveOverrideProps<TextProps>;
    "Ribeir\u00E3o Preto, S\u00E3o Paulo, Brazil2019"?: PrimitiveOverrideProps<TextProps>;
    "S\u00E3o Jos\u00E9 do Rio Preto, S\u00E3o Paulo, Brazil2020"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DropdownlocationopenProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DropdownlocationopenOverridesProps | undefined | null;
}>;
export default function Dropdownlocationopen(props: DropdownlocationopenProps): React.ReactElement;
