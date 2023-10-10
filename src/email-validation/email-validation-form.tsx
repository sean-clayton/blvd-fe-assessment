import { Box, Button, TextField } from "@mui/material";

interface EmailValidationFormP {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function EmailValidationForm({
  onSubmit,
}: EmailValidationFormP) {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "start",
      }}
      aria-label="Email validation form"
      onSubmit={onSubmit}
      noValidate
    >
      <TextField label="Email" type="email" name="email" fullWidth />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
