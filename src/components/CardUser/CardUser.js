import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./CardUser.css";
import { Link } from 'react-router-dom';

const CardUser = ({char}) => {
    return (
      <Card className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className='media'
            component="img"
            
            image={char.image}
            alt="green iguana"
          />
          <CardContent className='content'>
            <Typography className='letra' gutterBottom variant="h5" component="div">
              {char.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {char.species} | {char.gender} 
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
       <Link to="/shop" ><Button className='boton' size="big" color="primary"  >
          Ver
        </Button> </Link>
      </CardActions>
    </Card>
  );
}
export default CardUser;
