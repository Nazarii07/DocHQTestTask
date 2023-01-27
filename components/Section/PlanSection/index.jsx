import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';
import { PlanCard } from '../../Cards/PlanCard';
import { cardData } from '@/constans';

const useStyles = makeStyles((theme) => ({
  sectionContainer:{
    minHeight: "628px",
    backgroundColor: "#222B35",
    paddingTop: '47px',
    paddingRight: '120px',
    paddingLeft: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title:{
    fontFamily: 'Open_Sans',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '30px',
    color: "#fff",
    marginBottom: "44px",
    textAlign: 'center',
    maxWidth: '715px',
    fontSize: '18px'
  },
  subTitle:{
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '32px',
    color: "#fff",
    marginBottom: "107px"
  },
  cardContainer:{
    width: "100%",
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
}));

export const PlanSection = () => {
    const classes = useStyles();
    
    return (
      <Box className={classes.sectionContainer}>
        <Box>
          <Typography className={classes.title} variant="body1">
            Complete our simple fitness assesment and recieve your personalised workout plans to 
            get you one step closer to achieving your fitness goals.
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.subTitle} variant="body2">
            Take our quick & easy fitness quiz in just 2 mins!
          </Typography>
        </Box>
        <Box className={classes.cardContainer}>
          {cardData.map((item, index)=>{
            return(
              <PlanCard 
                key={index} 
                title={item.title} 
                subtitle={item.subtitle} 
                bgImg={item.bgImg} 
                shadowColor={item.shadowColor}
              />
            )
          })}
          
        </Box>
      </Box>
      );
}