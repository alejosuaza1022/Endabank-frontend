import React from "react";

interface PopUpMessageProps {
  message: string;
  link?: string;
  isColorError: boolean;
  linkMessage?: string;
  setShowPopUpMessage:React.Dispatch<React.SetStateAction<boolean>>;
}
export default PopUpMessageProps;
