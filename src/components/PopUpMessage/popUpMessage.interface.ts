import React from "react";

interface PopUpMessageProps {
  message: string;
  link?: string;
  color?: string;
  linkMessage?: string;
  setShowPopUpMessage:React.Dispatch<React.SetStateAction<boolean>>;
}
export default PopUpMessageProps;
