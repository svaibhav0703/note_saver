import React from "react";
import { TelegramShareButton, TelegramIcon } from "react-share";
import { useSelector } from "react-redux";

const ShareButtons = (props) => {
  const Pastes = useSelector((state) => state.paste.pastes);
  // the object containng all pastes
  const ind = Pastes.findIndex((item) => item._id === props.id);
  const shareUrl = " ";
  const title = ind >= 0 ? Pastes[ind].content : "";
  return (
    <div>
      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={30} round />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
