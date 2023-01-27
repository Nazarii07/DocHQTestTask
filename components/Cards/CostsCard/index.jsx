import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button} from '@material-ui/core';
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  cardContainer:{
    position: 'relative',
    '@media (max-width: 976px)': {
      marginBottom: '30px'
    }
  },
  mostPopulare:{
    position: 'absolute',
    top: '-38px',
    right: '0px',
    border: '1px solid transparent',
    borderRadius: '50px 100px 0 50px',
    backgroundColor: '#222B35',
    color: '#5BFAC1',
    width: '325px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 976px)': {
      width: '494px',
      transform: 'rotate(90deg)',
      top: '228px',
      right: '-228px',
      borderRadius: '0px 30px 0px 0px',
    }
  },
  mostPopulareTitle:{
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'uppercase',
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
    borderRadius: '30px 0 30px 0',
    '@media (max-width: 976px)': {
      width: '400px',
    },
    '@media (max-width: 475px)': {
      width: '290px',
    }

  },
  title:{
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
  },
  price:{
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '73px',
    marginBottom: props => props.isPerTimeframe ? '40px' : '90px'
    
  },
  perTimeframe:{
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '26px',
    marginBottom: '24px'
  },
  optionBox:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '14px'
  },
  optionTitle:{
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '13px',
    marginLeft: '11px'
  },
  customButton:{
    maxWidth: '165px',
    height: '45px',
    border: '1px solid transparent',
    borderRadius: '25px 25px 0 25px',
    color: props => props.isMostPopular ? '#fff' : '#222B35',
    backgroundColor: props => props.isMostPopular ? '#FF005C' : '#fff',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
    marginTop: '22px'
  }
}));


export const CostCard = ({
  title,
  isPerTimeframe,
  price,
  isMostPopular,
  programOptions,
}) => {
    const classes = useStyles({isMostPopular, isPerTimeframe});
    
    return (
      <Box className={classes.cardContainer}>
        {isMostPopular && 
          <Box className={classes.mostPopulare}>
            <Typography className={classes.mostPopulareTitle}>
              Most popular
            </Typography>
          </Box>
        }
        <Box className={classes.cardBox}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.price}>
            £{price}
          </Typography>
          {isPerTimeframe &&
            <Typography className={classes.perTimeframe}>
              Per timeframe
            </Typography>
          }
         <Box>
            {programOptions.map((item, index) => {
              return(
                <Box key={index} className={classes.optionBox}>
                  {isMostPopular ?
                   <Image
                    src="/subtractPopular.png"
                    alt="subtractPopular"
                    width={20}
                    height={20}
                    priority
                  /> : 
                  <Image
                    src="/subtract.png"
                    alt="subtract"
                    width={20}
                    height={20}
                    priority
                  />
                  }
                  <Typography className={classes.optionTitle}>
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
            Lorem
        </Button>
        </Box>
      </Box>
      
      );
}