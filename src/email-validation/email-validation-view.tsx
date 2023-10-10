import { useState } from "react";
import EmailValidationForm from "./email-validation-form";
import { EmailValidationResult } from "../email-validation";
import { getSingleEmail } from "../disify";
import ValidationHistoryList from "./validation-history-list";

export default function EmailValidationView() {
  const [results, setResults] = useState<EmailValidationResult[]>([]);

  async function onSubmit(email: string) {
    try {
      const result = await getSingleEmail(email).then((res) => res.json());
      setResults([{ email, result }, ...results]);
    } catch {
      setResults([{ email, error: "API Error" }, ...results]);
    }
  }

  return (
    <div>
      <div>
        <EmailValidationForm onSubmit={onSubmit} />
      </div>
      <div>
        <ValidationHistoryList results={results} />
      </div>
    </div>
  );
}
