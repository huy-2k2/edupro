import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseLinePage from "./pages/CourseLinePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/course_line/:course_line_id"
          element={<CourseLinePage></CourseLinePage>}
        ></Route>
        <Route
          path="/course/:courseId"
          element={<CourseDetailPage></CourseDetailPage>}
        ></Route>
        <Route path="/post/:post_type" element={<PostPage></PostPage>}></Route>
        <Route
          path="/post_detail"
          element={<PostDetailPage></PostDetailPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
