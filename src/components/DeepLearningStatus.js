import React from "react";
import Hexa from "./../style/images/hexa.png"

export default function DeepLearningStatus() {
    return (
        <div className="display_small">
            <div className="title">딥러닝 상태</div>
            <div className="text_center">
                <table className="deep_table">
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
                            <td className="w-290">[2021-08-03-21:36:17] Transfer Success Memory</td>
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
                            <td>[2021-08-03-21:36:17] Learning Success Memory</td>
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
                            <td>[2021-08-03-21:36:17] Saving Success Memory</td>
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
                            <td>[2021-08-03-21:36:17] Error occurred Memory</td>
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
                            <td>[2021-08-03-21:36:17] No data in folder Memory</td>
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
                            <td>[2021-08-03-21:36:17] Transfer Success Memory</td>
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
                            <td>[2021-08-03-21:36:17] Transfer Success Memory</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}