import React from "react";

export const ProgressBar = ({ name, value }) => {
    return (
        <>
            <h3 className="uppercase text-white text-xl font-bold -mb-3">{name}</h3>
            <div className="flex flex-wrap items-center ">


                <div className="h-2 w-64 bg-gray-800/[0.4] overflow-hidden">
                    <div className="h-2 bg-white" style={{ width: `${value}%` }}></div>
                </div>
                <p className="text-white ml-2 text-xl font-semibold">{value}</p>

            </div>
        </>
    );
};

export default ProgressBar;
