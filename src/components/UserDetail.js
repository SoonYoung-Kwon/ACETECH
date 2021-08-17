import React from "react";

export default function UserDetail() {
    return (
        <div className="display_large">
            <div className="title">사용자 상세정보</div>
            <div className="text_center">
                <div className="user_picture">
                </div>
                <table className="userdetail_table">
                        <thead>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td className="head">사용자 명</td>
                                <td className="body">아무개</td>
                            </tr>
                            <tr>
                                <td className="head">연락처</td>
                                <td className="body">010 - 1234 - 5678</td>
                            </tr>
                            <tr>
                                <td className="head">소속</td>
                                <td className="body">(주)에이스텍</td>
                            </tr>
                            <tr>
                                <td className="head">직책</td>
                                <td className="body">사원</td>
                            </tr>
                            <tr>
                                <td className="head">E-mail</td>
                                <td className="body">acetech@iacetech.co.kr</td>
                            </tr>
                            <tr>
                                <td className="head">비고</td>
                                <td className="body">비고사항</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}