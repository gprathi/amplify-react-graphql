/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  SliderField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
export default function NewForm1(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    Field0: undefined,
    Field1: undefined,
    Field2: "",
    Field3: "",
    Field4: 0,
    Field5: 0,
    Field6: 0,
  };
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [Field5, setField5] = React.useState(initialValues.Field5);
  const [Field6, setField6] = React.useState(initialValues.Field6);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField0(initialValues.Field0);
    setField1(initialValues.Field1);
    setField2(initialValues.Field2);
    setField3(initialValues.Field3);
    setField4(initialValues.Field4);
    setField5(initialValues.Field5);
    setField6(initialValues.Field6);
    setErrors({});
  };
  const validations = {
    Field0: [],
    Field1: [],
    Field2: [],
    Field3: [],
    Field4: [{ type: "Required" }],
    Field5: [],
    Field6: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field0,
          Field1,
          Field2,
          Field3,
          Field4,
          Field5,
          Field6,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "NewForm1")}
      {...rest}
    >
      <Autocomplete
        label="From"
        options={[]}
        onSelect={({ id, label }) => {
          setField0(id);
          runValidationTasks("Field0", id);
        }}
        onClear={() => {
          setField0("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0: value,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Field0")}
      ></Autocomplete>
      <Autocomplete
        label="To"
        options={[]}
        onSelect={({ id, label }) => {
          setField1(id);
          runValidationTasks("Field1", id);
        }}
        onClear={() => {
          setField1("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1: value,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Field1")}
      ></Autocomplete>
      <TextField
        label="DepartureDate"
        type="date"
        value={Field2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2: value,
              Field3,
              Field4,
              Field5,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field2 ?? value;
          }
          if (errors.Field2?.hasError) {
            runValidationTasks("Field2", value);
          }
          setField2(value);
        }}
        onBlur={() => runValidationTasks("Field2", Field2)}
        errorMessage={errors.Field2?.errorMessage}
        hasError={errors.Field2?.hasError}
        {...getOverrideProps(overrides, "Field2")}
      ></TextField>
      <TextField
        label="ReturnDate"
        type="date"
        value={Field3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3: value,
              Field4,
              Field5,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field3 ?? value;
          }
          if (errors.Field3?.hasError) {
            runValidationTasks("Field3", value);
          }
          setField3(value);
        }}
        onBlur={() => runValidationTasks("Field3", Field3)}
        errorMessage={errors.Field3?.errorMessage}
        hasError={errors.Field3?.hasError}
        {...getOverrideProps(overrides, "Field3")}
      ></TextField>
      <SliderField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Adults</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        value={Field4}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4: value,
              Field5,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field4 ?? value;
          }
          if (errors.Field4?.hasError) {
            runValidationTasks("Field4", value);
          }
          setField4(value);
        }}
        onBlur={() => runValidationTasks("Field4", Field4)}
        errorMessage={errors.Field4?.errorMessage}
        hasError={errors.Field4?.hasError}
        {...getOverrideProps(overrides, "Field4")}
      ></SliderField>
      <SliderField
        label="Children"
        value={Field5}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5: value,
              Field6,
            };
            const result = onChange(modelFields);
            value = result?.Field5 ?? value;
          }
          if (errors.Field5?.hasError) {
            runValidationTasks("Field5", value);
          }
          setField5(value);
        }}
        onBlur={() => runValidationTasks("Field5", Field5)}
        errorMessage={errors.Field5?.errorMessage}
        hasError={errors.Field5?.hasError}
        {...getOverrideProps(overrides, "Field5")}
      ></SliderField>
      <SliderField
        label="Label"
        value={Field6}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              Field0,
              Field1,
              Field2,
              Field3,
              Field4,
              Field5,
              Field6: value,
            };
            const result = onChange(modelFields);
            value = result?.Field6 ?? value;
          }
          if (errors.Field6?.hasError) {
            runValidationTasks("Field6", value);
          }
          setField6(value);
        }}
        onBlur={() => runValidationTasks("Field6", Field6)}
        errorMessage={errors.Field6?.errorMessage}
        hasError={errors.Field6?.hasError}
        {...getOverrideProps(overrides, "Field6")}
      ></SliderField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Search"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
