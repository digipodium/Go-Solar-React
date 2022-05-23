import { Dashboard } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/user/dashboard",
    },
  ];

  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions} title="User Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default User;
