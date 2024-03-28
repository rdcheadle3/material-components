
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} // Use the image prop here
          alt={title} // Use the title as alt text for accessibility
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* Use the title prop here */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description} {/* Use the description prop here */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
