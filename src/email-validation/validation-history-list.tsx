import { Box } from "@mui/material";
import { EmailValidationResult } from "../email-validation";
import ValidationHistoryListItem from "./validation-history-list-item";

interface ValidationHistoryListP {
  results: EmailValidationResult[];
}

export default function ValidationHistoryList({
  results,
}: ValidationHistoryListP) {
  return (
    <Box
      component="ol"
      data-testid="validation-history-list"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        listStyleType: "none",
        p: 0,
      }}
      aria-label="Validation history list"
    >
      {results.map(({ email, result, error }, idx) => (
        <li key={idx} aria-label="Validation history list item">
          <ValidationHistoryListItem
            email={email}
            result={result}
            error={error}
            index={idx}
          />
        </li>
      ))}
    </Box>
  );
}
