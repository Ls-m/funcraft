import React , { useState, useEffect } from "react";
 import './editPage.css';
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import {AppConstants, GetBasicAuthHeader, GetWebServiceUrl} from "../../../constants/appConstants";
import {setGameModes} from "../../../redux/actions/gameModesActions.js";
import {useNavigate, useParams} from "react-router-dom";


export default function EditPage(){

    const [index, setIndex] = useState(0);


     const {id:gameIndex} = useParams();

    const gameModes = useSelector((state) => state.gameModes.modes);
    const admin = useSelector(state => state.admin.admin);
    const [state, setState] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
      // if (admin.token === undefined) {
      //     navigation("/");
      // }
      console.log("hi from edit page")
      console.log(gameIndex)
      console.log(gameModes)
  }, []);

   
    // const fetchGame = async () => {
    //     let response = await axios.get(GetWebServiceUrl(AppConstants.GET_ALL_GAMES_URL) + "/" + clientId, GetBasicAuthHeader(admin)).catch(err => {
    //         console.log(err)
    //         console.log('hi this is an error');
    //     })
    //     // dispatch(selectedProduct(response.data))
    //     dispatch(setGameModes(response.data.modes))
    // }

    

  
    // const onChangeWinXp = (index, value) => {
    //     value = parseInt(value)
    //     if (value < 0) {
    //         value = 0
    //     }
    //     console.log(value);
    //     console.log(gameModes[0])
    //     console.log(index)
    //     gameModes[index].winXp = value;
    
    //     setState(state + 1);
    // }
   
   

    return (

      <div className="Tabs">
        <div className="TabsList">
          <div
            className={`tabHead ${index === 0 ? "active" : null}`}
            onClick={() => {
              setIndex(0);
            }}
          >
            تمرینی
          </div>

          <div
            className={`tabHead ${index === 1 ? "active" : null}`}
            onClick={() => {
              setIndex(1);
            }}
          >
            نقره{" "}
          </div>

          <div
            className={`tabHead ${index === 2 ? "active" : null}`}
            onClick={() => {
              setIndex(2);
            }}
          >
            برنزی{" "}
          </div>

          <div
            className={`tabHead ${index === 3 ? "active" : null}`}
            onClick={() => {
              setIndex(3);
            }}
          >
            طلایی{" "}
          </div>
        </div>
        <div className="tabContent" hidden={index !== 0}>
          <div className={"game-mode-list padding margin "}>
          
            <button className="zodayesh">زدایش</button>
            <button className="enteshar">انتشار</button>
            <button className="laghv mb-4">لغو انتشار</button>
            <table className={"float-right sep-table mb-4"}>
              <td>
                <input className="mode-input center me-2" type="number" />
              </td>
              <td>برد XP</td>
            </table>
            <table className={"float-right sep-table mb-4"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>باخت XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input type="number" />
              </td>
              <td>تروفی برنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>تروفی بازنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>ورودی</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <select className="entekhab">
                  <option value="Money">پول (ریال)</option>
                  <option value="Gold">طلا</option>
                  <option value="Silver">نقره</option>
                </select>
              </td>
              <td>نوع ورودی</td>
            </table>
            <button className="dash-button force-black">
              اضافه کردن جایزه +
            </button>
            <div></div>
            <button className="blue-button">ذخیره</button>
          </div>{" "}
        </div>
        <div className="tabContent" hidden={index !== 1}>
          tab2
          <div className={"game-mode-list padding margin "}>
          
            <button className="zodayesh">زدایش</button>
            <button className="enteshar">انتشار</button>
            <button className="laghv">لغو انتشار</button>
            <table className={"float-right sep-table mb-4"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>برد XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>باخت XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input type="number" />
              </td>
              <td>تروفی برنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>تروفی بازنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>ورودی</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <select className="entekhab">
                  <option value="Money">پول (ریال)</option>
                  <option value="Gold">طلا</option>
                  <option value="Silver">نقره</option>
                </select>
              </td>
              <td>نوع ورودی</td>
            </table>
            <button className="dash-button force-black">
              اضافه کردن جایزه +
            </button>
            <div></div>
            <button className="blue-button">ذخیره</button>
          </div>{" "}
        </div>
        <div className="tabContent" hidden={index !== 2}>
          tab3
          <div className={"game-mode-list padding margin "}>
          
            <button className="zodayesh">زدایش</button>
            <button className="enteshar">انتشار</button>
            <button className="laghv">لغو انتشار</button>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center mb-4" type="number" />
              </td>
              <td>برد XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>باخت XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input type="number" />
              </td>
              <td>تروفی برنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>تروفی بازنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>ورودی</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <select className="entekhab">
                  <option value="Money">پول (ریال)</option>
                  <option value="Gold">طلا</option>
                  <option value="Silver">نقره</option>
                </select>
              </td>
              <td>نوع ورودی</td>
            </table>
            <button className="dash-button force-black">
              اضافه کردن جایزه +
            </button>
            <div></div>
            <button className="blue-button">ذخیره</button>
          </div>{" "}
        </div>
        <div className="tabContent" hidden={index !== 3}>
          tab4
          <div className={"game-mode-list padding margin "}>
          
            <button className="zodayesh">زدایش</button>
            <button className="enteshar">انتشار</button>
            <button className="laghv">لغو انتشار</button>
            <table className={"float-right sep-table mb-4"} >
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>برد XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>باخت XP</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input type="number" />
              </td>
              <td>تروفی برنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>تروفی بازنده</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <input className="mode-input center" type="number" />
              </td>
              <td>ورودی</td>
            </table>
            <table className={"float-right sep-table"}>
              <td>
                <select className="entekhab">
                  <option value="Money">پول (ریال)</option>
                  <option value="Gold">طلا</option>
                  <option value="Silver">نقره</option>
                </select>
              </td>
              <td>نوع ورودی</td>
            </table>
            <button className="dash-button force-black">
              اضافه کردن جایزه +
            </button>
            <div></div>
            <button className="blue-button">ذخیره</button>
          </div>{" "}
        </div>
      </div>

     
    );
}
