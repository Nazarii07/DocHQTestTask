import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer:{
    position: 'relative'
  },
  mostPopulare:{
    position: 'absolute',
    top: '-38px',
    border: '1px solid transparent',
    borderRadius: '50px 100px 0 50px',
    backgroundColor: '#222B35',
    color: '#5BFAC1',
    width: '325px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardBox:{
    width: '325px',
    minHeight: '494px',
    backgroundColor: props => props.isMostPopular ? '#5BFAC1' : '#222B35',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '35px',
    paddingLeft: '34px',
    color: props => props.isMostPopular ? '#000' : '#fff',
    border: '1px solid transparent',
    borderRadius: '30px 0 30px 0'

  },
  title:{

  },
  price:{

  },
  perTimeframe:{

  },
  customButton:{
    maxWidth: '165px',
    height: '45px',
    border: '1px solid transparent',
    borderRadius: '25px 25px 0 25px',
    color: props => props.isMostPopular ? '#fff' : '#222B35',
    backgroundColor: props => props.isMostPopular ? '#FF005C' : '#fff',
  }
}));




export const CostCard = ({
  title,
  isPerTimeframe,
  price,
  isMostPopular,
  programOptions,
}) => {
    const classes = useStyles({isMostPopular});
    
    return (
      <Box className={classes.cardContainer}>
        {isMostPopular && 
          <Box className={classes.mostPopulare}>
            <Typography>
              Most popular
            </Typography>
          </Box>
        }
        <Box className={classes.cardBox}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.price}>
            {price}
          </Typography>
          {isPerTimeframe &&
            <Typography className={classes.perTimeframe}>
              Per timeframe
            </Typography>
          }
         <Box>
            {programOptions.map((item, index) => {
              return(
                <Box key={index} >
                  img
                  <Typography>
                    {item}
                  </Typography>
                </Box>
              )
            })}
         </Box>
         <Button 
          variant="contained"
          className={classes.customButton}
         >
            Disabled
        </Button>
        </Box>
      </Box>
      
      );
}