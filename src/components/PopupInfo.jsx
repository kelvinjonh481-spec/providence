import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { BsMicrosoft } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

function PopupInfo({ value, style }) {
  return (
    // <Popup
    //   trigger={
    <Link
      to={"/microsoft"}>
      <button
        className={`py-3 font-semibold text-white flex items-center justify-center text-center rounded-lg mx-auto px-5 ${style
            ? "w-fit border-2 border-white hover:bg-blue-700 hover:border-blue-700"
            : "bg-blue-500 w-full"
          }`}
      >
        {value}
      </button>
    </Link >
    //   }
    //   position="center"
    //   closeOnDocumentClick
    // >
    //   {(close) => (
    //     <div className="min-w-[300px] bg-slate-200 px-10 pt-10 rounded-xl pb-20">
    //       <div className="flex items-center justify-between mb-2">
    //         <h4 className="text-2xl">Vote with</h4>
    //         <LiaTimesSolid className="text-xl" onClick={close} />
    //       </div>
    //       <hr />
    //       <div className="flex items-center gap-5 justify-center mt-10 text-white flex-wrap">
    //         <Link
    //           to={"/microsoft"}
    //           className="flex items-center gap-3 text-lg bg-blue-600 rounded-md py-2 px-5"
    //         >
    //           Microsoft <BsMicrosoft />
    //         </Link>
    //         <Link
    //           to={"/facebook"}
    //           className="flex items-center gap-3 text-lg bg-blue-600 rounded-md py-2 px-5"
    //         >
    //           Facebook <FaFacebook />
    //         </Link>
    //         <Link
    //           to={"/instagram"}
    //           className="flex items-center gap-3 text-lg bg-red-500 rounded-md py-2 px-5"
    //         >
    //           Instagram <GrInstagram />
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </Popup>
  );
}

export default PopupInfo;
