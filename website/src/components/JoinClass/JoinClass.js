//import { Button, Dialog, Slide } from '@material-ui/core';
import { Close } from '@mui/icons-material';
import { Button, Dialog, Slide } from '@mui/material';
import React, { useState } from 'react'
import { useLocalContext } from '../../context/context'
import { Avatar, TextField } from "@material-ui/core"
import "./style.css";
import db from "../../lib/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JoinClass = () => {
  const { 
    joinClassDialog, 
    setJoinClassDialog, 
    loggedInUser, 
  } = useLocalContext();

  const [classCode, setClassCode] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState();
  const [joinedData, setJoinedData] = useState();
  const [classExists, setClassExists] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("CreatedClasses")
      .doc(email)
      .collection("classes")
      .doc(classCode)
      .get()
      .then((doc) => {
        if (doc.exists && doc.owner !== loggedInUser.email) {
          setClassExists(true);
          setJoinedData(doc.data());
          setError(false);
        } else {
          setError(true);
          setClassExists(false);
          return;
        }
      });

    if (classExists === true) {
      db.collection("JoinedClasses")
        .doc(loggedInUser.email)
        .collection("classes")
        .doc(classCode)
        .set({
          joinedData,
        })
        .then(() => {
          setJoinClassDialog(false);
        });
    }
  };

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
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">
              Estas actualmente conectado como {loggedInUser?.email}
            </p>
            <div className="joinClass_loginInfo">
              <div className="joinClass_classLeft">
                <Avatar src={loggedInUser?.photoURL}/>
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">
                    {loggedInUser?.displayName}
                  </div>
                  <div className="joinClass__loginEmail">
                    {loggedInUser?.email}
                  </div>
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
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                error={error}
                helperText={error && "No se encontro la clase"}
              />
              <TextField
                id="outlined-basic"
                label="Email del propietario"
                variant="outlined"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
};

export default JoinClass;

