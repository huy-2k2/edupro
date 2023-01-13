import React, { useState } from "react";
import data from "../data/menuData";
import { Link } from "react-router-dom";
export default function MenuSmail({ setMenuClick }) {
  const [index, setIndex] = useState(-1);
  const [childIndex, setChildIndex] = useState(0);
  function handleGetBack() {
    if (index === -1) setMenuClick(false);
    else {
      setIndex(-1);
      setChildIndex(0);
    }
  }
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <img className="object-cover w-20" src="/images/logo.png" alt="" />
        <button
          onClick={handleGetBack}
          className="flex items-center p-2 mr-2 font-semibold text-gray-700 bg-gray-300 rounded-md"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>quay lại</span>
        </button>
      </div>
      <div className="">
        <div
          className={`flex flex-col px-5 py-3 gap-y-5 ${
            index !== -1 && "hidden"
          }`}
        >
          {data.map((data1, current_index) => (
            <div
              key={current_index}
              onClick={() => setIndex(current_index)}
              className="relative px-3 py-2 rounded-md cursor-pointer shadow-menu_item"
            >
              <span className="text-xs font-semibold text-gray-600">
                {data1.title}
              </span>
              <span className="absolute left-0 w-1 -translate-y-1/2 rounded-tr-full rounded-br-full bg-primary h-2/3 top-1/2"></span>
            </div>
          ))}
        </div>
        {index !== -1 && (
          <div>
            <div className="flex items-center justify-start px-5 py-2 border-t border-b gap-x-4">
              {data[index].item.map((data2, _current_index) =>
                data2.isPost ? (
                  <Link
                    onClick={() => setMenuClick(false)}
                    to={`/post/${index}`}
                    className={`px-4 py-2 text-sm font-semibold min-w-[150px]  capitalize flex items-center justify-center rounded-md ${
                      _current_index === childIndex
                        ? "text-white bg-[#28b1ff]"
                        : "text-gray-600 bg-gray-200"
                    } cursor-pointer`}
                  >
                    {data2.title1}
                  </Link>
                ) : (
                  <div
                    onClick={() => setChildIndex(_current_index)}
                    className={`px-4 py-2 text-sm font-semibold min-w-[150px]  capitalize flex items-center justify-center rounded-md ${
                      _current_index === childIndex
                        ? "text-white bg-primary"
                        : "text-gray-600 bg-gray-200"
                    } cursor-pointer`}
                  >
                    {data2.title1}
                  </div>
                )
              )}
            </div>
            <div>
              <div className="text-[16px] font-semibold px-5 py-3 relative">
                <span className="ml-2">{data[index].title}</span>
                <span className="absolute left-0 w-[10px] -translate-y-1/2 top-1/2 bg-primary h-3/4 rounded-tr-[5px] rounded-br-[5px]"></span>
              </div>
              <div className="flex flex-col px-5 py-2 gap-y-6">
                {data[index].item[childIndex].item1.map((data3) => (
                  <div>
                    <div className="text-[#fd8b88] uppercase font-semibold">
                      {data3.title2}
                    </div>
                    <div className="grid grid-cols-2 mt-2 gap-x-5 gap-y-3">
                      {data3.item2.map((data4) => (
                        <Link
                          onClick={() => setMenuClick(false)}
                          to={`/course_line/${data4.id}`}
                          className="flex items-start justify-start px-3 py-1 rounded-md cursor-pointer shadow-menu_item gap-x-2"
                        >
                          <div className="text-gray-500">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                              >
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                              </svg>
                            </span>
                          </div>
                          <span>{data4.text}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
