import React from "react";
import OverlayVisible from "./DropDown";




const NavBar = () => {
  const styles = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      color: "salmon",
      fontSize: "500px",
      backgroundColor: "#4b5ba2",
      padding: `${50}px`,
      align: "left"
    },
  };
  return (
    <>
      <NavBar
        className="container logo"
        style={styles.navStyle}
        mode="light"
        color="white"
        fontSize="500px"
        leftContent={[<OverlayVisible />]}
      >   
      </NavBar>
    </>
  );
};
export default NavBar;