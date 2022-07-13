import { Link, Route, Routes } from "react-router-dom";
import "../style/Home.css";
import ListNote from "./ListNote";

const Home = () => {
  // const location = useLocation();
  // const pathSnippets = location.pathname.split("/").filter((i) => i);
  // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  //   const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
  //   return (
  //     <Breadcrumb.Item key={url}>
  //       <Link to={url}>{breadcrumbNameMap[url]}</Link>
  //     </Breadcrumb.Item>
  //   );
  // });

  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
        <Link to="/ListNote">List item</Link>
      </div>
      <Routes>
        <Route
          path="/apps"
          element={
            <ul className="app-list">
              <li>
                <Link to="/">Application1</Link>

                <Link to="/">Detail</Link>
              </li>
              <li>
                <Link to="/">Application2</Link>
                <Link to="/">Detail</Link>
              </li>
            </ul>
          }
        />
        <Route path="*" element={<span>Home Page</span>} />
        <Route
          path="/ListNote"
          element={
            <>
              <ListNote />{" "}
            </>
          }
          component={ListNote}
        />
      </Routes>
    </div>
  );
};

export default Home;
