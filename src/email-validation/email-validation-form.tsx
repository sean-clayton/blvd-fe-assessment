import { Button, TextField } from "@mui/material";

interface EmailValidationFormP {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function EmailValidationForm({
  onSubmit,
}: EmailValidationFormP) {
  return (
    <form aria-label="Email validation form" onSubmit={onSubmit} noValidate>
      <TextField label="Email" type="email" name="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
