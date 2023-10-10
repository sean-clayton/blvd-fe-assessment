import { useState } from "react";
import EmailValidationForm from "./email-validation-form";
import { EmailValidationResult } from "../email-validation";
import { getSingleEmail } from "../disify";
import ValidationHistoryList from "./validation-history-list";

export default function EmailValidationView() {
  const [results, setResults] = useState<EmailValidationResult[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target;
    if (form instanceof HTMLFormElement) {
      const formData = new FormData(form);
      console.log(formData);
      const email = formData.get("email")?.toString();
      if (!email) return;
      form.reset();
      try {
        const result = await getSingleEmail(email).then((res) => res.json());
        setResults([{ email, result }, ...results]);
      } catch {
        setResults([{ email, error: "API Error" }]);
      }
    }
  }

  return (
    <div>
      <div>
        <EmailValidationForm onSubmit={handleSubmit} />
      </div>
      <div>
        <ValidationHistoryList results={results} />
      </div>
    </div>
  );
}
