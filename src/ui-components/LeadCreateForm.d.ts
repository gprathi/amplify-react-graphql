/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeadCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
    typeOfVacation?: string;
};
export declare type LeadCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    typeOfVacation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeadCreateFormOverridesProps = {
    LeadCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    typeOfVacation?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type LeadCreateFormProps = React.PropsWithChildren<{
    overrides?: LeadCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeadCreateFormInputValues) => LeadCreateFormInputValues;
    onSuccess?: (fields: LeadCreateFormInputValues) => void;
    onError?: (fields: LeadCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeadCreateFormInputValues) => LeadCreateFormInputValues;
    onValidate?: LeadCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeadCreateForm(props: LeadCreateFormProps): React.ReactElement;
