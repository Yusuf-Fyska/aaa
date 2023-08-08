import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import LeadGenerationPage from './LeadGenerationPage';

function AdminConfigurationPage() {
  const navigate = useNavigate();
  const [contactPageEnabled, setContactPageEnabled] = useState(true);
  const [inputPageCount, setInputPageCount] = useState(2); 
  const [outputPageCount, setOutputPageCount] = useState(1); 

  const handleBack = () => {
    navigate('/login'); 
  };

  const handleGoToAppPage = () => {
    navigate('/apps', {
      state: {
        inputPageCount,
        outputPageCount,
      },
    });
  };

  return (
    <Paper elevation={3}>
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Admin Configuration Page
        </Typography>
        
        <div className="centered">
      <Typography variant="subtitle1" gutterBottom>
        Input Page Count:
      </Typography>
      <TextField
        type="number"
        value={inputPageCount}
        onChange={(e) => setInputPageCount(Number(e.target.value))}
      />

      <Typography variant="subtitle1" gutterBottom>
        Output Page Count: (Passive)
      </Typography>
      <TextField
        type="number"
        value={outputPageCount}
        onChange={(e) => setOutputPageCount(Number(e.target.value))}
      />
    </div>
        <Button variant="contained" color="primary" onClick={handleGoToAppPage}>
          Go to Lead Generation Page
        </Button>
        <Button variant="contained" color="secondary" onClick={handleBack}>
          Back to Admin Panel
        </Button>
      </Box>
    </Paper>
  );
}

export default AdminConfigurationPage;
