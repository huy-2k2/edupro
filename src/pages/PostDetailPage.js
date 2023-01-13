import React from "react";
import AppLayout from "../layouts/AppLayout";
import HeaderCourse from "../components/HeaderCourse";
import PostContent from "../components/PostContent";
export default function PostDetailPage() {
  return (
    <AppLayout>
      <div className="w-[1000px] px-8 py-10 mx-auto max-w-full text-lg text-gray-700">
        <HeaderCourse text="Là lập trình viên thì có nên chỉ viết code thôi không ?"></HeaderCourse>
        <div className="w-[850px] max-w-full overflow-hidden rounded-3xl mt-5">
          <img
            src="/images/blog/main.jpg"
            className="object-cover w-full"
            alt=""
          />
        </div>
        <div className="mt-5 first-letter:text-5xl first-letter:font-semibold text-[20px] mb-20">
          Câu trả lời của mình là không. Mà các bạn nên tìm tòi học hỏi thêm
          nhiều thứ khác để có thể nâng cao kiến thức và cải thiện thêm nhiều kỹ
          năng khác nữa. Từ đó có thể tạo ra thêm thu nhập hoặc ít nhất là có
          kiến thức rộng hơn. Vậy đó là những cái gì thì mình sẽ giới thiệu cho
          các bạn ở dưới đây nha.
        </div>
        <div className="flex flex-col gap-y-10">
          <PostContent
            title="Viết blog"
            contents={[
              "Khi chúng ta viết blog thì chúng ta sẽ phải tìm cách viết sao cho hay, tìm tòi nội dung, nghiên cứu từ khoá, làm sao để bài viết của mình lên TOP 10 của Google, và biết thêm nhiều về hosting, domain, để làm sao đưa website chúng ta lên trên mạng để nhiều người biết tới được.",
              "Qua việc viết blog chúng ta sẽ có thêm những kỹ năng như là viết bài, SEO, lên nội dung, nghiên cứu từ khoá, chưa kể còn phải thiết kế ảnh bìa nữa, ngoài ra khi blog được nhiều người đọc, nhiều người biết tới thì cái thương hiệu cá nhân sẽ uy tín hơn, sau này dễ dàng kết nối tới nhiều người, làm được nhiều việc có lợi khác..",
            ]}
          ></PostContent>
          <PostContent
            title="Làm freelance"
            contents={[
              "Khi làm freelancer thì sẽ đúc kết được thêm kinh nghiệm làm việc online, tăng thu nhập rất là nhiều nếu làm giỏi, biết được nhiều trang tìm việc online hay, biết cách deal số tiền công tương xứng, có kinh nghiệm xử lý này kia, trình độ ngày một tăng lên đến khi giỏi, có lượng khách hàng tiềm năng rồi thì không lo không có việc nữa",
            ]}
          ></PostContent>
          <PostContent
            title="Làm Youtuber"
            contents={[
              "Làm Youtuber, cũng tương tự như blog nhưng mà là về videos thì chắc chắn chúng ta phải luyện thêm kỹ năng nói chuyện trước ống kính, hoặc đơn giản là vừa nói vừa ghi hình, học thêm các phần mềm chỉnh sửa video, quay phim, âm thanh các kiểu.",
              "Khi làm Youtuber thì cũng sẽ học được thêm rất nhiều cho bản thân, kỹ năng hướng dẫn, chỉnh sửa videos, cách truyền đạt, dẫn chuyện, thiết kế ảnh bìa…",
            ]}
          ></PostContent>
          <PostContent
            title="UI UX"
            contents={[
              "Học UI UX để làm gì, để cải thiện thẫm mỹ để khi làm việc với Designer thì mình cũng có kiến thức để có thể làm ra sản phẩm giống thiết kế, hoặc khi không có Designer thì cũng có thể tự làm ra sản phẩm ít nhất cũng dễ nhìn còn hơn là xấu ko ai thèm dùng. Việc có thêm kiến thức UI UX là 1 lợi thế cho Lập trình viên mà bạn nên bổ sung vào nhé",
            ]}
          ></PostContent>
          <PostContent
            title="Công cụ thiết kế"
            contents={[
              "Học Photoshop, AI, Figma là những công cụ thiết kế, giúp chúng ta biết sử dụng để khi chúng ta được giao thiết kế từ những công cụ này thì sẽ dễ dàng lấy tài nguyên như hình ảnh, kiểu chữ, màu sắc, kích thước hoặc đơn giản hơn khi các bạn làm blog hoặc Youtube thì các bạn cũng có thể tự thiết kế ảnh bìa, ảnh cover, ảnh avatar cho riêng mình mà không cần phải đi thuê. Đôi khi có thời gian thì học thêm chỉnh sửa ảnh các kiểu, sau này bạn gái có nhờ thì trổ tài luôn.",
            ]}
          ></PostContent>
          <PostContent
            title="Kỹ năng mềm"
            contents={[
              "Học thêm kỹ năng mềm, như giao tiếp, rồi tìm tòi về cách gửi Mail lịch sự để khi chúng ta gửi CV xin việc gì đó thì cũng biết cách để nhà tuyển dụng họ đánh giá cao hơn những người chỉ biết gửi Email chứ ko biết đầu đuôi gì cả.",
            ]}
          ></PostContent>
          <div className="px-6 py-3 border-l-8 shadow-xl border-l-primary">
            <p className="text-xl font-semibold uppercase">dành cho bạn</p>
            <p className="mt-3">
              Mình có khoá học HTML CSS từ cơ bản tới nâng cao cho người mới,
              nếu bạn quan tâm thì bạn có thể học thử{" "}
              <span className="font-semibold text-black">miễn phí</span> bằng
              việc{" "}
              <a
                className="text-[#28b1ff] text-xl"
                href="https://evondev.com/hoc-thu-html-css"
              >
                nhấn vào đây
              </a>{" "}
              nha.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-xl">
            <p>
              Một điểm hay nhất của viết blog, làm freelance, làm youtube là cho
              quen bị chửi đi 🙂 Dần dần biết cách bỏ ngoài tai những điều không
              tốt, từ đó hiểu bản thân mình hơn. Ngoài ra còn phải biết cách sắp
              xếp thời gian, bố trí phân chia công việc và viết lách.
            </p>
            <p className="mt-8">From Bùi Văn Nguyện</p>
          </div>
          <PostContent
            title="Tạm kết"
            contents={[
              "Học càng nhiều thì càng có lợi thế cho bản thân, có thêm nhiều kiến thức kỹ năng khác ngoài việc code, giống như những người ham đọc sách mình thấy họ có nhiều kiến thức sâu rộng, hỏi gì cũng nắm rõ và giải thích rất hay.",
              "Học càng nhiều thì càng có lợi thế cho bản thân, có thêm nhiều kiến thức kỹ năng khác ngoài việc code, giống như những người ham đọc sách mình thấy họ có nhiều kiến thức sâu rộng, hỏi gì cũng nắm rõ và giải thích rất hay.",
            ]}
          ></PostContent>
        </div>
      </div>
    </AppLayout>
  );
}
