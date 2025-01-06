import { TextField, Grid } from "@mui/material";

interface WorkExperienceProps {
  formData: {
    company: string;
    position: string;
    yearsOfExperience: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function WorkExperience({ formData, handleInputChange }: WorkExperienceProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Years of Experience"
          name="yearsOfExperience"
          type="number"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
}
