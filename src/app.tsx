import Container from "@mui/material/Container";
import EmailValidationView from "./email-validation/email-validation-view";

export default function App() {
  return (
    <Container id="app" maxWidth="sm" sx={{ p: 2 }}>
      <EmailValidationView />
    </Container>
  );
}
