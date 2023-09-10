import classes from "./DashboardSidebar.module.css";
import DoctorInfo from "./DoctorInfo";
import MenuList from "./MenuList";

const DashboardSidebar = (props) => {
  return (
    <aside
      className={
        props.isOpen ? `${classes.sidebar} ${classes.open}` : classes.sidebar
      }
    >
      <DoctorInfo />
      <MenuList />
    </aside>
  );
};

export default DashboardSidebar;
