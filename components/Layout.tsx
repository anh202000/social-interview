import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: any) {
    return (
        <div className="container-globals">
            <div className="container mb-5">
                <NavBar />
            </div>

            <div className="container">
                {/* <Notify />
                <Modal /> */}
                {children}
            </div>

        </div>
    );
}

export default Layout;
