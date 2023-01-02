import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {GoogleLoginResponse, GoogleLogout} from "react-google-login";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(){
  let admin = useSelector(state => state.admin.admin)
  const navigation = useNavigate();
    const logout = response => {
        window.sessionStorage.removeItem("access_token");
        window.sessionStorage.removeItem("nama");
        navigation("/");
    }
    const clientId = '301482692908-b9m9erlei7md1e1ck78vtuvi755964o2.apps.googleusercontent.com';

    return(
    
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><Link style={{'textDecoration':'none','color':'white'}} to='/games'>FunCraft</Link></Navbar.Brand>
            <Link style={{'textDecoration':'none','color':'white'}} to="/profile">{admin.fullName}</Link>
              <Link style={{'textDecoration':'none','color':'white'}}  to="/games">بازی‌ها</Link>
              <Link style={{'textDecoration':'none','color':'white'}}  to="/requests">درخواست‌ها</Link>
              <Link style={{'textDecoration':'none','color':'white'}}  to="/avatars">آواتار</Link>
              <Link style={{'textDecoration':'none','color':'white'}}  to="/finance">سکه‌ها</Link>
              <li>
              <GoogleLogout className='padding-logout'
                                  clientId="301482692908-b9m9erlei7md1e1ck78vtuvi755964o2.apps.googleusercontent.com"
                                  buttonText="Logout"
                                  onLogoutSuccess={logout}
                    >
                    </GoogleLogout>
              </li>
            <Nav className="me-0">
              
              
            </Nav>
          </Container>
        </Navbar>
        
      </>
      
   
    )

}