import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1200,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  details: {
    flex: 1,
  },
  media: {
    width: 250, // adjust based on your design needs
    height: 150,
    marginLeft: theme.spacing(2),
  },
  form: {
    border: '1px solid #ccc',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  }
}));

export default function VehicleTypes() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('Canada');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4">All Rental Vehicles in Canada</Typography>
        <FormControl variant="outlined" size="small">
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            onChange={handleChange}
            label="Country"
          >
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Mexico">Mexico</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Card className={classes.card}>
        <div className={classes.details}>
          <Typography variant="h5">Cars</Typography>
          <Typography variant="body2" color="textSecondary">4 - 5 People | 2 - 4 Bags</Typography>
          <Typography variant="body1">Choose from a variety of rental cars in this category including economy, full-size or luxury sedans. Whether you are looking for fuel-efficiency, space, or comfort and style you are sure to find the perfect rental car no matter where you are headed.</Typography>
          <Button variant="contained" color="primary">View All 12 Car Classes</Button>
        </div>
        <CardMedia
          className={classes.media}
          image=".\assets\images\car.jpg"
          title="Car"
        />
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <Typography variant="h5">SUVs</Typography>
          <Typography variant="body2" color="textSecondary">4 - 7 People | 2 - 5 Bags</Typography>
          <Typography variant="body1">Our SUVs offer plenty of flexibility with seating capacity, power, and luggage room. Whether you are going on a weekend family trip or exploring the countryside we are sure to have the ideal SUV for your needs.</Typography>
          <Button variant="contained" color="primary">View All 8 SUVs Classes</Button>
        </div>
        <CardMedia
          className={classes.media}
          image=".\assets\images\suv.jpg"
          title="SUV"
        />
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <Typography variant="h5">Trucks</Typography>
          <Typography variant="body2" color="textSecondary">4 - 5 People | 2 Bags</Typography>
          <Typography variant="body1">Looking to haul large items for DIY projects or going on a weekend retreat? A pickup truck has the space, power, and durability ideal for your project or trip.</Typography>
          <Button variant="contained" color="primary">View All 2 Trucks Classes</Button>
        </div>
        <CardMedia
          className={classes.media}
          image=".\assets\images\Truck.jpg"
          title="Truck"
        />
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <Typography variant="h5">Vans</Typography>
          <Typography variant="body2" color="textSecondary">4 - 5 People | 2 Bags</Typography>
          <Typography variant="body1">Need extra room for people, luggage, or cargo or both? Our minivans and passenger vans can seat up to 7 passengers respectively and are great for family vacations or accommodating large groups. Cargo vans are ideal for transporting bulky items that may not fit in your personal vehicle.</Typography>
          <Button variant="contained" color="primary">View All 2 Van Classes</Button>
        </div>
        <CardMedia
          className={classes.media}
          image=".\assets\images\Van.jpg"
          title="Van"
        />
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <Typography variant="h5">Luxury Cars</Typography>
          <Typography variant="body2" color="textSecondary">4 - 8 People | 2 - 7 Bags</Typography>
          <Typography variant="body1">Looking for an upscale driving experience? Our luxury rental cars have plenty of power, modern technology, and creature comforts, making them perfect for business travel or long trips.</Typography>
          <Button variant="contained" color="primary">View All 0 Luxury Car Classes</Button>
        </div>
        <CardMedia
          className={classes.media}
          image=".\assets\images\Luxury.jpg"
          title="Luxury Car"
        />
      </Card>


      <div className={classes.form}>
        <Typography variant="h6">Check Prices & Availability</Typography>
        <TextField
          fullWidth
          label="Pick-up & Return Location (Postal Code, City or Airport)"
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
          Check Availability
        </Button>
        <Button variant="contained" color="secondary">
          View / Modify / Cancel Reservation
        </Button>
      </div>
    </div>
  );
}
