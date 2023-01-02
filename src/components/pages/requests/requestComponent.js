// import avatar from '../../../assets/icon-test.jpg'
// import {InfoCircle,Trash,PenFill,FileEarmarkX} from "react-bootstrap-icons"
import '../../ui/style.css';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { GetWebServiceUrl } from '../../../constants/appConstants';
import { GetBasicAuthHeader } from '../../../constants/appConstants';
import { AppConstants } from '../../../constants/appConstants';
import { useEffect } from 'react';
export default function RequestComponent(){
    const requests = useSelector(state => state.requests.requests);
    const admin = useSelector((state) => state.admin.admin);
    const fake_data=[1,2];
    const [state, setState] = useState(0)
    useEffect(() => {
        
        console.log(requests)
      });
    const accept = (index) => {
        axios.post(GetWebServiceUrl(AppConstants.ACCEPT_REQUEST_URL),
            requests[index],
            GetBasicAuthHeader(admin)).catch(err => console.log(err)).then(response => {
            if (response.status === 200) {
                console.log(response.data);
                requests.splice(index, 1);
                setState(state + 1)
            } else {
                alert(response);
            }
        });
    }

    const reject = (index) => {
        axios.post(GetWebServiceUrl(AppConstants.REJECT_REQUEST_URL),
            requests[index],
            GetBasicAuthHeader(admin)).catch(err => console.log(err)).then(response => {
            if (response.status === 200) {
                console.log(response.data);
                requests.splice(index, 1);
                setState(state + 1)
            } else {
                alert(response);
            }
        });
    }
    const renderList = requests.map((request, index) => {
    return(
        <div>
            <div id='games' className='mb-4'>
                <div className="game-list d-flex flex-column bg-white mb-4">
                    <div className="float-start justify-content-between d-flex bg-white">
                        <div className="me-5 grey-color bg-white">عنوان</div>
                        <div className="me-5 grey-color bg-white">عملیات</div>
                        
                        
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between align-items-center bg-white">
                    
                        <div className='bg-white'>درخواست عضویت</div>
                        
                        <div className="d-flex align-items-center bg-white">
                            <button type="button" class="btn btn-success me-2" onClick={() => accept(index)} >قبول</button>
                            <button type='button' class='btn btn-danger me-2' onClick={() => reject(index)}>رد</button> 
                        
                        </div>


                    </div>
                    

                </div>

            </div>

        </div>
        
        
            
        
    )
    })

    return (
        <>
            <p hidden={requests.length > 0}>درخواستی برای نمایش وجود ندارد</p>
            {renderList}
        </>
    )

}