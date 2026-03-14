import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div>
        <h3 className="text-5xl leading-[1.3] font-bold px-10 py-10">
          Prospective
          <br /> <span className="bg-gray-100 rounded-full px-5 py-1">customer</span>{" "}
          <br />
          segmentation
        </h3>
        <p className="px-10 text-lg font-medium text-gray-600">
          Depending on customer satisfaction and access to banking
          products,potential target audience can be divided into three groups
        </p>
      </div>
      <div className="px-10 ">
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
