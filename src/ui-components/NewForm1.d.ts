/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SliderFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm1InputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field3?: string;
    Field4?: number;
    Field5?: number;
    Field6?: number;
};
export declare type NewForm1ValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    Field4?: ValidationFunction<number>;
    Field5?: ValidationFunction<number>;
    Field6?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<AutocompleteProps>;
    Field1?: PrimitiveOverrideProps<AutocompleteProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    Field4?: PrimitiveOverrideProps<SliderFieldProps>;
    Field5?: PrimitiveOverrideProps<SliderFieldProps>;
    Field6?: PrimitiveOverrideProps<SliderFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewForm1InputValues) => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
