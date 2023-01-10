import React, { useState } from "react";
import { json } from "react-router-dom";
import { useComment } from "../contexts/CommentContext";
import { useUser } from "../contexts/UserContext";
export default function CommentUser({ courseId }) {
  const [comment, setComment] = useComment();
  const [user, setUser] = useUser();
  const [content, setContent] = useState("");
  const [score, setScore] = useState();
  function handleSubmit() {
    if (
      content &&
      score &&
      Number.isInteger(Number(score)) &&
      1 <= score &&
      score <= 10
    ) {
      setComment([
        ...comment,
        {
          user: JSON.parse(JSON.stringify(user)),
          course_id: courseId,
          score: score,
          detail: content,
        },
      ]);
      setContent("");
      setScore("");
    }
  }
  return (
    <div
      class={`${
        user && comment.filter((item) => item.course_id == courseId).length
          ? "hidden"
          : "flex"
      } w-[800px] max-w-full items-center justify-center shadow-lg mb-4`}
    >
      <div class="w-full bg-white rounded-lg px-4 pt-2">
        <div class="flex flex-wrap -mx-3 mb-6">
          <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Thêm bình luận của bạn
          </h2>
          <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="nội dung bình luận"
              value={content}
            ></textarea>
            <input
              onChange={(e) => setScore(e.target.value)}
              value={score}
              placeholder="điểm đánh giá"
              type="text"
              className="w-full px-3 py-2 mt-1 placeholder-gray-700 bg-gray-100 border border-gray-400 rounded placeholder:font-semibold focus:outline-none focus:bg-white"
            />
          </div>
          <div class="w-full flex items-start md:w-full px-3">
            <div class="flex justify-end w-full">
              <button
                onClick={handleSubmit}
                class={`${
                  !user && "pointer-events-none"
                } bg-white cursor-pointer text-gray-700 font-medium py-1 px-4 text-center border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100`}
              >
                {user ? "thêm bình luận" : "bạn cần đăng nhập"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
