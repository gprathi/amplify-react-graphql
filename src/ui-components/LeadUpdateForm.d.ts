/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Lead } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeadUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
    typeOfVacation?: string;
};
export declare type LeadUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    typeOfVacation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeadUpdateFormOverridesProps = {
    LeadUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    typeOfVacation?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type LeadUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeadUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lead?: Lead;
    onSubmit?: (fields: LeadUpdateFormInputValues) => LeadUpdateFormInputValues;
    onSuccess?: (fields: LeadUpdateFormInputValues) => void;
    onError?: (fields: LeadUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeadUpdateFormInputValues) => LeadUpdateFormInputValues;
    onValidate?: LeadUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeadUpdateForm(props: LeadUpdateFormProps): React.ReactElement;
