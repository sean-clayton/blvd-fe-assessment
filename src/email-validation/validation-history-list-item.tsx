import { Typography } from "@mui/material";
import ValidationItemLabel from "./validation-item-label";
import { EmailValidationResult } from "../email-validation";

interface ValidationHistoryListItemP {
  index: number;
  email: string;
  result?: EmailValidationResult["result"];
  error?: EmailValidationResult["error"];
}

export default function ValidationHistoryListItem({
  index,
  email,
  result,
  error,
}: ValidationHistoryListItemP) {
  return (
    <div data-testid={`validation-history-list-item-${index}`}>
      <Typography>Email: {email}</Typography>
      {error ? (
        <ValidationItemLabel label="Error" value={error} />
      ) : (
        <>
          <ValidationItemLabel
            label="Valid Format"
            value={result?.format ? "Yes" : "No"}
          />
          <ValidationItemLabel
            label="Disposable"
            value={result?.disposable ? "Yes" : "No"}
          />
        </>
      )}
    </div>
  );
}
