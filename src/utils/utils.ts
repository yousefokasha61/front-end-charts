import _ from "lodash";
import dayjs from "dayjs";
import { ISensorDataModel, IChartDataModel } from "../models/ISensorDataModel";

export const filterResponseData = (sensorData: Array<ISensorDataModel> | undefined, metric: string) => {
    const temperatureData: Array<IChartDataModel> = [];
    _.forEach(_.filter(sensorData, {"Metric": metric}), (element) => {
      const datetime: string = dayjs.unix(parseFloat(element.timestamp)).format("YYYY-MM-DD, HH:mm:ss");
      const payload: number = parseFloat(element.payload);
      temperatureData.push({
        datetime: datetime,
        payload: payload
      })
    });
    return temperatureData;
};