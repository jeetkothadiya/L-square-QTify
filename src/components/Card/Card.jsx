import React from 'react';
import { Card as MuiCard, CardContent, Typography, CardMedia, Chip } from '@mui/material';

const Card = ({ title, image, followCount }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Chip label={`${followCount} Follows`} />
      </CardContent>
    </MuiCard>
  );
};

export default Card;
