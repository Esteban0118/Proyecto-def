import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer'
import '../pages/Walkers.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { green, purple } from '@material-ui/core/colors';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function Walkers(){

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <>
        <div>
        
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                L
            </Avatar>
            }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ramiro López"
        subheader="September 14, 1999"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/perfil2.jpg"
        alt="Perfil2"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
             Hola Soy Ramiro y me gustan mucho los animales.
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Caracteristicas:</Typography>
          <Typography paragraph>
            Buenas habilidades interpersonales para tratar con los clientes; se recomienda un trato profesional, pero a la vez cercano.
            Responsabilidad y seriedad.
            Tiempo disponible para poder adquirir compromisos con los perros y sus dueños
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    
    </div>
    <div>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title="Esteban Bolaños"
        subheader="Enero 18, 1994"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/perfil3.jpg"
        alt="Perfil2"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Si quieres que tu perro se divierta , yo soy el indicado.
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Caracteristicas:</Typography>
          <Typography paragraph>
          Buenas habilidades interpersonales para tratar con los clientes; se recomienda un trato profesional, pero a la vez cercano.
        Responsabilidad y seriedad.
        Tiempo disponible para poder adquirir compromisos con los perros y sus dueños
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sara Montiel"
        subheader="December 25, 2005"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/perfil4.jpg"
        alt="Perfil2"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        La alegria y la diversion con mis cualidades 
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Caracteristicas:</Typography>
          <Typography paragraph>
          Buenas habilidades interpersonales para tratar con los clientes; se recomienda un trato profesional, pero a la vez cercano.
          Responsabilidad y seriedad.
          Tiempo disponible para poder adquirir compromisos con los perros y sus dueños
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
        
    </div>

    <Footer/>
        
    
    </div>

    
    
        </>
    )
}

export default Walkers;
