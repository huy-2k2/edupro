import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center px-5 py-8 border-t">
      <div className="inline-flex items-center justify-center mx-auto gap-x-3">
        <div className="flex items-center justify-center w-10 h-10 text-lg border rounded-full text-primary">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="flex items-center justify-center w-10 h-10 text-lg text-gray-800 border rounded-full">
          <i className="fa-brands fa-square-instagram"></i>
        </div>
        <div className="text-[#28b1ff] text-lg flex items-center justify-center w-10 h-10  border rounded-full">
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="inline-flex justify-center mt-3 gap-x-3">
        <div className="font-semibold text-gray-500">info</div>
        <div className="font-semibold text-gray-500">suport</div>
        <div className="font-semibold text-gray-500">marketing</div>
      </div>
      <div className="inline-flex justify-center mt-2 gap-x-3">
        <div className="font-semibold text-gray-500">terms of use</div>
        <div className="font-semibold text-gray-500">Privacy Policy</div>
      </div>
      <div className="inline-flex justify-center mt-2 text-sm text-gray-800">
        &#169; Clarity Money
      </div>
    </div>
  );
}
