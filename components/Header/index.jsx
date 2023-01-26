import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from "next/image";
import { Typography, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
  },
  menuButton: {
    color: '#222B35',
  },
  title: {
    color: "#000000",
  },
  menuConainer:{
    display: 'flex',
    width: '100%',
    minHeight: '73px'
  },
  menuSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%'
  },
  logoSection:{
    display: 'flex',
    alignSelf: 'center',
  }
}));


export const Header = () => {
    const classes = useStyles();
    
    return (
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Box className={classes.menuConainer}>
                <Box className={classes.menuSection}>
                  <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title}>
                    Menu
                  </Typography>
                </Box>
                <Box className={classes.logoSection}>
                  <Image
                      src="/Logo.svg"
                      alt="Logo"
                      width={170}
                      height={46}
                      priority
                  />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
      );
}