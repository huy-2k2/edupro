import React from "react";
import AppLayout from "../layouts/AppLayout";
import { useParams } from "react-router-dom";
import menuData from "../data/menuData";
import HeaderCourse from "../components/HeaderCourse";
import CardPost from "../components/CardPost";
export default function PostPage() {
  const { post_type: postType } = useParams();
  return (
    <AppLayout>
      <div className="w-[1400px] mx-auto max-w-full px-5 py-2">
        <div className="mt-5">
          <HeaderCourse
            text={"Bài viết dành cho " + menuData[postType].title.toLowerCase()}
          ></HeaderCourse>
        </div>
        <div className="flex flex-wrap mt-5 gap-x-5 gap-y-6">
          <CardPost image="https://i.imgur.com/2DhmtJ4.jpg"></CardPost>
          <CardPost image="https://i.imgur.com/oYiTqum.jpg"></CardPost>
        </div>
      </div>
    </AppLayout>
  );
}
