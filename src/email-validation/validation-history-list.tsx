import { EmailValidationResult } from "../email-validation";
import ValidationHistoryListItem from "./validation-history-list-item";

interface ValidationHistoryListP {
  results: EmailValidationResult[];
}

export default function ValidationHistoryList({
  results,
}: ValidationHistoryListP) {
  return (
    <ol data-testid="validation-history-list">
      {results.map(({ email, result, error }, idx) => (
        <li key={idx}>
          <ValidationHistoryListItem
            email={email}
            result={result}
            error={error}
            index={idx}
          />
        </li>
      ))}
    </ol>
  );
}
