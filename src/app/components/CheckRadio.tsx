import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { IconButton } from '@mui/material';                              

interface CheckRadioProps {
    value: string
    selectedOption: string,
    onSelect: (value: string) => void
}

function CheckRadioExample({ value, selectedOption, onSelect }: CheckRadioProps) {
  return (
    <IconButton onClick={() => onSelect(value)}>
        {selectedOption === value ? (
            <CheckCircleIcon className='text-primary-greeen' />
        ) : (
            <RadioButtonUncheckedIcon />
        )}
    </IconButton>   
  );
}

export default CheckRadioExample;
