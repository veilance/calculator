import { Grid, Button, TextField } from "@mui/material";
import { Field, FieldProps, Formik } from "formik";

const buttons = [
  { label: "MC", backgroundColor: "lightgrey", value: "MC" },
  { label: "MR", backgroundColor: "lightgrey", value: "MR" },
  { label: "M-", backgroundColor: "lightgrey", value: "M-" },
  { label: "M+", backgroundColor: "lightgrey", value: "M+" },
  { label: "AC", backgroundColor: "lightgrey", value: "AC" },
  { label: "√", backgroundColor: "lightgrey", value: "√" },
  { label: "%", backgroundColor: "lightgrey", value: "%" },
  { label: "÷", backgroundColor: "orange", value: "÷" },
  { label: "7", backgroundColor: "white", value: "7" },
  { label: "8", backgroundColor: "white", value: "8" },
  { label: "9", backgroundColor: "white", value: "9" },
  { label: "X", backgroundColor: "orange", value: "X" },
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
  const handleInput = (value: any, setFieldValue: any) => {
    setFieldValue("inputValue", value);
  };

  return (
    <div style={{ border: "2px black solid", padding: "20px" }}>
      <Formik
        enableReinitialize
        initialValues={{
          inputValue: 0,
        }}
        onSubmit={() => {}}
      >
        {({ setFieldValue }) => (
          <Grid container style={{ maxWidth: "330px" }} spacing={2}>
            <Grid item xs={12}>
              <Field name="inputValue">
                {({ field }: FieldProps) => (
                  <TextField required fullWidth variant="outlined" {...field} />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between" spacing={2}>
                {buttons.map((button) => {
                  return (
                    <Grid item>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: button.backgroundColor,
                          color: "black",
                        }}
                        onClick={() => {
                          handleInput(button.value, setFieldValue);
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
