import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ManagerPage from "./pages/ManagerPage/ManagerPage";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Qrcodetables from "./pages/qrcodetables/Qrcodetables";
import { ToastContainer } from "react-toastify";
import NavbarManager from "./components/NavbarManager/NavbarManager";
import SidebarManager from "./components/SidebarManager/SidebarManager";
import "./index.css"; // Import global styles

const App = () => {
  const url = import.meta.env.VITE_BACK_URL;

  const [showLogin, setShowLogin] = useState(false);

  const [table, setTable] = useState(null);


  // User Layout
  const UserLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      if (params.has("table")) {
        setTable(params.get("table"));
      }
    }, [location.search]);

    useEffect(() => {
      if (table) {
        const params = new URLSearchParams(location.search);
        if (!params.has("table")) {
          params.set("table", table);
          navigate(`${location.pathname}?${params.toString()}`, {
            replace: true,
          });
        }
      }
    }, [table, location, navigate]);
    return (
      <>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

  // Manager Layout
  const ManagerLayout = () => {
    return (
      <div>
        <ToastContainer />
        <NavbarManager />
        <hr />
        <div className="app-content">
          <SidebarManager />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/order',
          element: <PlaceOrder table={table} />
        },
        {
          path: '/verify',
          element: <Verify />
        },
        {
          path: '/myorders',
          element: <MyOrders />
        },
      ]
    }, {
      path: "/",
      element: <ManagerLayout />,
      children: [
        {
          path: '/manager',
          element: <ManagerPage />
        },
        {
          path: '/add',
          element: <Add url={url} />
        },
        {
          path: '/list',
          element: <List url={url} />
        },
        {
          path: '/orders',
          element: <Orders url={url} />
        },
        {
          path: '/qrcodetables',
          element: <Qrcodetables url={url} />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )

  // return (
  //   <>
  //     {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
  //     <div className="app">
  //       <Navbar setShowLogin={setShowLogin} />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/cart" element={<Cart />} />
  //         <Route path="/order" element={<PlaceOrder table={table} />} />
  //         <Route path="/verify" element={<Verify />} />
  //         <Route path="/myorders" element={<MyOrders />} />
  //         <Route path="/manager" element={<ManagerPage />} />
  //         <Route path="/add" element={<Add url={url} />} />
  //         <Route path="/list" element={<List url={url} />} />
  //         <Route path="/orders" element={<Orders url={url} />} />
  //         <Route path="/qrcodetables" element={<Qrcodetables url={url} />} />
  //       </Routes>
  //     </div>
  //     <Footer />
  //   </>
  // );
};

export default App;
