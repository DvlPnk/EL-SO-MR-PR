import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core/index";
import React, { useEffect, useState } from "react";
import filee from "../../assets/file.png";
import db from "../../lib/firebase";
import "./style.css";
import Theme from "../../assets/Themes"
const Announcment = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);

  const colors = Theme(localStorage.getItem("palette"));

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(announcment);
  return (
    <div>
      {announcment.map((item) => (
        <div style={{ backgroundColor: colors.form_background_color }} className="amt">
          <div style={{ color: colors.font_color }} className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p style={{ color: colors.font_color }} className="amt__txt">{item.text}</p>
            <img className="amt__img" src={filee} alt={item.text} />
            <div>
            <Button
              href={item.imageUrl}
              color="primary"
              variant="contained"
            >
              Descargar
            </Button>
            </div>  
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcment;

//<p style={{ color: colors.font_color }} className="amt__txt">{item.imageUrl}</p>