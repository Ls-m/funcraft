import GoogleLoginComponent from "./GoogleLoginComponent"
import LoginComponent from './LoginComponent'
export default function LoginPage(){
    return(
        <div className="d-flex flex-column mt-5 justify-content-center align-items-center">
            <h3>پنل توسعه دهندگان</h3>
            <div style={{'width':'50%'}} className='mt-3'>
                {/* <GoogleLoginComponent/> */}
                <LoginComponent/>
            </div>
        </div>
    )
}