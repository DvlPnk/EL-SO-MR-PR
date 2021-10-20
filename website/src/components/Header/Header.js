import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from './style'
import { Add } from "@material-ui/icons";

const Header = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>

          <div className={classes.header__wrapper__right}>
            <Add />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
