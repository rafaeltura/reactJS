"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render(
/*#__PURE__*/
//primeiro elemento ou é uma tag html ou um componente react, ou seja, inicia-se a utilização de JSX
_react["default"].createElement("h1", null, "Ol\xE1 REACT!"), //segundo argumento é o 'container', ou seja, onde será renderizado
document.querySelector('#root'));