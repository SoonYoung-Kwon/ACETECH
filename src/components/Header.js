import React from "react";
import Logo from "./../style/images/logo.png"

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img
                    src={Logo}
                    width='160px'
                    height='120px'
                    alt=''
                />
            </div>
            <div className="header-end">
                asdf
            </div>
        </div>
    )
}