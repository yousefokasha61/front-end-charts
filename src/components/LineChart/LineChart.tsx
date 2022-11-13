import LineChartProps from './LineChartsProps';
import { LineChart as ReactLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LineChart = ({chartData, xAxisName, xAxisData}: LineChartProps) => {
    return (
        <ReactLineChart
          width={1200}
          height={800}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisName} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={xAxisData} stroke="#8884d8" />
        </ReactLineChart>
    );
}

export default LineChart;