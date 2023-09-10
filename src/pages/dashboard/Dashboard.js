import classes from "./Dashboard.module.css";

import { useState } from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "../../components/dashboard/sidebar/DashboardSidebar";
import DashHeader from "../../components/dashboard/header/DashHeader";

const Dashboard = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setSidebarIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.dashboard}>
      <DashboardSidebar isOpen={sidebarIsOpen} />
      <main>
        <DashHeader onClick={toggleSidebarHandler} />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
