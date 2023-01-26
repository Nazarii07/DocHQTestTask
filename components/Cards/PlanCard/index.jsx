import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  planContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    width: '355px',
    height: '203px',
    border: '1px solid transparent',
    backgroundImage:  props => `url(${props.bgImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0 20px 0 20px',
    boxShadow: props => `10px 10px 1px ${props.shadowColor}`,
    paddingBottom: "25px",
    paddingTop: "25px",
  },
  titleText:{
    color: "#fff"
  },
  subTitleText:{
    color: "#fff"
  },
}));


export const PlanCard = ({title, subtitle, bgImg, shadowColor}) => {
    const classes = useStyles({bgImg, shadowColor});
    
    return (
      <Box className={classes.planContainer}>
        <Box />
        <Box>
          <Typography className={classes.titleText}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.subTitleText}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      );
}