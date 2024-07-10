'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputMask from 'react-input-mask';
import { SelectChangeEvent } from '@mui/material/Select';

const Form = () => {
  const [parcelas, setParcelas] = useState('');
  
  const handleParcelasChange = (event: SelectChangeEvent) => {
    setParcelas(event.target.value);
  };

  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: 'calc(100% - 16px)' },
            '& .MuiFormControl-root': { m: 1, width: 'calc(100% - 16px)' },
            maxWidth: 400,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
    >
      <div>
        <TextField
          id="nome-completo"
          label="Nome completo"
          defaultValue="João Linaldo Dias Fraga Santos"
        />
        
        <InputMask
          mask="999.999.999-99"
          defaultValue="405.503.503-15"
        >
           {/* @ts-ignore */}
            {() => <TextField 
                id="cpf"
                label="CPF"
            />}
        </InputMask>

        <InputMask
          mask="999.999.999-99"
          defaultValue="405.503.503-15"
        >
           {/* @ts-ignore */}
            {() => <TextField 
                id="numero-cartao"
                label="Número do cartão"
            />}
        </InputMask>
        
        <InputMask
          mask="99/99"
          defaultValue="10/11"
        >
            {/* @ts-ignore */}
            {() => <TextField
                
                id="vencimento"
                label="Vencimento"
            />}
        </InputMask>
        
        <TextField
          id="cvv"
          label="CVV"
          inputProps={{ maxLength: 3 }}
          defaultValue="405"
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel id="parcelas-label">Parcelas</InputLabel>
          <Select
            labelId="parcelas-label"
            id="parcelas"
            value={parcelas}
            label="Parcelas"
            onChange={handleParcelasChange}
          >
            <MenuItem value={1}>1x de R$ 15.300,00</MenuItem>
            <MenuItem value={2}>2x de R$ 7.650,00</MenuItem>
            <MenuItem value={3}>3x de R$ 5.100,00</MenuItem>
          </Select>
        </FormControl>
        
        <button className='bg-primary-blue w-small-space text-white m-auto block font-semibold text-lg rounded-lg py-1 mt-4'>
            Pagar
        </button>
      </div>
    </Box>
  );
}

export default Form;
