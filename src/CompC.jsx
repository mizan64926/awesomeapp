import React, { useContext } from "react";
import { FirstName } from "./App";
import { LastName } from "./App";
const CompC = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        This is {fname} {lname}
      </h1>
    </>
  );
  // return (
  //   <>

  //     <FirstName.Consumer>
  //       {(fname) => {
  //         return (
  //           <>
  //             <LastName.Consumer>{(lname) => {}}</LastName.Consumer>
  //           </>
  //         );
  //       }}
  //     </FirstName.Consumer>
  //   </>
  // );
};
export default CompC;
