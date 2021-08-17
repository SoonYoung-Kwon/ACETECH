import React from "react";
import "./../style/scss/UserInfo.scss"
import UserList from "./UserList"
import UserDetail from "./UserDetail";

export default function UserInfo() {
    return (
        <div className="row">
            <div>
                <UserList/>
            </div>
            <div>
                <UserDetail/>
            </div>
        </div>
    )
}