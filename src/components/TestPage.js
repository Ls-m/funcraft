import { useSelector } from "react-redux";
import { useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
export default function TestPage(){
    let admin = useSelector(state => state.admin.admin)
   

    return(
        <>
            <NavbarComponent/>
            <div>
                test
                {/* <p>ID: <b>{admin.ID}</b></p> */}
                {/* <p>Full Name: <b>{admin.fullName}</b></p> */}
                <p>{admin.fullName}</p>
                {/* <p>Email: <b>{admin.email}</b></p>
                <p>Google ID: <b>{admin.google_id}</b></p>
                <p>Role: <b>{GetRole(admin.role)}</b></p> */}
            </div>
        </>
    )
}