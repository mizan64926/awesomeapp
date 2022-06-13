import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { getThemeProps } from "@mui/system";

const Note = (props) => {
  const delbtn = () => {
    props.delitem(props.id);
  };
  return (
    <>
      <div className="note-div">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button onClick={delbtn}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};
export default Note;
