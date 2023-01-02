import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'gold'],
  ['2022-11-26', 0],
  [2022-11-26, 10],
  
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Amount',
  },
  series: {
    1: { curveType: 'function' },
  },
  colors:['yellow']
}


class MultiLineChart extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    console.log('hi from componentdidmount ')
    console.log(this.props.data)
    const f = this.props.data 
    const x1 = f.match.silverChart.labels[0];
    const y1 = f.match.silverChart.data[0];

    const x2 = f.match.silverChart.labels[1];
    const y2 = f.match.silverChart.data[1];

    const p1 = [x1,y1];
    const p2 = [x2,y2];
    const z = [p1,p2];
    console.log(z);
    this.setState({
      data: z
    });
    console.log(this.state.data)
  }
  
  handler = ()=>{
    console.log('hi h2 clicked')
    console.log(this.state.data)
  }
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 ms-5 me-5">
        <h2 onClick={this.handler}>Gold and Silver Line Chart</h2>
        <Chart className=' me-5 '
          width={'700px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default MultiLineChart