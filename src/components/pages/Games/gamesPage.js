import '../../ui/style.css';
import GamesComponent from "./gamesComponent";
import NavbarComponent from '../../NavbarComponent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { GetWebServiceUrl } from '../../../constants/appConstants';
import { AppConstants } from '../../../constants/appConstants';
import { GetBasicAuthHeader } from '../../../constants/appConstants';
import { useEffect } from 'react';
import {setProducts} from "../../../redux/actions/productActions";
// import {SetNotification} from "../../ui/NotificationHeader";
import NotificationHeader from '../../ui/NotificationHeader';

export default function GamesPage() {

    const games = useSelector((state) => state.allProducts.products);
    const admin = useSelector((state) => state.admin.admin);
    const navigation = useNavigate();

    const dispatch = useDispatch();
    const fetchGames = async () => {
        const response = (await axios.get(GetWebServiceUrl(AppConstants.GET_ALL_GAMES_URL), GetBasicAuthHeader(admin))
            .catch(err => {
                console.log("Err: ", err);
            }));

        if (response.status === 200) {
            dispatch(setProducts(response.data))
        }
    }
    useEffect(() => {
        if (admin.token === undefined) {
            navigation("/");
        }
        fetchGames();
    }, []);


    const addNewGame = async () => {
        console.log('game added')
        const response = (await axios.get(GetWebServiceUrl(AppConstants.ADD_NEW_GAME_URL), GetBasicAuthHeader(admin))
            .catch(err => {
                console.log("Err: ", err);
            }));
        if (response.status === 200){
            console.log('new game was added')
            // SetNotification("اضافه شدن بازی جدید","بازی جدید با موفقیت اضافه شد","success");
        }else{
            console.log('there was an error adding new game')
            // SetNotification("خطا", response.status + "\n" + response.data,"danger");
        }
        fetchGames();
    };

    
    
    return (
        <>
            <NavbarComponent/>
            <NotificationHeader></NotificationHeader>

            <div className=" justify-content-start align-items-start container">
                <div className='d-flex flex-column'>
                    <div className='mt-5 mb-4 d-flex justify-content-between align-items-center'>
                        <h4>بازی‌ها</h4>
                        <div>
                            <button onClick={addNewGame} type="button" class="btn btn-success" >+ بازی جدید</button>
                        </div>
                    </div>
                    <GamesComponent/>

                </div>
            </div>
            {/* <section className=' fix-position full-width '>
                <div className='mt-5 index-row mx-auto d-flex justify-content-between align-items-center'>
                    <h4>بازی‌ها</h4>
                    <div>
                        <button type="button" class="btn btn-success" >+ بازی جدید</button>
                    </div>
                </div>
                <div className="game-list">
                    <div id='games'>
                        <GamesComponent/>
                    </div>
                </div>
            </section> */}

        </>

    );
}