import { Grid, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface PersonalInfoProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalInfo({ formData, handleInputChange }: PersonalInfoProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  );
}
