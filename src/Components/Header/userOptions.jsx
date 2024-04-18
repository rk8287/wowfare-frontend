import React, { Fragment, useState } from 'react';
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdPerson, MdExitToApp } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from '../../Action/userAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const UserOptions = ({ user = {} }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);



  const options = [
    { icon: <RiFileList2Line />, name: "My Trips", func: orders },
    { icon: <MdPerson />, name: "Profile", func: account },
   
    { icon: <MdExitToApp />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <LuLayoutDashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
    
  }

   function dashboard() {
    navigate("/admin/newProduct");
  }

  function orders() {
   
  }
  function account() {
    navigate("/account");
  }
  function cart() {
  
  }


  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar?.url ? user.avatar.url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
