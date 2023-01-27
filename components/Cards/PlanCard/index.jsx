import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  planContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '355px',
    height: '203px',
    paddingBottom: "25px",
    paddingTop: "25px",
    borderRadius: '0 20px 0 20px',
    boxShadow: props => `10px 10px 1px ${props.shadowColor}`,
    '&::before': {
      content: '""',
      border: '1px solid transparent',
      borderRadius: '0 20px 0 20px',
      backgroundImage:  props => `url(${props.bgImg.src})`,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.35,
    }
  },
  titleText:{
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '26px',
    textTransform: 'uppercase',
    color: "#fff",
    position: 'relative',
    marginBottom: '32px'
  },
  subTitleText:{
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '32px',
    textTransform: 'uppercase',
    color: "#fff",
    position: 'relative',
  },
}));


export const PlanCard = ({title, subtitle, bgImg, shadowColor}) => {
    const classes = useStyles({bgImg, shadowColor});
    
    return (
      <Box className={classes.planContainer}>
        <Box>
          <Typography className={classes.titleText} >
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