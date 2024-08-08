
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: 'auto',
    marginTop: theme.spacing(5),
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  media: {
    width: 300,
    height: 200
  },
  content: {
    maxWidth: 300,
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function Home() { 
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {/* Vehicle Range Section */}
      <Card className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image="/asset/image/v-range.jpg"
          title="Our Range of Rental Vehicles"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Our Range of Rental Vehicles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            From compact cars to spacious SUVs and vans, we offer a large range of reliable vehicles to suit your needs.
          </Typography>
          <Link to="/vehicles">
            <button>View all our Rental Vehicles</button>
          </Link>
        </CardContent>
      </Card>

      {/* Locations Section */}
      <Card className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image="/asset/image/v-range.jpg"
          title="Canada Car Rental Locations"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Canada Car Rental Locations
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Car Rental is an internationally recognized brand with a great choice of cars and locations across Canada.
          </Typography>
          <Link to="/locations">
            <button>See Our Canada Car Rental Locations</button>
          </Link>
        </CardContent>
      </Card>

      {/* Deals Section */}
      <Card className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image="/asset/image/v-range.jpg"
          title="Car Rental Deals"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Car Rental Deals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Find out about our latest offers to drive away with a great car rental deal from any of our global locations.
          </Typography>
          <Link to="/deals">
            <button>Browse Car Rental Deals & Promotions</button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

