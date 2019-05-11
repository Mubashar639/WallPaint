import React from "react";
import { Row, Col, Icon, Button,  } from 'antd';
import banner from "../../asset/banner/01.png"
const CallBanner = (props) => {
    return (
        <div className="Banner" style={{ marginTop: "100px", minHeight:"200px", width: "auto", backgroundColor: "#01539F", color: "#FFFFFF" }} >
            <Row  type="flex" justify="center">
                <Col  span={8} push={2} >
                    <img className="Banner1" style={{ position: "absolute", top: "-34px" }} src={banner} alt="slow connect" />
                </Col>
                <Col style={{ paddingTop: "75px", minWidth:"200px" }} span={8} pull={1}>
                    {/* <h1>4/7 Emergency Call : <span></span> 0145 125 1245</h1> */}
                    <h2 >
                        <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: "700", color: "#FFFFFF" }} >4/7 Emergency Call :</span>
                        <span style={{ fontFamily: 'Raleway, sans-serif', color: "#ffea00", fontWeight: "700" }}> 0145 125 1245</span>
                    </h2>
                    <p  > We offer the best service to make your life Awesome </p>
                </Col>
                <Col style={{ paddingTop: "75px", }} span={8} pull={2}>
                    <Button style={{ padding: "10px" }} type="primary" size={"large"}>SEND MESSAGE <Icon type="left-circle" /> </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CallBanner