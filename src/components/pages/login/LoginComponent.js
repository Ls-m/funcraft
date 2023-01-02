import '../../ui/style.css';
// import GoogleLogin from "react-google-login";
// import {gapi} from 'gapi-script';
import {useEffect} from "react";
import axios from "axios";
import {cookies} from "../../../App";
import {AppConstants, GetBasicAuthHeader, GetWebServiceUrl, LoginBasicAuth} from "../../../constants/appConstants";
import {setAdmin} from "../../../redux/actions/adminActions";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";


export default function LoginForm() {
    const openPage = (url) => {
        window.open(url, "_self")
    };
    let password;
    let username;
    const dispatch = useDispatch();
    const navigation = useNavigate();
    // const clientId = '301482692908-b9m9erlei7md1e1ck78vtuvi755964o2.apps.googleusercontent.com';
    useEffect(() => {
        // const initClient = () => {
        //     gapi.client.init({
        //         clientId: clientId,
        //         scope: ''
        //     });
        // };
        // gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        cookies.set('googleProfile', JSON.stringify(res.profileObj), {path: '/'});

        axios.post(GetWebServiceUrl(AppConstants.LOGIN_WITH_GOOGLE_URL), res).then(function (response) {
            if (response.status === 200) {
                console.log('response', response.data);
                dispatch(setAdmin(response.data));
                navigation("/games")
                // openPage(AppConstants.SITE_ADDR + '/games')
            } else {
                // SetNotification("خطا", response.status + "\n" + response.data, "danger");

                navigation("/activation")
                console.log(response.status, "waiting for activation")
            }
        });
    };

    const login = async () => {
        let response = await axios.get(GetWebServiceUrl(AppConstants.LOGIN),LoginBasicAuth(username,password)).catch(err => {
            console.log("ERRR", err)
            // SetNotification("خطا", err.response.status + "\n" +  JSON.stringify(err.response.data),"danger");
        })
        if (response != null){
            if (response.status === 200) {
                console.log('response', response.data);
                dispatch(setAdmin(response.data));
                navigation("/games")
                // openPage(AppConstants.SITE_ADDR + '/games')
            } else {
                navigation("/activation")
                console.log(response.status, "waiting for activation")
            }
        }
    }
    const register = ()=>{
        navigation("/register")
    }

    const onFailure = (err) => {
        console.log('onFailure', err);
    };

    const onChangePassword = (pass)=>{
        password = pass
    }

    const onChangeUsername = (name)=>{
        username = name
    }

    return (
        <>
            {/* <NotificationHeader></NotificationHeader> */}
            <div className="wrapper">
                <h1 className="white">پنل توسعه دهندگان</h1>
                <form action="#" onSubmit={login}>
                    <div className="field email">
                        <div className="input-area">
                            <input onChange={(e) => onChangeUsername(e.target.value)} type="text" placeholder="Email"/>
                        </div>
                        <div className="error error-txt">Email can't be blank</div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input onChange={(e) => onChangePassword(e.target.value)} type="password" placeholder="Password"/>
                        </div>
                        <div className="error error-txt">Password can't be blank</div>
                    </div>
                    <input type="submit" value="ورود"/>
                </form>
                <button className="dash-button" onClick={register}>ثبت نام</button>
            </div>
        </>
    );
}

