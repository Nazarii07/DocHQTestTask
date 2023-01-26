import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';
import {CostCard} from '../../Cards/CostsCard';


const useStyles = makeStyles((theme) => ({
  sectionContainer:{
    paddingTop: '145px',
    paddingBottom: '439px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardBox:{
    width: '1035px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const costData = [
  {title: 'Plan 1', isPerTimeframe: false, price: 30, isMostPopular: false, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
  {title: 'Plan 2', isPerTimeframe: true, price: 45, isMostPopular: true, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
  {title: 'Plan 3', isPerTimeframe: true, price: 60, isMostPopular: false, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
]


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