import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@material-ui/core';
import React from 'react'
import { useStyles } from './style'
import { Add, Apps } from "@material-ui/icons"
import { CreateClass, JoinClass } from '..';
import { useLocalContext } from '../../context/context';

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { 
    setCreateClassDialog,
    setJoinClassDialog,
    loggedInUser,logout
  } = useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };

  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <Typography variant="h6" className={classes.title}>
              Salón de Clase
            </Typography>
          </div>

          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Apps className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Entrar a Clase</MenuItem>
              <MenuItem onClick={handleCreate}>Crear Clase</MenuItem>
            </Menu>
            <div>
              <Avatar 
                onClick={() => logout()} 
                src={loggedInUser?.photoURL} 
                className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div >
  )
}

export default Header
