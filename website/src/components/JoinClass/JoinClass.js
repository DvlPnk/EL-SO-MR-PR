//import { Button, Dialog, Slide } from '@material-ui/core';
import { Close } from '@mui/icons-material';
import { Button, Dialog, Slide } from '@mui/material';
import React from 'react'
import { useLocalContex } from '../../context/context'
import { Avatar, TextField } from "@material-ui/core"
import "./style.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JoinClass = () => {
  const { joinClassDialog, setJoinClassDialog } = useLocalContex();
  return (
    <div>
      <Dialog
        fullScreen
        open={joinClassDialog}
        onClose={() => setJoinClassDialog(false)}
        TransitionComponent={Transition}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wrapper2"
              onClick={() => setJoinClassDialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Entrar a Clase</div>
            </div>
            <Button
              className="joinClass__btn"
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">
              Estas actualmente conectado a una cuenta
            </p>
            <div className="joinClass_loginInfo">
              <div className="joinClass_classLeft">
                <Avatar />
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">Pierre</div>
                  <div className="joinClass__loginEmail">Mail</div>
                </div>
                <Button variant="outlined" color="primary">
                  Cerrar sesión
                </Button>
              </div>
            </div>
          </div>
          <div className="joinClass__form">
            <div style={{ fontSize: '1.25rem', color: "#3c4043" }} className="joinClass__formText">
              Código de Clase
            </div>
            <div style={{ color: "#3c4043", marginTop: "-5px" }} className="joinClass__formText">
              Pregúntale a tu profesor por el código de clase, luego ingrésalo aquí
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Codigo de Clase"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email del propietario"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
};

export default JoinClass;

