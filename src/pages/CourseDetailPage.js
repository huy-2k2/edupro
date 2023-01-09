import React from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import HeaderCourse from "../components/HeaderCourse";
import AppLayout from "../layouts/AppLayout";
import Comment from "../components/Comment";
import { getRatesByCourse } from "../model/RateModel";
import CommentUser from "../components/CommentUser";
import { useComment } from "../contexts/CommentContext";
export default function CourseDetailPage() {
  const { courseId } = useParams();
  const rates = getRatesByCourse(courseId);
  const [userComments] = useComment();
  return (
    <AppLayout>
      <div className="px-5">
        <div className="w-[1100px] mx-auto px-2 py-10 max-w-full">
          <HeaderCourse text="Chi tiết khóa học"></HeaderCourse>
          <div className="w-full mt-5 mb-20">
            <CardDetail courseId={courseId}></CardDetail>
          </div>
          <HeaderCourse text="Bình luận về khóa học"></HeaderCourse>
          <div className="flex flex-col mt-8">
            <CommentUser courseId={courseId}></CommentUser>
            <div className="flex flex-col mt-5 gap-y-5">
              {userComments
                .filter((userComment) => userComment.course_id == courseId)
                .map((rate) => (
                  <Comment rate={rate} isUser></Comment>
                ))}
              {rates.map((rate) => (
                <Comment rate={rate}></Comment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
