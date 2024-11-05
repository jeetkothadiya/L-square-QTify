import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, IconButton, Box } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Card from '../Card/Card'; // Adjust the path as necessary

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5">{title}</Typography>
        <Button onClick={toggleShowAll}>{showAll ? 'Collapse' : 'Show All'}</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
        {showAll && (
          <>
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </>
        )}
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
            <Card 
              title={album.title}
              image={album.image} 
              followCount={album.followCount} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
