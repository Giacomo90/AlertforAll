"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type1 = type1;
var _styles = require("../styles/styles");
// Alert type 1

function type1({
  TitleMsg,
  Button_confirm,
  Button_cancel
}) {
  const Container = document.createElement("div");
  Container.style.cssText = (0, _styles.style)().ContainerStyle;
  const textTitle = document.createElement("h2");
  textTitle.textContent = TitleMsg;
  textTitle.style = (0, _styles.style)().TitleToast;
  const buttonExit = document.createElement('button');
  buttonExit.textContent = Button_cancel;
  buttonExit.style = (0, _styles.style)().buttonExitStyle;
  const buttonConfirm = document.createElement('button');
  buttonConfirm.textContent = Button_confirm;
  buttonConfirm.style = (0, _styles.style)().buttonConfirmStyle;
  Container.appendChild(textTitle);
  Container.appendChild(buttonConfirm);
  Container.appendChild(buttonExit);
  document.body.appendChild(Container);
}
;