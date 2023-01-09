const coursesData = [
  {
    id: 1,
    name: "HTML CSS từ Zero đến Hero",
    image: "images/courses/image1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/html-css",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 2,
    name: "Responsive Với Grid System",
    image: "images/courses/image2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/responsive-web-design",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 3,
    name: "Kiến Thức Nhập Môn IT",
    image: "images/courses/image3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/lessons-for-newbie",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 4,
    name: "Lập Trình JavaScript Nâng Cao",
    image: "images/courses/image4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/javascript-nang-cao",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 5,
    name: "Lập Trình JavaScript Cơ Bản",
    image: "images/courses/image5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/javascript-co-ban",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 6,
    name: "Xây Dựng Website với ReactJS",
    image: "images/courses/image6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/reactjs",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 7,
    name: "Node & ExpressJS",
    image: "images/courses/image7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Sơn Đặng",
    link: "https://fullstack.edu.vn/courses/nodejs",
    central_id: 5,
    courseLine_id: 4,
  },
  {
    id: 8,
    name: "Học thiết kế web",
    image: "images/courses/image8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Evondev",
    link: "https://kt.city/course/khoa-hoc-html-css-evondev",
    central_id: 3,
    courseLine_id: 4,
  },
  {
    id: 9,
    name: "Javascript from zero to hero",
    image: "images/courses/image9.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Evondev",
    link: "https://kt.city/course/tu-hoc-javascript-hieu-qua-va-de-dang-danh-cho-nguoi-moi",
    central_id: 3,
    courseLine_id: 4,
  },
  {
    id: 10,
    name: "Khoá học HTML CSS nâng cao",
    image: "images/courses/image10.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Evondev",
    link: "https://kt.city/course/khoa-hoc-cat-psd-sang-html-css-toan-tap",
    central_id: 3,
    courseLine_id: 4,
  },
  {
    id: 11,
    name: "khóa học reactjs",
    image: "images/courses/image11.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Evondev",
    link: "https://kt.city/course/khoa-hoc-reactjs-co-ban",
    central_id: 3,
    courseLine_id: 4,
  },
  {
    id: 12,
    name: "Js Beginner - Học javascript nền tảng",
    image: "images/courses/image12.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Phan Văn Cương",
    link: "https://unitop.vn/course/js-beginner/intro",
    central_id: 4,
    courseLine_id: 4,
  },
  {
    id: 13,
    name: "Học Juery siêu tốc",
    image: "images/courses/image13.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Phan Văn Cương",
    link: "https://unitop.vn/course/lam-chu-jquery-sieu-toc/intro",
    central_id: 4,
    courseLine_id: 4,
  },
  {
    id: 14,
    name: "Php Master - Khoá học lập trình web php",
    image: "images/courses/image14.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Phan Văn Cương",
    link: "https://unitop.vn/course/php-master-hoc-lap-trinh-web-php-cho-nguoi-moi-bat-dau-mvc-project/intro",
    central_id: 4,
    courseLine_id: 4,
  },
  //toan 12
  {
    id: 15,
    name: "Live S : Luyện thi Đại học môn Toán 2023",
    image: "images/courses/image15.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Nguyễn Thế Duy",
    link: "https://moon.vn/khoa-hoc/live-s-luyen-thi-dai-hoc-mon-toan-2023-2131",
    central_id: 2,
    courseLine_id: 13,
  },
  {
    id: 16,
    name: "Live A : Luyện đề môn Toán 2023",
    image: "images/courses/image16.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Nguyễn Thế Duy",
    link: "https://moon.vn/khoa-hoc/live-a-luyen-de-mon-toan-2023-2132",
    central_id: 2,
    courseLine_id: 13,
  },
  {
    id: 17,
    name: "Live T : Tổng ôn Nâng cao môn Toán 2023",
    image: "images/courses/image17.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Nguyễn Thế Duy",
    link: "https://moon.vn/khoa-hoc/live-t-tong-on-nang-cao-mon-toan-2023-2133",
    central_id: 2,
    courseLine_id: 13,
  },
  {
    id: 18,
    name: "Học tốt Toán 12 - Thầy Lưu Huy Thưởng",
    image: "images/courses/image18.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Lưu Huy Thưởng",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/1885/hoc-tot-toan-12-thay-luu-huy-thuong.html",
    central_id: 1,
    courseLine_id: 13,
  },
  {
    id: 19,
    name: "Học tốt Toán 12 - Thầy Phương, thầy Tùng",
    image: "images/courses/image19.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Thầy Phương, thầy Tùng",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/1884/hoc-tot-toan-12-thay-phuong-thay-tung.html",
    central_id: 1,
    courseLine_id: 13,
  },
  {
    id: 20,
    name: "Học toán từ con số 0",
    image: "images/courses/image20.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Lưu Huy Thưởng",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/666/hoc-toan-tu-con-so-0-thay-luu-huy-thuong.html",
    central_id: 1,
    courseLine_id: 13,
  },
  {
    id: 21,
    name: "Toán trắc nghiệm bằng Casio",
    image: "images/courses/image21.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Lưu Huy Thưởng",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/726/10-ky-thuat-giai-toan-trac-nghiem-bang-casio-thay-luu-huy-thuong.html",
    central_id: 1,
    courseLine_id: 13,
  },
  {
    id: 22,
    name: "Đột phá 9+ môn Toán - Thầy Nguyễn Thanh Tùng",
    image: "images/courses/image22.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Lưu Huy Thưởng",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/1230/dot-pha-9-mon-toan-thay-nguyen-thanh-tung.html",
    central_id: 1,
    courseLine_id: 13,
  },
  {
    id: 23,
    name: "Ôn thi học kỳ Toán 12",
    image: "images/courses/image22.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae corporis eius nam rerum provident, rem fuga, ad soluta quae tempore ea aspernatur. Quisquam impedit ad excepturi ullam officiis accusamus!",
    teacher: "Lê đức thiệu",
    link: "https://hocmai.vn/khoa-hoc-truc-tuyen/1999/on-thi-hoc-ky-toan-12.html",
    central_id: 1,
    courseLine_id: 13,
  },
];

export default coursesData;
