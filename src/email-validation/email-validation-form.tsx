import { Button, TextField } from "@mui/material";

interface EmailValidationFormP {
  onSubmit?: (event: React.FormEvent) => void;
}

export default function EmailValidationForm({
  onSubmit,
}: EmailValidationFormP) {
  return (
    <form aria-label="Email validation form" onSubmit={onSubmit}>
      <TextField label="Email" type="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
