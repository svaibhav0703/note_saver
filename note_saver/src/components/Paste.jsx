import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Paste = () => {
  // state.(name of slice).initialstate
  const pastes = useSelector((state) => state.paste.pastes);
  const [search, setsearch] = useState("");
  const filteredData = pastes.filter((paste) =>
    //  element of paste including the search will be shown on the screen
    paste.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1 className="text-sky-500 font-bold text-4xl text-center">
        SAVED PASTES
      </h1>
      <br />
      <div className="text-center">
        <input
          className="w-150 p-3 rounded-2xl bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400"
          type="search"
          placeholder="search here"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="grid grid-cols-3 p-10 gap-y-8 ">
        {filteredData.map((paste) => {
          return (
            <Card
              // a key prop is passes to differentiate between each card
              key={paste?._id}
              id={paste._id}
              title={paste.title}
              content={paste.content}
              date={paste.CreatedAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Paste;
