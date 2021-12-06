import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";
import { useStyles } from './style'
import Theme from "../../assets/Themes"
const Announcment = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);

  //const classes = useStyles();
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
            <img className="amt__img" src={item.imageUrl} alt={item.text} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcment;