import React, { useState } from "react";
import { useLocalContex } from "../../context/context";
import { Button, DialogActions, TextField } from "@mui/material";

const Form = () => {
  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  const { setCreateClassDialog } = useLocalContex();
  return (
    <div className="form">
      <p className="class__title">Crear Clase</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Codigo de clase (requerido)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Nombre del curso"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Sección"
          className="form__input"
          variant="filled"
          value={Section}
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
        <Button /*onClick={addClass}*/ color="primary">
          Crear
        </Button>
      </DialogActions>
    </div>
  );
};

export default Form;
