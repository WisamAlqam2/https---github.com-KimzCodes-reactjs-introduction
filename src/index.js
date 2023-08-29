import React from "react"; //هذه حتكون ميثد احط فيها اكواد رياكت ، مش بيور ميثد 
import ReactDom from "react-dom";
import App from './components/App'

/*ReactDom.render(
  React.createElement("div",null,React.createElement("h1",{style :{color : "red "}},"Hello World")),  
  document.getElementById("root")
  );
*/

//XML 
ReactDom.render(
<App/>,document.getElementById("root") 
);




