import avatar from '../../../assets/icon-test.jpg'
import {InfoCircle,Trash,PenFill,FileEarmarkX} from "react-bootstrap-icons"
import '../../ui/style.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { GetWebServiceUrl } from '../../../constants/appConstants';
import { GetBasicAuthHeader } from '../../../constants/appConstants';
import { AppConstants } from '../../../constants/appConstants';
import {useNavigate} from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { Link } from 'react-router-dom'

export default function GamesComponent(){
    const admin = useSelector(state => state.admin.admin);
    const games = useSelector((state) => state.allProducts.products)
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const penfilHandler = () => {
        console.log('hi from penfilhandler')
        console.log(admin.email);
        navigation('/upload')
    }
    const trashHandler = () => {
        console.log('trash clicked')
    }
    const fileEarmarkXHandler = () => {
        console.log('fileearmarkx clicked')
    }
    const infoCircleHandler = (index) => {
        console.log('infoCircle clicked')
        console.log(index)
        const str = '/edit/'+index
        navigation(str)
        
        // <Navigate to={"/edit"} state={{ index }} />
        
    }
    const removeGame = (index) => {
        console.log("REMOVE GAME");
        // console.log(games)
        console.log(games[index].clientId);
        axios.post(GetWebServiceUrl(AppConstants.DELETE_GAME_URL),
            {"clientId": games[index].clientId},
            GetBasicAuthHeader(admin)).catch(err => console.log(err)).then(response => {
            console.log(response.data);
            games.splice(index, 1);
            console.log(games);
            setState(state + 1)
        });
    }

    
    const renderList = games.map((game, index) => {
    return(
        //   <div onClick={()=>{console.log('test clicked')}}>hi</div>
    
        
             <div key={game.ID} className="d-flex flex-column mb-4">
                 <div className="float-start justify-content-between d-flex bg-white">
                    <div className="me-5 grey-color bg-white">نمایه</div>
                    <div className="me-5 grey-color bg-white">نام</div>
                    <div className="me-5 grey-color bg-white">id</div>
                    <div className="me-5 grey-color bg-white">عملیات</div>
                    
                    
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between align-items-center bg-white">
                    <img className='ms-3 me-5' style={{'width':'70px','height':'70px'}} src={game.imagePath}></img>
                    <div className='bg-white ms-5'>{game.name}</div>
                    <div className='bg-white'>{game.clientId}</div>
                    <div className="d-flex align-items-center bg-white">
                        <Tippy content='ویرایش'>
                            <PenFill onClick={()=>penfilHandler(index)} className='me-3'/>
                        </Tippy>
                        <Tippy content='حذف'>
                            <Trash onClick={()=>removeGame(index)} className='me-3'  />
                        </Tippy>
                        <Tippy content='لغو انتشار'>
                            <FileEarmarkX onClick={fileEarmarkXHandler} className='me-3'/>
                        </Tippy>
                        <Tippy content='مودها'>
                            <InfoCircle onClick={()=>infoCircleHandler(index)} className='me-3'/>
                        </Tippy>
                       
                        
                    </div>


                </div> 
                

            </div>
        
    )
     })

     return(
        <>{renderList}</>
     )

}