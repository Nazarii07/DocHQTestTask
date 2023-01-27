import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button} from '@material-ui/core';
import Image from "next/image";

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
    marginBottom: props => props.isPerTimeframe ? '40px' : '90px'
    
  },
  perTimeframe:{
    marginBottom: '24px'
  },
  optionBox:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '14px'
  },
  optionTitle:{
    marginLeft: '11px'
  },
  customButton:{
    maxWidth: '165px',
    height: '45px',
    border: '1px solid transparent',
    borderRadius: '25px 25px 0 25px',
    color: props => props.isMostPopular ? '#fff' : '#222B35',
    backgroundColor: props => props.isMostPopular ? '#FF005C' : '#fff',
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