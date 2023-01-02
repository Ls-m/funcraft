import { useSelector } from "react-redux";
import { useEffect } from "react";
import NavbarComponent from "../NavbarComponent";
export default function ProfilePage(){
    var admin = useSelector(state => state.admin.admin)
    useEffect(() => {
        console.log('from use effect')
        console.log(admin)
      });

    const GetRole = (role) => {
        switch (role) {
            case 0:
                return "Developer";
            case 1:
                return "Admin";
            case 2:
                return "God";
            default:
                return "Developer";
        }
    }
    return(
        <>
        <NavbarComponent/>
            <div className="container">
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
                
                <div className="d-flex mt-5  align-items-center" style={{'width':'100%'}}>
                    
                    <div className="d-flex pe-2 flex-column justify-content-start align-items-start " style={{'width':'70%'}}>
                            <div className="mt-3 "><h3 className="fw-bold">{admin.fullName}</h3></div>
                            <p>آیدی: <b>{admin.ID}</b></p> 
                            {/* <p>نام: <b>{admin.fullName}</b></p>  */}
                            <p>ایمیل: <b>{admin.email}</b></p>
                            <p>آیدی گوگل: <b>144556778900-98</b></p>
                            <p>سطح دسترسی: <b>{GetRole(admin.role)}</b></p> 
                    </div>
                    <div className="mt-3 me-4 " style={{'width':'30%'}}><img className=' profile-img' src={admin.avatarUrl} width='300' height='300' alt={admin.email}/></div>
                </div>
            </div>
            </div>
        </>
    )
}