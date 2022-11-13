export interface ISensorDataModel{
    id: number;
    topic: string;
    location: string;
    Device: string;
    company: string;
    Metric: string;
    min: number;
    max: number;
    squaremeter: number;
    person: number;
    lat: string;
    lng: string;
    image: string;
    payload: string;
    timestamp: string;
    deleted: IDeletedModel;
    Type: string;
    iduser: number;
    iddeviceData: number;
    status: string;
};

interface IDeletedModel{
    type: string;
    data: Array<number>
}

export interface IChartDataModel {
    datetime: string;
    payload: number;
}