import './style.css'
import {ReactNotifications, Store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'
import 'animate.css';
export function SetNotification(title,message,type){
    console.log("SET")
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 1500,
            onScreen: true
        }
    });
}

export function SetNotificationWithoutDismiss(title,message,type){
    console.log("SET")
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
    });
}

export default function NotificationHeader(){
    return(
        <nav className={'notification-header'}>
            <ReactNotifications></ReactNotifications>
        </nav>
    )
}