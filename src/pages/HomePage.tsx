import { useMemo } from 'react';
import useFetchSensorData from '../hooks/useFetchSensorData';
import { filterResponseData } from '../utils/utils';
import LineChart from '../components/LineChart/LineChart';
import BarChart from '../components/BarChart/BarChart';


const HomePage = () => {

    const sensorData = useFetchSensorData();

    const humidityChartData = useMemo(() => {
        return filterResponseData(sensorData, "Humidity ");
    }, [sensorData]);

    const temperatureChartData = useMemo(() => {
        return filterResponseData(sensorData, "Internal Temperature (C)");
    }, [sensorData]);

    const lightChartData = useMemo(() => {
        return filterResponseData(sensorData, "Light"); 
    }, [sensorData]);

    const kwhChartData = useMemo(() => {
        return filterResponseData(sensorData, "kWh");
    }, [sensorData]);

  return (
    <>  
        <p className="h1 text-center mx-auto">Humidity Chart</p>
        <LineChart chartData={humidityChartData} xAxisName="datetime" xAxisData="payload"/>
        <br></br>
        <p className="h1 text-center mx-auto">Temperature Chart</p>
        <LineChart chartData={temperatureChartData} xAxisName="datetime" xAxisData="payload"/>
        <br></br>
        <p className="h1 text-center mx-auto">Light Chart</p>
        <LineChart chartData={lightChartData} xAxisName="datetime" xAxisData="payload"/>
        <br></br>
        <p className="h1 text-center mx-auto">KWH Chart</p>
        <BarChart chartData={kwhChartData} xAxisName="datetime" xAxisData="payload"/>
    </>
  );
}

export default HomePage;
