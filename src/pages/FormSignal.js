import * as React from 'react';
import MKBox from "../components/MKBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

import Footer1 from '../footer.routes';
import footerRoutes from "../footer.routes";
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
const FormSignal = () =>  {
  const raisons = [
    { label: 'Nudité', id: 1 },
    { label: 'Violence', id: 2 },
    { label: 'Harcélement', id: 3 },
    { label: 'Fausses informations', id: 4 },
    { label: 'Contenu indésirable', id: 5 },
    { label: 'Ventes non autorisées', id: 6 },
    { label: 'Discours haineux', id: 7 },
    { label: 'Autres', id: 9 },
  ];
  return (
    <ThemeProvider theme={theme}>
    <MKBox pt={6} px={1} bgColor="white">
    <Autocomplete className='cv' disablePortal  id="combo-box-demo" options={raisons}  sx={{ width: 300 }}
               renderInput={(params) => <TextField {...params} label="--Raison pour le signal--" />} 
            />
    </MKBox>
    </ThemeProvider>
  )
}

export default FormSignal;