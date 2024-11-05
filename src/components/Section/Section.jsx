import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chip, Button, Typography, Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './Section.module.css';
import Card from '../Card/Card';

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(8);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
    setVisibleCards(showAll ? 8 : albums.length);
    setCurrentStartIndex(0); // Reset to the start when toggling show all
  };

  const handleLeftArrowClick = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - visibleCards);
    }
  };

  const handleRightArrowClick = () => {
    if (currentStartIndex + visibleCards < albums.length) {
      setCurrentStartIndex(currentStartIndex + visibleCards);
    }
  };

  return (
    <div className="section">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">Top Albums</Typography>
        <Button variant="outlined" onClick={handleShowAll}>
          {showAll ? 'Collapse' : 'Show All'}
        </Button>
      </Box>
      {!showAll && (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <ArrowBack 
            onClick={handleLeftArrowClick} 
            style={{ cursor: 'pointer', visibility: currentStartIndex === 0 ? 'hidden' : 'visible' }} 
          />
          <ArrowForward 
            onClick={handleRightArrowClick} 
            style={{ cursor: 'pointer', visibility: currentStartIndex + visibleCards >= albums.length ? 'hidden' : 'visible' }} 
          />
        </Box>
      )}
      <Box 
        display={showAll ? 'grid' : 'flex'} 
        flexWrap="wrap" 
        sx={{ gridTemplateColumns: showAll ? 'repeat(3, 1fr)' : `repeat(${visibleCards}, 1fr)` }} 
        gap={2}
      >
        {albums.slice(currentStartIndex, currentStartIndex + visibleCards).map(album => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            followCount={album.follow_count}
          />
        ))}
      </Box>
    </div>
  );
};

export default Section;
