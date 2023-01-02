import '../../ui/style.css';
import axios from "axios";
import {AppConstants, GetWebServiceUrl, LoginBasicAuth} from "../../../constants/appConstants";
import {useNavigate} from "react-router-dom";


export default function RegisterForm() {
    let username;
    let email;
    let password;
    const navigation = useNavigate();

    const onChangeUsername = (value) => {
        username = value;
    }

    const onChangeEmail = (value) => {
        email = value;
    }

    const onChangePassword = (value) => {
        password = value;
    }

    const sendRegisterForm = async () => {
        let response = await axios.post(GetWebServiceUrl(AppConstants.REGISTER), {"fullName": username}, LoginBasicAuth(email, password)).catch(err => {
            console.log("ERR",err)
            //SetNotification("خطا", err.response.status + "\n" + JSON.stringify(err.response.data), "danger");
        })

        if (response.status === 200) {
            navigation("/activation")
        }
    }

    return (
        <>
            <div className="wrapper">
                <h1 className="white">ثبت نام</h1>
                <form action="/activation">
                    <div className="field">
                        <div className="input-area">
                            <input onChange={(e) => onChangeUsername(e.target.value)} type="text" placeholder="Name"/>
                        </div>
                        <div className="error error-txt">Email can't be blank</div>
                    </div>
                    <div className="field email">
                        <div className="input-area">
                            <input onChange={(e) => onChangeEmail(e.target.value)} type="text" placeholder="Email"/>
                        </div>
                        <div className="error error-txt">Email can't be blank</div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input onChange={(e) => onChangePassword(e.target.value)} type="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="error error-txt">Password can't be blank</div>
                    </div>
                    <button onClick={sendRegisterForm} className={'blue-button'} >ثبت نام</button>
                </form>
                </div>
        </>
    );
}
