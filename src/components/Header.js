import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Cookies from "js-cookie";
import { COOKIE_EXPIRED_TIME } from "../config";

import { useUser } from "../contexts/UserContext";
import { FACEBOOK_APP_ID } from "../config";
import useClick from "../hooks/useClick";
import Menu from "./Menu";
import useResize from "../hooks/useResize";
import MenuSmail from "./MenuSmail";
import { Link } from "react-router-dom";
export default function Header() {
  const [user, setUser] = useUser();
  const [menuToggle, parentRef, childRef, setMenuClick] = useClick();
  const [searchToggle, parentSearchRef, childSearchRef] = useClick();
  const size = useResize();
  // function responseFacebook(response) {
  //   const user_temp = {
  //     name: response.name,
  //     image: response.picture.data.url,
  //     id: response.id,
  //   };
  //   Cookies.set("user", JSON.stringify(user_temp), {
  //     expires: COOKIE_EXPIRED_TIME,
  //   });
  //   setUser(user_temp);
  // }
  // function handleLoggout() {
  //   Cookies.remove("user");
  //   setUser(null);
  // }
  // useEffect(() => {
  //   if (!user) {
  //     const user_cookie = Cookies.get("user");
  //     if (user_cookie) setUser(JSON.parse(user_cookie));
  //   }
  // }, [user, setUser]);
  return (
    <div className="px-5 bg-primary">
      <div className="flex items-center justify-start w-[1100px] max-w-full py-2 relative mx-auto">
        <div>
          <div
            ref={parentRef}
            className="flex items-center justify-center mr-5 text-white cursor-pointer gap-x-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="hidden text-sm font-semibold select-none md:block">
              Các khóa học
            </div>
          </div>
          <div ref={childRef}>
            {menuToggle && (
              <div className="absolute left-0 z-50 w-full top-full ">
                {size ? (
                  <Menu setMenuClick={setMenuClick}></Menu>
                ) : (
                  <MenuSmail setMenuClick={setMenuClick}></MenuSmail>
                )}
              </div>
            )}
          </div>
        </div>
        <div
          ref={parentSearchRef}
          className="text-white cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="w-[300px] hidden md:flex items-center justify-center rounded-lg overflow-hidden bg-white">
          <input
            className="flex-grow px-2 py-2 text-sm text-gray-500 bg-transparent border-none outline-none placeholder:text-sm"
            type="text"
            placeholder="nhập tên khóa học..."
          />
          <div className="pr-2 text-gray-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center ml-auto gap-x-5">
          {/* <FacebookLogin
            appId={FACEBOOK_APP_ID}
            autoLoad
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <button
                onClick={user ? handleLoggout : renderProps.onClick}
                className={`text-white font-semibold rounded-md px-4 py-2 min-w-[100px] ${
                  user ? "bg-yellow-500" : "bg-green-500"
                }`}
              >
                {user ? "đăng xuất" : "đăng nhập"}
              </button>
            )}
          /> */}
          <button
            className={`text-white font-semibold rounded-md px-4 py-2 min-w-[100px] ${
              user ? "bg-yellow-500" : "bg-dark-primary"
            }`}
          >
            {user ? "Đăng xuất" : "Đăng nhập"}
          </button>
          <Link to="/" className="flex items-center justify-center gap-x-2">
            <div className="w-10 h-10">
              <img
                className="object-cover w-full h-full rounded-full"
                src={user ? user.image : "/images/logo.png"}
                alt=""
              />
            </div>
            <div className="text-sm font-semibold text-white">
              {user ? user.name.split(" ").pop() : "EasyEdu"}
            </div>
          </Link>
        </div>
      </div>
      <div ref={childSearchRef}>
        {searchToggle && (
          <div className="flex items-stretch justify-start w-full px-5 py-2 md:hidden">
            <input
              className="flex-grow px-2 py-1 text-sm text-gray-500 border-none outline-none placeholder:text-sm rounded-tl-md rounded-bl-md"
              placeholder="nhập tên khóa học..."
            ></input>
            <button className="px-2 text-gray-500 bg-gray-100 rounded-tr-md rounded-br-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
