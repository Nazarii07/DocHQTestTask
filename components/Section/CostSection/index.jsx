import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {CostCard} from '../../Cards/CostsCard';
import { costData } from '@/constants';


const useStyles = makeStyles((theme) => ({
  sectionContainer:{
    paddingTop: '145px',
    paddingBottom: '439px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 475px)': {
      paddingTop: '60px',
      paddingBottom: '60px',
    }
  },
  cardBox:{
    width: '1035px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media (max-width: 976px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}));

export const CostSection = () => {
    const classes = useStyles();
    
    return (
      <Box className={classes.sectionContainer}>
        <Box className={classes.cardBox}>
          {costData.map((item, index) => {
            return(
              <CostCard
                key={index} 
                title={item.title}
                isPerTimeframe={item.isPerTimeframe}
                price={item.price}
                isMostPopular={item.isMostPopular}
                programOptions={item.programOptions}
              />
            )
          })}
        </Box>
      </Box>
      );
}