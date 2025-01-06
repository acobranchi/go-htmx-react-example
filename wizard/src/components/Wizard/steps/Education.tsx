import { Grid, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface EducationProps {
  formData: {
    education: string;
    graduationYear: string;
  };
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Education({ formData, handleInputChange }: EducationProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Highest Education"
          name="education"
          value={formData.education}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Graduation Year"
          name="graduationYear"
          type="number"
          value={formData.graduationYear}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
}
