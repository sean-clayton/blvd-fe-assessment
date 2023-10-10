import { Typography } from "@mui/material";

export default function ValidationItemLabel({
  label,
  value,
}: {
  label: "Disposable" | "Valid Format" | "Error";
  value?: string;
}) {
  return (
    <Typography>
      {label}: {value}
    </Typography>
  );
}
