
import React from 'react';
import { Row, Col, Icon, Button } from 'antd';
import rightimage from "../../asset/section/01.jpg"
class Grid extends React.Component {

    render() {
        const { details } = this.props;
        return (
            <div>
                <div style={{ marginTop: "100px" }}>

                    <Row type="flex" justify="center">
                        {details.map((value, key) => {
                            return (
                                <Col style={{ minWidth: "360px", margin: "10px", height: "238px" }} key={key} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1.5 }}>
                                    <div className="gridItem">
                                        <div className="gridB">
                                            <Icon style={{ fontSize: '30px' }} type={value.icon} theme="twoTone" />
                                            <h3 className="girdHeading">{value.title}</h3>
                                            <p>{value.Discription}</p>
                                            <Icon style={{ fontSize: '30px', color: 'yellow' }} size="30px" type="arrow-right" />
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}

                    </Row>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <Row type="flex" justify="center">
                        <Col style={{  minWidth:"300px" }} span={14}  >
                        <div>
                            <h1>
                            <span style={{ marginBottom: "20px", fontFamily: 'Raleway, sans-serif', fontWeight: "700" }} >ABOUT</span> 
                            <span style={{ marginBottom: "20px", fontFamily: 'Raleway, sans-serif', color: "#01539F", fontWeight: "700" }}> COLOR</span>
                            </h1>
                            <p >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                   specimen book. It has survived not It is a long established fact that a reader
                                    will be distracted by the readable content of a page when looking at its layout.
                                 The point of using Lorem Ipsum is that it has a more It has survived.
                              </p>
                            <Button style={{ padding: "10px" }} type="primary" size={"large"}>READ MORE <Icon type="left-circle" /> </Button>
                        </div>
                        </Col>
                        <Col span={6} style={{minWidth:"300px"}} >
                        <div >
                       <img className= "Banner1" style={{width:"100%"}} src={rightimage} alt="connection slow" />
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Grid;