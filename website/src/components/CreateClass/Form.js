import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import { Button, DialogActions, TextField } from "@mui/material";
import { v4 as uuidV4 } from 'uuid';
import db from "../../lib/firebase";

const Form = () => {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  const { loggedInMail, setCreateClassDialog } = useLocalContext();

  const addClass = (e) => {
    e.preventDefault();
    const id = uuidV4();

    db.collection("CreatedClasses")
      .doc(loggedInMail)
      .collection("classes")
      .doc(id)
      .set({
        owner: loggedInMail,
        className: className,
        section: Section,
        room: Room,
        id: id,
      })
      .then(() => {
        setCreateClassDialog(false);
      });
  }
  return (
    <div className="form">
      <p className="class__title">Crear Clase</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Nombre del curso(requerido)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Sección"
          className="form__input"
          variant="filled"
          value={Section}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Código del curso"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Sala"
          className="form__input"
          variant="filled"
          value={Room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <DialogActions>
        <Button onClick={addClass} color="primary">
          Crear
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
