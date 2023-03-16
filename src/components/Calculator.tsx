import { Grid, Button, TextField } from "@mui/material";
import { Field, FieldProps, Formik } from "formik";
import { handleCalculation } from "./calculatorHelpers";

const operators = ["/", "*", "-", "+"];

const buttons = [
  { label: "MC", backgroundColor: "lightgrey", value: "MC" },
  { label: "MR", backgroundColor: "lightgrey", value: "MR" },
  { label: "M-", backgroundColor: "lightgrey", value: "M-" },
  { label: "M+", backgroundColor: "lightgrey", value: "M+" },
  { label: "AC", backgroundColor: "lightgrey", value: "AC" },
  { label: "√", backgroundColor: "lightgrey", value: "√" },
  { label: "%", backgroundColor: "lightgrey", value: "%" },
  { label: "÷", backgroundColor: "orange", value: "/" },
  { label: "7", backgroundColor: "white", value: "7" },
  { label: "8", backgroundColor: "white", value: "8" },
  { label: "9", backgroundColor: "white", value: "9" },
  { label: "×", backgroundColor: "orange", value: "*" },
  { label: "4", backgroundColor: "white", value: "4" },
  { label: "5", backgroundColor: "white", value: "5" },
  { label: "6", backgroundColor: "white", value: "6" },
  { label: "-", backgroundColor: "orange", value: "-" },
  { label: "1", backgroundColor: "white", value: "1" },
  { label: "2", backgroundColor: "white", value: "2" },
  { label: "3", backgroundColor: "white", value: "3" },
  { label: "+", backgroundColor: "orange", value: "+" },
  { label: "0", backgroundColor: "white", value: "0" },
  { label: ".", backgroundColor: "white", value: "." },
  { label: "^", backgroundColor: "white", value: "^" },
  { label: "=", backgroundColor: "orange", value: "=" },
];

export const Calculator = () => {
  return (
    <div style={{ border: "2px black solid", padding: "20px" }}>
      <Formik
        enableReinitialize
        initialValues={{
          inputValue: "",
        }}
        onSubmit={(values, { setFieldValue }) => {
          setFieldValue("inputValue", handleCalculation(values.inputValue));
        }}
      >
        {({ values, setFieldValue, submitForm }) => (
          <Grid container style={{ maxWidth: "330px" }} spacing={2}>
            <Grid item xs={12}>
              <Field name="inputValue">
                {({ field }: FieldProps) => (
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    onKeyDown={(event: any) => {
                      if (event.keyCode === 13) {
                        submitForm();
                      }
                    }}
                    {...field}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between" spacing={2}>
                {buttons.map((button) => {
                  return (
                    <Grid item key={button.label}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: button.backgroundColor,
                          color: "black",
                        }}
                        onClick={() => {
                          if (button.value === "=") {
                            submitForm();
                          } else {
                            setFieldValue(
                              "inputValue",
                              operators.includes(button.value)
                                ? `${values.inputValue} ${button.value} `
                                : `${values.inputValue}${button.value}`
                            );
                          }
                        }}
                      >
                        {button.label}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </div>
  );
};
