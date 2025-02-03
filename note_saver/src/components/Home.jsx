import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addPaste } from "../redux/Pasteslice";
import { updatePaste } from "../redux/Pasteslice";
const Home = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [searchparams, setsearchparams] = useSearchParams();
  const PasteId = searchparams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    // created a object pastes to pass as payload to addPaste or updatePaste
    const paste = {
      title: title,
      content: content,
      _id: PasteId || Date.now().toString(36),
      CreatedAt: new Date().toISOString(),
    };

    if (PasteId) {
      dispatch(updatePaste(paste));
    } else {
      dispatch(addPaste(paste));
    }

    settitle("");
    setcontent("");
    setsearchparams({});
  }
  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (PasteId) {
      const ind = allpastes.findIndex((item) => item._id === PasteId);
      settitle(allpastes[ind].title);
      setcontent(allpastes[ind].content);
    }
  }, [PasteId]);

  return (
    <div className="flex flex-col justify-center items-center gap-1 ">
      <div id="heading" className="text-center">
        <input
          className="w-150 p-3 rounded-lg bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400"
          type="text"
          placeholder="title of the paste"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <button
          className="border-2 border-sky-500 text-sky-500 hover:border-sky-600 hover:text-sky-600 rounded-xl w-30 h-10 ml-3.5 hover:cursor-pointer transition-all duration-500 "
          onClick={createPaste}
        >
          {PasteId ? "update Paste" : "create paste"}
        </button>
        <div id="content"></div>
      </div>

      <div id="text-area" className=" p-8 ">
        <textarea
          className="p-5 rounded-lg bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          cols=" 70"
          rows="20"
          placeholder="start writing"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
