import { useEffect, useState } from "react";
import axios from "axios";
import { ISensorDataModel } from "../models/ISensorDataModel";

const body = {
    "id": "7"
};

export default function useFetchSensorData(){
    const [sensorData, setSensorData] = useState<Array<ISensorDataModel>>();

    useEffect(() => {
    axios.post("https://www.splatform.blue:3000/Monthly/BSA", body)
    .then((response) => {
        console.log(response.data);
        setSensorData(response.data);
    })
    .catch((err) => {
        console.log(err);
    });
    }, []);

    return sensorData;
}