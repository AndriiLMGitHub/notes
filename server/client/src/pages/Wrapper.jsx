import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Toaster } from "react-hot-toast";

export const Wrapper = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
};
