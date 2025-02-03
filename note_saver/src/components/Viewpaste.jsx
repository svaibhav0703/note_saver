import React from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router";

const Viewpaste = () => {
  const { id } = useParams();
  // using destructuring
  // const params=useParams;
  // id=params.id

  const allpastes = useSelector((state) => state.paste.pastes);
  const paste = allpastes.filter((p) => p._id === id)[0];
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <div id="heading" className="text-center">
        <input
          disabled
          className="w-185  p-3 rounded-lg bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400 text-center font-bold"
          type="text"
          placeholder="enter content here"
          value={paste.title}
        />

        <div id="content"></div>
      </div>

      <div id="text-area" className="">
        <textarea
          disabled
          className="p-5 rounded-lg bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400 "
          value={paste.content}
          cols=" 70"
          rows="20"
        ></textarea>
      </div>
    </div>
  );
};

export default Viewpaste;
