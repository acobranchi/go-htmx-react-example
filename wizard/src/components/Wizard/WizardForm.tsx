import { Box, Button, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Education from "./steps/Education";
import PersonalInfo from "./steps/PersonalInfo";
import Review from "./steps/Review";
import WorkExperience from "./steps/WorkExperience";

const steps = ["Personal Information", "Education", "Work Experience", "Review"];

export default function WizardForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    education: "",
    graduationYear: "",
    company: "",
    position: "",
    yearsOfExperience: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    const data = {
      Name: `${formData.firstName} ${formData.lastName}`,
      Email: formData.email,
      Education: formData.education,
      GraduationYear: formData.graduationYear,
      Position: formData.position,
      Company: formData.company,
      YearsOfExperience: formData.yearsOfExperience,
    }
    const result = await fetch("http://127.0.0.1:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(result);

    // window.location.href = "/home";
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalInfo formData={formData} handleInputChange={handleInputChange} />;
      case 1:
        return <Education formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <WorkExperience formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <Review formData={formData} />;
      case 4:
        submitForm();
        return null;
      default:
        return "Unknown step";
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto", my: 4, borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Multistep Wizard
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          marginTop: 3,
          marginBottom: 5,
          "& .MuiStepLabel-root": {
            color: "grey.500",
          },
          "& .MuiStepLabel-active": {
            color: "primary.main",
          },
          "& .MuiStepLabel-completed": {
            color: "primary.dark",
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              onClick={() => handleStepClick(index)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "action.hover",
                  borderRadius: 1,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 4, minHeight: 300 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
