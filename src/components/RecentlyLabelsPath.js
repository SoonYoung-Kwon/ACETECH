import React from "react";
import Hexa from "./../style/images/hexa.png"

export default function RecentlyLabelsPath() {
    return (
        <div className="display_small">
            <div className="title">최근 레이블 지정 목록 경로</div>
            <div className="text_center">
                <table className="label_table">
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-90">
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td className="w-290">C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\asdfasdasdfasdfsdafsdaasdfasfdf</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={Hexa}
                                    width='30px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>C:\temp\label1\data123\ABC\DEF\...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}