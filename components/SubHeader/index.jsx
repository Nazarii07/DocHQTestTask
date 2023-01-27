import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from '@material-ui/core';
import { subHeaderData } from '@/constans';

const useStyles = makeStyles((theme) => ({
  subMenuConainer:{
    backgroundColor: "#222B35",
    height: '21px',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center',
    color: '#ffffff',
    borderBottom: "2px solid #fff",
    paddingRight:'20px'
  },
  subMenuSection: {
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "20px"
  },
  subMenuTextTitle:{
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  menuDots:{
    width: "4px",
    height: "4px",
    backgroundColor: '#FF005C',
    border: "1px solid #222B35",
    borderRadius: '50%'
  }
}));

export const SubHeader = () => {
    const classes = useStyles();
    
    return (
      <Box className={classes.subMenuConainer} >
          {subHeaderData.map((item, index)=>{
            return(
              <Box className={classes.subMenuSection} key={index}>
                <Typography className={classes.subMenuTextTitle}>{item.title}</Typography>
                {item.dots && <Box className={classes.menuDots}/>}
              </Box>
            )
          })}
       </Box>    
      );
}