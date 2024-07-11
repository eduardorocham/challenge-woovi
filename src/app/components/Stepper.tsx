import { StepType } from '../types/step';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

interface VerticalStepperProps {
  steps: StepType[] 
}

const VerticalStepper = ({ steps }: VerticalStepperProps) => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconProps={{
                style: { color: `${index === 0 ? '#03D69D' : '#E5E5E5'}` },
              }}
            >
              <div className="flex justify-between">
                <div className="font-semibold text-secondary-gray text-lg">
                  {step.label}
                </div>
                <div className="font-bold text-secondary-gray text-lg">{step.description}</div>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
