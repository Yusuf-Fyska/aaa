import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function LeadGenerationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { inputPageCount, outputPageCount } = location.state || {};
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPages, setInputPages] = useState([]);
  const [outputZZZ, setOutputZZZ] = useState(0);
  const [outputYYY, setOutputYYY] = useState(0);
  const [inputData, setInputData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '65vh',
  };

  const imageStyle = {
    width: 'auto',
    height: '100%',
    border: '1px solid #ccc',
    padding: '10px',
  };

  const contentStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  useEffect(() => {
    if (inputPageCount && outputPageCount) {
      const pages = [];

      for (let i = 0; i < inputPageCount; i++) {
        pages.push({
          title: `Sayfa ${i + 1}`,
          description: `Açıklama ${i + 1}`,
          image: `https://i2.wp.com/solarvis.co/wp-content/uploads/2021/04/solarvis_new_logo.png?fit=600200&ssl=1`,
          textInputVar: '',
          selectInputVar: `CCC_${i + 1}`,
        });
      }

      setInputPages(pages);
    }
  }, [inputPageCount, outputPageCount]);

  useEffect(() => {
    
    const calculateZZZ = () => {
      let ZZZ = 0;

      for (const page of inputPages) {
        ZZZ += 2 * (Number(page.textInputVar) + 10);
      }

      return ZZZ;
    };

    const calculateYYY = (ZZZ) => {
      let YYY = 0;

      for (const page of inputPages) {
        YYY += 3 * Number(page.selectInputVar);
      }

      YYY += ZZZ;
      return YYY;
    };

    const ZZZ = calculateZZZ();
    const YYY = calculateYYY(ZZZ);

    setOutputZZZ(ZZZ);
    setOutputYYY(YYY);
  }, [inputPages]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    if (currentPage === inputPages.length) {
      setIsFinished(true);
      setIsEditing(false);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
      setIsEditing(false); 
    }
  };

  const handleEdit = () => {
    setIsFinished(false);
    setIsEditing(true);
  };

  const handleBack = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      navigate('/admins');
    }
  };

  const handleTextInputChange = (e) => {
    const updatedInputData = { ...inputData };
    updatedInputData[currentPage] = e.target.value;
    setInputData(updatedInputData);
  };

  if (inputPages.length === 0) {
    return <div>Loading...</div>;
  }

  const currentPageData = inputPages[currentPage - 1];

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img src={currentPageData.image} alt={`Image for ${currentPageData.title}`} />
      </div>
      <div style={contentStyle}>
        <h1>Lead Generation Page</h1>
        {!isFinished && !isEditing && <h2>{currentPageData.title}</h2>}
        {!isFinished && !isEditing && <p>{currentPageData.description}</p>}
        {isFinished ? (
          <div>
 <h2>Output</h2>
  {Object.keys(inputData).map((page) => (
    <p key={page}>Output {page}: {inputData[page]}</p>
  ))}
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Back to Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleBack}>
              Back to Admin Configuration
            </Button>
          </div>
        ) : (
          <div>
            <TextField
              label="Text Input"
              value={inputData[currentPage] || ''}
              onChange={handleTextInputChange}
              style={{ width: '100%' }}
            />
            <div>
              {currentPage > 1 && (
                <Button variant="contained" color="primary" onClick={handlePrevPage}>
                  Back
                </Button>
              )}
              <Button variant="contained" color="primary" onClick={handleNextPage}>
                {currentPage === inputPages.length ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
        {!isEditing && !isFinished && (
          <Button variant="contained" color="secondary" onClick={handleBack}>
            Back to Admin Configuration
          </Button>
        )}
      </div>
    </div>
  );
}

export default LeadGenerationPage;
