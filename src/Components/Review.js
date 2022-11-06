import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review(props) {
  var totalPrice = 0;
  var addTotalPrice = (newItemPrice) => {
    totalPrice += newItemPrice
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.selectedData.map((product) => (
          <ListItem key={product.data.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`x${product.count} ${product.data.name}`} secondary={product.data.type} />
            {addTotalPrice(product.data.price.no_bundle ? product.data.price.no_bundle * product.count : product.data.price.with_bundle[product.selectedPrice] * product.count)}
            <Typography variant="body2">{`${product.data.defaultCurrency} ${product.data.price.no_bundle ? product.data.price.no_bundle * product.count : product.data.price.with_bundle[product.selectedPrice] * product.count}`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${props.handler.addressInfo.firstName} ${props.handler.addressInfo.lastName}`}</Typography>
          <Typography gutterBottom>{`${props.handler.addressInfo.address1}, ${props.handler.addressInfo.address2}, ${props.handler.addressInfo.city}, ${props.handler.addressInfo.state}, ${props.handler.addressInfo.zip}, ${props.handler.addressInfo.country}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Visa</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.handler.paymentInfo.cardName}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.handler.paymentInfo.cardNumber}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry Date</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.handler.paymentInfo.expDate}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}