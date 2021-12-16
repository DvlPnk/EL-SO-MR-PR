import { Avatar, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core/index";
import React, { useState } from "react";
import db, { storage } from "../../lib/firebase";
import "./style.css";
import { useStyles } from './style'
import firebase from "firebase";
import { useLocalContext } from "../../context/context";
import { Announcment } from "..";
import Theme from "../../assets/Themes"
const Main = ({ classData }) => {
  const { loggedInMail } = useLocalContext();

  const classes = useStyles();
  const colors = Theme(localStorage.getItem("palette"));

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
 
  const handleUpload = () => {
      const uploadImage = storage.ref(`images/${image.name}`).put(image);

      uploadImage.on("state_changed", () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("announcments")
              .doc("classes")
              .collection(classData.id)
              .add({
                timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                imageUrl: url,
                text: inputValue,
                sender: loggedInMail,
              });
          });
      });
  };

  return (
    <div className="main">
      <div className="main__wrapper">
        <div style={{ backgroundColor: colors.form_background_color_2 }} className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 style={{ color: colors.font_color }} className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div style={{ color: colors.font_color }} className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em style={{ color: colors.font_color }} className="main__code">Codigo de clase:</em>
                <div style={{ color: colors.font_color }} className="main__id">{classData.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div style={{ color: colors.font_color, backgroundColor: colors.form_background_color }} className="main__status">
            <p>Proximas entregas</p>
            <p className="main__subText">No tienes trabajos pendientes</p>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div style={{ backgroundColor: colors.form_background_color }} className="main__ancContent">
                {showInput ? (
                  <div className="main__form" >
                    <TextField
                      className={classes.textfield}
                      InputProps={{ className: classes.input }}
                      id="filled-multiline-flexible"
                      multiline
                      label="Realiza un anuncio a la clase"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="main__buttons">
                      <input
                        style={{ color: colors.font_color }}
                        onChange={handleChange}
                        variant="outlined"
                        color="primary"
                        type="file"
                      />

                      <div >
                        <Button style={{ color: colors.font_color }} onClick={() => setShowInput(false)}>
                          Cancelar
                        </Button>

                        <Button
                          onClick={handleUpload}
                          color="primary"
                          variant="contained"
                        >
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main__wrapper100"
                    onClick={() => setShowInput(true)}
                  >
                    <Avatar />
                    <div style={{ color: colors.font_color }}> Realiza un anuncio a la clase</div>
                  </div>
                )}
              </div>
            </div>
            <Announcment classData={classData} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Main;
