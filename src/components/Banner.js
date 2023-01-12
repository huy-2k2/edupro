import React from "react";
import AccordionBase from "./AccordionBase";
import Slider from "./Slider";
import CountAuto from "./CountAuto";
export default function Banner() {
  return (
    <div className="relative lg:bg-blue-300">
      <div className="absolute top-0 left-0 right-0 z-10 hidden h-10 bg-gray-500 bg-opacity-50 lg:block"></div>
      <div className="w-[1400px] mx-auto max-w-full px-5 py-2 flex gap-x-5 pt-6">
        <div className="w-[300px] flex-shrink-0 hidden lg:block">
          <AccordionBase
            data={[
              {
                title: "Mục đích của trang web?",
                contents: [
                  "website EasyEdu cung cấp cho học sinh, sinh viên, người đi làm những khóa học online hữu ích của các trung tâm đối tác được kiểm duyệt về cả về nội dung và chất lượng. Đồng thời trên website cũng có nhiều bài viết chia sẻ của các diễn giả, giáo sư, tiktoker, blogger, những người truyền cảm hứng, những chuyên gia thuộc nhiều lĩnh vực, khối ngành khác nhau giúp người học dễ dàng định hướng và hoạch định kế hoạch tương lai. Các khóa học bao trùm nhiều khối cấp, lĩnh vực từ cấp tiểu học đến đại học, cao đẳng và người đi làm với nhiều môn học, chuyên ngành như IT, ngôn ngữ,  toán học,...",
                ],
              },
              {
                title: "Bạn có cần phải trả phí?",
                contents: ["Nâng cấp tài khoản vip"],
              },
              {
                title: "Hướng dẫn sử dụng",
                contents: [
                  "+ Đăng nhập: Người dùng có thể đăng ký tài khoản bằng số điện thoại/gmail hoặc có thể đăng nhập bằng tài khoản facebook đã có.",
                  "+ Các khóa học: Các khóa học được phân chia thành các khối cấp, đối tượng khác nhau: Tiểu học, Trung học cơ sở, Trung học Phổ thông, Đại học, Sau đại học. Mỗi khối cấp lại có nhiều khóa học online thuộc các môn học các nhau của các Trung tâm là đối tác của dự án. Đặc biệt trong giai đoạn 1 này, dự án tập trung kết nối, hợp tác với các Trung tâm dành cho các em học sinh Tiểu học, Trung học cơ sở, Trung học phổ thông. ",
                  "+ Đánh dấu và chọn khóa học: Người dùng có thể tham khảo toàn bộ các khóa học bằng cách ấn xem “Chi tiết” của mỗi khóa học và thêm vào bộ sưu tập tham khảo khóa học bằng cách ấn nút “Yêu thích” của từng khóa.",
                  "+ Đánh dấu và chọn khóa học: Người dùng có thể tham khảo toàn bộ các khóa học bằng cách ấn xem “Chi tiết” của mỗi khóa học và thêm vào bộ sưu tập tham khảo khóa học bằng cách ấn nút “Yêu thích” của từng khóa.",
                  "+ Đăng bài: Tại đây, diễn giả có thể đăng tải những bài viết review hoặc chia sẻ kinh nghiệm về học tập, ôn thi hay những tài liệu hay bổ ích. ",
                  "+ Đăng bài: Tại đây, diễn giả có thể đăng tải những bài viết review hoặc chia sẻ kinh nghiệm về học tập, ôn thi hay những tài liệu hay bổ ích. ",
                  "+ Nhận xét của học viên sau khi đã học xong các khóa học: Khách hàng sau khi đã học xong khóa học, có thể nhận xét ngay dưới khóa học như review hay feedback. Đồng thời, những người dùng khác cũng có thể vào xem những nhận xét đó để tham khảo và lựa chọn các khóa học phù hợp với mình nhất.",
                ],
              },
            ]}
          ></AccordionBase>
        </div>
        <div className="flex-grow overflow-hidden rounded-lg">
          <Slider
            images={[
              "images/banner/image1.jpg",
              "images/banner/image2.jpg",
              "images/banner/image3.jpg",
            ]}
          ></Slider>
        </div>
        <div className="flex-shrink-0 hidden xl:block">
          <div className="flex flex-col p-4 bg-white rounded-md gap-y-5">
            <img
              className="w-[200px] rounded-md"
              src="images/credential.png"
              alt=""
            />
            <button className="w-full p-3 font-semibold text-white uppercase rounded-md bg-primary">
              tải ứng dụng
            </button>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div
          className="lg:translate-y-1/2 w-[1400px] mx-auto max-w-full rounded-md py-2 sm:py-4 px-4 sm:px-8 flex justify-center gap-x-5 sm:gap-x-20 lg:gap-x-0 lg:justify-between items-center"
          style={{ backgroundImage: `url("images/banner/banner_bg.jpg")` }}
        >
          <div className="flex items-center justify-center gap-x-3">
            <img
              className="w-[50px] sm:w-auto object-cover"
              src="images/tradition.png"
              alt=""
            />
            <div className="flex flex-col text-[10px] text-white sm:text-lg">
              <div className="font-bold">16 năm</div>
              <div className="font-semibold">Giáo dục trực tuyến</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <img
              className="w-[50px] sm:w-auto object-cover"
              src="images/member.png"
              alt=""
            />
            <div className="flex flex-col text-[10px] text-white sm:text-lg">
              <div className="font-bold">
                <CountAuto max={6123354}></CountAuto>
              </div>
              <div className="font-semibold">thành viên</div>
            </div>
          </div>
          <div className="items-center justify-center hidden lg:flex gap-x-3">
            <img src="images/medal.png" alt="" />
            <div className="flex flex-col text-lg text-white">
              <div className="font-bold">Nền tảng học trực tuyến</div>
              <div className="font-semibold">số 1 Việt Nam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
