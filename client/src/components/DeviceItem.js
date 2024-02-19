import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star-rating-5.png'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {PORT} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} className={"mt-2"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"gray"}>
                <Image src={PORT + device.img} width={150} height={150}/>
                <div className={"text-black-50 mt-1 d-flex justify-content-between align-items-center"}>
                    <div>Samsung</div>
                    <div className={"d-flex align-items-center"}>
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;