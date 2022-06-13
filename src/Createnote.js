// import React, { useState } from "react";

// const Createnote = (props) => {
//   const [note, setnote] = useState({
//     title: "",
//     content: "",
//   });

//   const inputEvent = (event) => {
//     // const value = event.target.value;
//     // const name = event.target.name;
//     const { name, value } = event.target;

//     setnote((prevalue) => {
//       return {
//         ...prevalue,
//         [name]: value,
//       };
//     });
//   };

//   const addevent = () => {
//     props.passnote(note);
//     setnote({
//       title: "",
//       content: "",
//     });
//   };

//   const [expand, setexpand] = useState(false);
//   const expandit = () => {
//     setexpand(true);
//   };
//   const shrink = () => {
//     setexpand(false);
//   };
//   console.log(note);

//   return (
//     <>
//       <div className="main-div" onDoubleClick={shrink}>
//         <form>
//           {expand ? (
//             <input
//               type="text"
//               name="title"
//               placeholder="title"
//               value={note.title}
//               onChange={inputEvent}
//             />
//           ) : null}
//           <textarea
//             rows=""
//             columns=""
//             name="content"
//             placeholder="write your note"
//             value={note.content}
//             onChange={inputEvent}
//             onClick={expandit}
//           />
//         </form>
//         {expand ? (
//           <button className="btn" onClick={addevent}>
//             +
//           </button>
//         ) : null}
//       </div>
//     </>
//   );
// };
// export default Createnote;

import React, { useState } from "react";
const Createnote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const typeEvent = (event) => {
    const { name, value } = event.target;
    setnote((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  };

  const addEvent = () => {
    props.passnote(note);
    setnote({ title: "", content: "" });
  };

  return (
    <>
      <div className="main-div">
        <form>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={note.title}
            onChange={typeEvent}
          />
          <textarea
            rows=""
            columns=""
            placeholder="write your note"
            name="content"
            value={note.content}
            onChange={typeEvent}
          ></textarea>
        </form>
        <button className="btn" onClick={addEvent}>
          +
        </button>
      </div>
    </>
  );
};
export default Createnote;
