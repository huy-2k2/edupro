import React from "react";
import { getUserById } from "../model/UserModel";
export default function Comment({ rate, isUser }) {
  const user = isUser ? rate.user : getUserById(rate.user_id);
  return (
    <div class="inline-block">
      <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div class="relative flex gap-4">
          <img
            src={isUser ? user.image : `/${user.image}`}
            class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          />
          <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between">
              <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                {user.name}
              </p>
            </div>
            <p class="text-gray-500 text-base font-medium">
              đánh giá: {rate.score} / 10 điểm
            </p>
          </div>
        </div>
        <p class="-mt-4 text-gray-500">{rate.detail}</p>
      </div>
    </div>
  );
}
