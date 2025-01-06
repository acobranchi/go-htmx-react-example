import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

interface ReviewProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    education: string;
    graduationYear: string;
    company: string;
    position: string;
    yearsOfExperience: string;
  };
}

export default function Review({ formData }: ReviewProps) {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Review Your Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={`${formData.firstName} ${formData.lastName}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={formData.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Education" secondary={formData.education} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Graduation Year" secondary={formData.graduationYear} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Company" secondary={formData.company} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Position" secondary={formData.position} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Years of Experience" secondary={formData.yearsOfExperience} />
        </ListItem>
      </List>
    </Paper>
  );
}
