import { IChartDataModel } from "../../models/ISensorDataModel"

export default interface LineChartProps{
    chartData: Array<IChartDataModel>;
    xAxisName: string;
    xAxisData: string;
};