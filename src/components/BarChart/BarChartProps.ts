import { IChartDataModel } from "../../models/ISensorDataModel"

export default interface BarChartProps{
    chartData: Array<IChartDataModel>;
    xAxisName: string;
    xAxisData: string;
};