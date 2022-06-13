import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Blogsdata } from "./Data";
// const Blog = () => {
//   const { title } = useParams();
//   const [bodydata, setbodydata] = useState("");
//   useEffect(() => {
//     const blogsdata = Blogsdata.filter((blog) => blog.title == title);
//     setbodydata(blogsdata[0].body);
//   }, []);
//   return (
//     <>
//       <div>
//         <h1>{title}</h1>
//         <p>{bodydata}</p>
//       </div>
//     </>
//   );
// };

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  console.log(location);
  // const [bodydata, setbodydata] = useState("");
  // useEffect(() => {
  //   const blogsdata = Blogsdata.filter((blog) => blog.title == title);
  //   setbodydata(blogsdata[0].body);
  // }, []);
  return (
    <>
      <h1>{title}</h1>
      <p>{location.state.body}</p>
    </>
  );
};
export default Blog;
