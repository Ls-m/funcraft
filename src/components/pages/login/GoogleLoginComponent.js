import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import {cookies} from "../../../App";
import axios from "axios";
import { GetWebServiceUrl } from '../../../constants/appConstants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppConstants } from '../../../constants/appConstants';
import {setAdmin} from "../../../redux/actions/adminActions";


export default function GoogleLoginComponent(){
    const clientId = '301482692908-b9m9erlei7md1e1ck78vtuvi755964o2.apps.googleusercontent.com'
    const dispatch = useDispatch();
    const navigation = useNavigate();

    useEffect(() => {
    const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
        });
        };
        gapi.load('client:auth2', initClient);
    });


    const onSuccess = (res) => {
        console.log('success:', res);
        console.log(res.profileObj.name);

        cookies.set('googleProfile', JSON.stringify(res.profileObj), { path: '/' });
        axios.post(GetWebServiceUrl(AppConstants.LOGIN_WITH_GOOGLE_URL),res).then(function (response){
            if (response.status === 200){

                console.log('response', response.data);
                dispatch(setAdmin(response.data));
                navigation("/games")

               // openPage(AppConstants.SITE_ADDR + '/games')
            }else{
                
                console.log(response.status,"waiting for activation")
            }
        });
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    return (
       <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
  );
}