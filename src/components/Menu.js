import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import data from "../data/menuData";

export default function Menu({ setMenuClick }) {
  const [index, setIndex] = useState(-1);
  const [indexChild, setIndexChild] = useState(0);
  return (
    <div className="flex items-stretch justify-start">
      <div className="min-w-[300px] shadow-md">
        {data.map((data1, current_index) => (
          <div
            onClick={() => {
              setIndex(current_index);
              setIndexChild(0);
            }}
            className={`relative flex items-center justify-start gap-x-3 bg-white px-3 py-2 hover:bg-gray-100 cursor-pointer ${
              index === current_index && "bg-gray-100"
            }`}
          >
            <div className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="font-semibold text-gray-600">{data1.title}</div>
            {index === current_index && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 border-[10px] border-l-0 border-transparent border-r-primary"></div>
            )}
          </div>
        ))}
      </div>
      <div className="relative flex-grow shadow-sm">
        {data.map((data1, current_index) => {
          return current_index === index ? (
            <div className="absolute w-full min-h-full border-l-primary border-l-[5px] shadow-lg bg-white">
              <div className="flex items-center justify-start border border-transparent gap-x-3 border-b-gray-300">
                {data1.item.map((data2, _current_index) =>
                  data2.isPost ? (
                    <Link
                      to={`/post/${current_index}`}
                      onClick={() => setMenuClick(false)}
                      className="relative px-3 py-2 font-semibold text-white uppercase cursor-pointer bg-primary rounded-tl-md rounded-tr-md"
                    >
                      <div>{data2.title1}</div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => setIndexChild(_current_index)}
                      className="relative px-3 py-2 font-semibold text-white uppercase cursor-pointer bg-primary rounded-tl-md rounded-tr-md"
                    >
                      <div>{data2.title1}</div>
                      {indexChild === _current_index && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-b-0 border-transparent border-t-primary"></div>
                      )}
                    </div>
                  )
                )}
              </div>
              {data1.item.map((data2, current_index) => {
                return indexChild === current_index
                  ? data2.item1.map((data3) => (
                      <div className="flex flex-col justify-start px-3 py-2 mb-1">
                        <div className="font-semibold uppercase text-primary">
                          {data3.title2}
                        </div>
                        <div className="grid grid-cols-3 cursor-pointer gap-y-1">
                          {data3.item2.map((data4) => (
                            <Link
                              onClick={() => setMenuClick(false)}
                              to={`/course_line/${data4.id}`}
                              className="flex items-start justify-start text-sm font-semibold text-gray-600 capitalize gap-x-1"
                            >
                              <div>
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
                              </div>
                              {data4.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))
                  : "";
              })}
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
