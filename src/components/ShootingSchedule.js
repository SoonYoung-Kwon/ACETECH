import React from "react";
import NumPack from "./NumPack"

export default function ShootingSchedule() {
    return (
        <div className="display_small">
            <div className="title">촬영 스케줄</div>
            <div className="text_center">
                <table className="shoot_table">
                    <thead>
                        <td className="w-25"></td>
                        <td className="w-110">지역명</td>
                        <td className="w-80">측정량</td>
                        <td className="w-140">비교량<br/>(전 측정 대비)</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-25">
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td className="w-110">지역이름</td>
                            <td className="w-80">5000</td>
                            <td className="w-140">+ 10%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>3000</td>
                            <td>- 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>3000</td>
                            <td>- 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>3000</td>
                            <td>- 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>3000</td>
                            <td>- 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>3000</td>
                            <td>- 5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="selecters">
                    일
                    <select className="selecter">
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>21</option>
                    </select>
                    월
                    <select className="selecter">
                        <option selected></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    년
                    <select className="selecter_year">
                        <option selected></option>
                        <option>2021</option>
                    </select>
                    <button>입력</button>
                </div>
        </div>
    )
}