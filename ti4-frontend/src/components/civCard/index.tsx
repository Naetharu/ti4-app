import React from "react";

const CivCard = (props: {
  civName: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <div className="grow mt-2 bg-slate-900 text-white w-full min-h-[8rem] flex flex-col items-center p-2">
      {props.civName}
      <img
        src={props.image}
        alt={props.imageAlt}
        className="max-w-40 max-h-40"
      />
    </div>
  );
};

export default CivCard;
