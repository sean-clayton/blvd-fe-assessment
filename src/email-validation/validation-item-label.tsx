import { Typography } from "@mui/material";

export default function ValidationItemLabel({
  label,
  value,
}: {
  label: "Disposable" | "Valid Format";
  value?: boolean;
}) {
  return (
    <Typography>
      {label}: {value ? "Yes" : "No"}
    </Typography>
  );
}
