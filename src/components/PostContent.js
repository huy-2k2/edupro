import React from "react";
import HeaderCourse from "./HeaderCourse";

export default function PostContent({ title, contents }) {
  return (
    <div className="flex flex-col gap-y-3">
      <HeaderCourse text={title}></HeaderCourse>
      {contents.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}
