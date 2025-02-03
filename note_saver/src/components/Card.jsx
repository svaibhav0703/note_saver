import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deletePaste } from "../redux/Pasteslice";
import { toast } from "react-hot-toast";
import ShareButtons from "../components/ShareButtons";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  const dispatch = useDispatch();

  function handledelete(pasteId) {
    dispatch(deletePaste(pasteId));
  }

  let date = new Date(props.date);
  return (
    <div className=" w-105 flex flex-row rounded-xl bg-white outline-5 outline-white/5 dark:bg-gray-950/50 text-gray-400">
      <div className="flex flex-col gap-5 w-100 mt-2 ml-3 mb-3">
        <div className="text-gray-400 pl-2">
          <p className="text-xl">{props.title}</p>
          <p className="text-sm">{date.toLocaleDateString("en-GB")}</p>
        </div>

        <div className="text-gray-400 outline-5 outline-white/5 bg-gray-950 h-40 rounded-xl p-2">
          {props.content.slice(0, 200) + "...."}
        </div>
      </div>
      <div className="flex flex-col text-gray-500 gap-2 ml-1">
        <div className="text-center w-10 h-10 border-gray-500 p-1  hover:text-sky-500 rounded-xl transition-all duration-500">
          <NavLink to={`${props.id}`}>
            <FontAwesomeIcon icon={faEye} />
          </NavLink>
        </div>
        <div
          onClick={() => handledelete(props.id)}
          className="text-center w-10 h-10 border-gray-500 p-1  hover:text-sky-500 rounded-xl transition-all duration-500"
        >
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="text-center w-10 h-10 border-gray-500 p-1  hover:text-sky-500 rounded-xl transition-all duration-500">
          <button
            onClick={() => {
              navigator.clipboard.writeText(props.content);
              toast.success("copied succesfully", {
                style: { backgroundColor: "#0ea5e9" },
              });
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <div className="text-center w-10 h-10 border-gray-500 p-1  hover:text-sky-500 rounded-xl transition-all duration-500">
          <NavLink to={`/?pasteId=${props.id}`}>
            <FontAwesomeIcon icon={faPenSquare} />
          </NavLink>
        </div>
        <div className="text-center w-10 h-10 border-gray-500 p-1  hover:text-sky-500 rounded-xl transition-all duration-500">
          <button>
            <ShareButtons id={props.id} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
