import React from "react";
import { Mensaje } from "../styles/elements/mensajes";

const Message = ({ msg, bgColor }) => {
  return (
    <Mensaje bgColor={bgColor}>{msg}</Mensaje>
  );
};

export default Message;
