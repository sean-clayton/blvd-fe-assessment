import { Button, TextField } from "@mui/material";

export default function EmailValidationForm() {
  return (
    <form aria-label="Email validation form">
      <TextField label="Email" type="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
