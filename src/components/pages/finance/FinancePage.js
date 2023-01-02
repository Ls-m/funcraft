import NavbarComponent from '../../NavbarComponent'
import MultiLineChart from './MultiLineChart'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetWebServiceUrl } from '../../../constants/appConstants';
import axios from 'axios';
import { AppConstants } from '../../../constants/appConstants';
import { GetBasicAuthHeader } from '../../../constants/appConstants';
import {setFinance} from "../../../redux/actions/financeActions";

const old = Number.prototype.toLocaleString;
Number.prototype.toLocaleString = function (locale) {
    let result = old.call(this, locale);
    if (locale === 'fa-IR') {
        result = result.replace(/\٬/g, ",‬");
    }
    return result;
}

export const formatNumber = (q) => {
    return q.toLocaleString('en-US', {
        style: 'currency',
        currency: 'fa-IR'
    })
}


export default function FinancePage(){
    const admin = useSelector((state) => state.admin.admin);
    const navigation = useNavigate();
    const finance = useSelector((state) => state.finance.data);
    const dispatch = useDispatch();
    const [a,setA] = useState([]);
   
 

    const fetchFinance = async () => {
        console.log("START FETCH FINANCE")
        let response = await axios.get(GetWebServiceUrl(AppConstants.GET_FINANCE), GetBasicAuthHeader(admin)).catch(err => {
            console.log(err)
        })
        console.log(response.data)
        
        
        
        // console.log(a)
        
        dispatch(setFinance(response.data))
        

    }
    const getMatchData = (f) => {
        const x1 = f.match.silverChart.labels[0];
        const y1 = f.match.silverChart.data[0];

        const x2 = f.match.silverChart.labels[1];
        const y2 = f.match.silverChart.data[1];

        const p1 = [x1,y1];
        const p2 = [x2,y2];
        const z = [p1,p2];
        console.log('getMatchData is: ')
        console.log(z);
        setA(z);
        
        
        return z
    }


    useEffect(() => {
        if (admin.token === undefined) {
            navigation("/");
        }
        fetchFinance();
    }, []);


    return(
        <>
            <NavbarComponent></NavbarComponent>
            <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column me-3 px-5 py-3 mt-5" style={{'backgroundColor':'yellow','borderRadius':'10px'}}>
                    <div>ورودی:</div>
                    <div>خروجی:</div>

                </div>
                <div style={{'backgroundColor':'grey','borderRadius':'10px'}} className='px-5 py-3 mt-5'>
                    <div>ورودی:</div>
                    <div>خروجی:</div>

                </div>
            </div>
            <div className='mt-t me-5 ms-5 d-flex justify-content-center align-items-center'>
                <MultiLineChart data={finance}/>
            </div>
            {/* const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />) */}
            </div>
        
        </>
    )
}