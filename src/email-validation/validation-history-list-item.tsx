import { Typography } from "@mui/material";
import { DisifySingleEmailResponse } from "../disify";
import ValidationItemLabel from "./validation-item-label";

interface ValidationHistoryListItemP {
  index: number;
  email: string;
  result: DisifySingleEmailResponse;
}

export default function ValidationHistoryListItem({
  index,
  email,
  result,
}: ValidationHistoryListItemP) {
  return (
    <div data-testid={`validation-history-list-item-${index}`}>
      <Typography>Email: {email}</Typography>
      <ValidationItemLabel label="Valid Format" value={result.format} />
      <ValidationItemLabel label="Disposable" value={result.disposable} />
    </div>
  );
}
