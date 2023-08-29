import React,{Fragment} from 'react' ; // import React from 'react' هنا عمل اوبجكت 

/*const App = () => {
  return (
   <Fragment>
   <p style = {{color: "Green",marginTop: "100px" }} > Hello world </p>
   </Fragment>
  );
};
*/
const App = () => {
    const Pstyles = {color: "Green",marginTop: "100px" };
    return (
     <Fragment>
     <p style = {Pstyles} > Hello world </p>
     </Fragment>
    );
  };

export default App