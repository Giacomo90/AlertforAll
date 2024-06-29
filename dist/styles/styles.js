"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = style;
function style() {
  let ContainerStyle = `
    position: fixed; 
    top: 30%; 
    left: 50%; 
    width:70%;
    transform: translateX(-50%); 
    background-color: rgb(248,248,248); 
    color: #333; 
    padding: 5px 10px; 
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
    z-index: 999; 
    transition: opacity 0.3s ease-in-out; 
    height:160px;
    font-size:14px;
    `;
  let TitleToast = `
       font-size:18;
       text-align:center;
       margin:30px;
    `;
  let buttonExitStyle = `
    height:40px;
    width:auto;
    padding:5px 10px;
    position:absolute;
    bottom:20px; right:20px;
    border:hidden;
    border-radius:16px;
    background-color:rgb(216, 96, 96);
    color:white;
    font-size:14px;
    font-weight:400;
    `;
  let buttonConfirmStyle = `
    height:40px;
    width:auto;
    padding:5px 10px;
    position:absolute;
    bottom:20px; left:20px;
    border:hidden;
    border-radius:16px;
    background-color:rgb(96, 181, 88);
    color:white;
    font-size:14px;
    font-weight:400;
    `;
  return {
    ContainerStyle,
    TitleToast,
    buttonConfirmStyle,
    buttonExitStyle
  };
}