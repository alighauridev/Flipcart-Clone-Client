import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Searchbar from "./Searchbar";
import logo from "../../../assets/images/logo.png";
import PrimaryDropDownMenu from "./PrimaryDropDownMenu";
import SecondaryDropDownMenu from "./SecondaryDropDownMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../scss/header.scss";
const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);

  return (
    <header className="bg-[#24292e] relative py-[15px] w-full z-10">
      {/* <!-- navbar container --> */}
      <div className="container w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative max-w-[1280px] mx-auto">
        {/* <!-- logo & search container --> */}
        <div className="flex items-center gap-[40px] flex-1">
          <Link className="h-7 mr-1 sm:mr-4" to="/">
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={logo}
              alt="MNFST Logo"
            />
          </Link>

          <Searchbar />
        </div>
        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
        <div className="flex items-center justify-evenly ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative h-[100%]">
          {isAuthenticated === false ? (
            <Link
              to="/login"
              className="px-3 sm:px-9 py-0.5 text-black bg-white border font-medium rounded-sm cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <span
              className="userDropDown flex items-center  text-white font-medium gap-1 cursor-pointer "
              onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}
            >
              {user.name && user.name.split(" ", 1)}
              <span>
                {togglePrimaryDropDown ? (
                  <ExpandLessIcon sx={{ fontSize: "16px" }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                )}
              </span>
            </span>
          )}

          {togglePrimaryDropDown && (
            <PrimaryDropDownMenu
              setTogglePrimaryDropDown={setTogglePrimaryDropDown}
              user={user}
            />
          )}

          <span
            className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer"
            onClick={() => setToggleSecondaryDropDown(!toggleSecondaryDropDown)}
            // style={{ color: "black" }}
          >
            More
            <span>
              {toggleSecondaryDropDown ? (
                <ExpandLessIcon sx={{ fontSize: "16px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              )}
            </span>
          </span>

          {toggleSecondaryDropDown && <SecondaryDropDownMenu />}

          <Link
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative"
          >
            <span>
              <ShoppingCartIcon />
            </span>
            {cartItems.length > 0 && (
              <div className="w-[1.2rem] h-[1.2rem] p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center ">
                {cartItems.length}
              </div>
            )}
            Cart
          </Link>
        </div>
        {/* <!-- right navs --> */}
      </div>
      {/* <!-- navbar container --> */}
    </header>
  );
};

export default Header;
