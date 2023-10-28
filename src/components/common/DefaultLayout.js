import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import routes from "../../routes";

const loading = <div>화면을 불러오는 중 입니다.</div>;

const DefaultLayout = () => {
  return (
    <>
      <Header />
      {
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                )
              );
            })}
          </Routes>
        </Suspense>
      }
      <Footer />
    </>
  );
};

export default DefaultLayout;
