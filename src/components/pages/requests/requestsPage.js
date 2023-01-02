
import '../../ui/style.css';
import RequestComponent from './requestComponent'
import NavbarComponent from '../../NavbarComponent';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GetWebServiceUrl } from '../../../constants/appConstants';
import { AppConstants } from '../../../constants/appConstants';
import { GetBasicAuthHeader } from '../../../constants/appConstants';
import { useEffect } from 'react';
import {setRequests} from "../../../redux/actions/requestActions";



export default function RequestsPage() {
    const requests = useSelector(state => state.requests.requests);
    const admin = useSelector((state) => state.admin.admin);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const fetchRequests = async () => {
        const response = (await axios.get(GetWebServiceUrl(AppConstants.GET_ALL_REQUESTS_URL), GetBasicAuthHeader(admin))
            .catch(err => {
                console.log('hi this is an error from requests')
                console.log("Err: ", err);
            }));

        if (response.status === 200) {
            dispatch(setRequests(response.data))
        }
    }
    useEffect(() => {
        // if (admin.token === undefined) {
        //     navigation("/");
        // }
        fetchRequests();
    }, []);

    return (
        <>
            <NavbarComponent/>
            <div className=" justify-content-start align-items-start container">
                <div className='d-flex flex-column'>
                    <div className='mt-5 mb-4 d-flex justify-content-start'>
                        <h4>درخواست‌ها</h4>
                    </div>
                    <RequestComponent/>

                </div>
            </div>
            {/* <section className=' fix-position full-width '>
                <div className='mt-5 index-row mx-auto d-flex justify-content-between align-items-center'>
                    <div><h4>درخواست‌ها</h4></div>
                </div>
                <RequestComponent/>
                {/* <div className="game-list">
                    <div id='games'> */}
                        
                        {/* <RequestComponent/> */}
                    {/* </div>
                </div> */}
            {/* </section> */} 

        </>

    );
}