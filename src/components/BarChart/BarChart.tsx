import BarChartProps from '../BarChart/BarChartProps';
import { BarChart as ReactBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart = ({chartData, xAxisName, xAxisData}: BarChartProps) => {
    return (
        <ReactBarChart width={1200} height={800} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisName} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={xAxisData} fill="#8884d8" />
        </ReactBarChart>
    );

}

export default BarChart;