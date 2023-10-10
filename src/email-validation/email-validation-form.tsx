import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";

interface EmailValidationFormP {
  onSubmit?: (email: string) => Promise<void>;
}

export default function EmailValidationForm({
  onSubmit,
}: EmailValidationFormP) {
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors: { email?: boolean } = {};
        if (!values.email) {
          errors.email = true;
        }
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (onSubmit) {
          await onSubmit(values.email);
          setSubmitting(false);
          resetForm();
        }
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "start",
          }}
          aria-label="Email validation form"
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            autoFocus
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!dirty || !isValid || isSubmitting}
          >
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
}
