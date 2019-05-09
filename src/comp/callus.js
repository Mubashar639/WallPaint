import React from 'react';
import {Row,Divider, Col,Icon} from "antd"

function Callus(props) {
    return (<div>
        <Row gutter={4} style={{height:"50px",    background:" #F2F9FF", paddingTop:"10px"}} >
            <Col push={2} span={16}>
            <span> <span className="conttectBar">Call Us: </span> +95 2561 1236 55 </span>
             <Divider type="vertical" />
             <span>  <span className="conttectBar">Mail Us: </span> support@tourmail.com</span>
             </Col>
            <Col push={3}  span={2}>
            <Icon type="facebook" />
            </Col>
            <Col push={2}  span={2}>
            <Icon type="twitter" />
            </Col>
              <Col   push={1}  span={1}>
            <Icon type="google-plus" />
            </Col>
              <Col  push={1}   span={1}>
             <Icon type="linkedin" />
            </Col>
        </Row>
    </div>
    );
}

export default Callus;