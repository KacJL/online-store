import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className={"d-flex"}>
            {device.brands.map(brand =>
                <Card
                    className={"p-3 m-1"}
                    style={{width: "auto", cursor: "pointer"}}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : "gray"}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;