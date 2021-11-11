import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import React from 'react'
import { useLocalContex } from '../../context/context'
import "./style.css";
import { useState } from 'react'
import Form from "./Form"

export const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContex();
  const [check, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    < div >
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth={showForm ? "lg" : "xs"}
        className="form__dialog"
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Lee las reglas antes de continuar
            </div>
            <DialogContent className="class__content">
              <p classname="class__text">
                <p>Al crear una sala estas totalmente comprometido
                  a administarla desde sus inicios de la clase hasta
                  el fin de la misma. Así como tambien establecer un orden
                  entre los diversos estudiantes pertenecientes al cursor
                  para el correcto desarrollo de la clase
                </p>
              </p>
              <div className="class__checkboxWrapper">
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  He leido y comprendido el texto anterior, y me comprometo
                  a seguir las reglas establecidas
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Cerrar
              </Button>

              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setShowForm(true)}
              >
                Continuar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div >
  );
};

export default CreateClass;
