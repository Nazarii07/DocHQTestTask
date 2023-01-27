import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';
import { PlanCard } from '../../Cards/PlanCard';
import bgFirst from '../../../public/workOne.png';
import bgSecond from '../../../public/workTwo.png';
import bgTheard from '../../../public/workThree.png';

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
    color: "#fff",
    marginBottom: "84px",
    textAlign: 'center',
    maxWidth: '715px',
    fontSize: '18px'
  },
  subTitle:{
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

const cardData = [
  {id: 1, title: "Plan 1", subtitle: "View work out >", bgImg: bgFirst, shadowColor: "#6AFBC6"},
  {id: 2, title: "Plan 2", subtitle: "View work out >", bgImg: bgSecond, shadowColor: "#FFDE33"},
  {id: 3, title: "Plan 3", subtitle: "View work out >", bgImg: bgTheard,  shadowColor: "#16D2EC"},
]


export const PlanSection = () => {
    const classes = useStyles();
    
    return (
      <Box className={classes.sectionContainer}>
        <Box>
          <Typography className={classes.title}>
            Complete our simple fitness assesment and recieve your personalised workout plans to 
            get you one step closer to achieving your fitness goals.
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.subTitle}>
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