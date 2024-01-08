/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogoOverridesProps = {
    Logo?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector367130?: PrimitiveOverrideProps<IconProps>;
    Vector367132?: PrimitiveOverrideProps<IconProps>;
    Vector367133?: PrimitiveOverrideProps<IconProps>;
    Vector367134?: PrimitiveOverrideProps<IconProps>;
    Vector367135?: PrimitiveOverrideProps<IconProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    Vector367131?: PrimitiveOverrideProps<IconProps>;
    Vector377236?: PrimitiveOverrideProps<IconProps>;
    Vector367136?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoOverridesProps | undefined | null;
}>;
export default function Logo(props: LogoProps): React.ReactElement;
