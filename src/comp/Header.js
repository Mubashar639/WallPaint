import React from 'react';

import { Link, withRouter } from "react-router-dom";

import { Layout, Menu , Icon,Row, Col } from 'antd';
import imglogo from "./asset/logo.png"

// const imgAdress="https://images.vexels.com/media/users/3/136540/isolated/preview/2200190a8166194139800c74110ab116-paint-shop-logo-by-vexels.png"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default_selected: "0",
    }
  }
  componentDidMount() {
    const { location } = this.props;
    switch (location.pathname) {
      case "/home:1":
        this.setState({ default_selected: "1" })
        break;
      case "/home:2":
        this.setState({ default_selected: "1.1" })
        break;
      case "/aboutus":
        this.setState({ default_selected: "2" })
        break;
      case "/signin":
        this.setState({ default_selected: "8" })
        break;
      default:
        this.setState({ default_selected: "5" })
    }
  }

  selectedTeb = (key) => {

    this.setState({
      default_selected: key
    })
  }
  render() {
    const { Header } = Layout;
    const { default_selected } = this.state
    const SubMenu = Menu.SubMenu;


    return (<div>

      <Layout style={{backgroundColor:"white", width:"100%"}} className="layout">
        <Header style={{backgroundColor:"white", width:"100%"}}>
          <Row type="flex" justify="center">
          <Col style={{ borderBottom: "yellow 2px solid"}} span={8}  >
           <img alt="example" src={imglogo}/>
          </Col>
           <Col span={16}>
   
            <Menu
            theme="light"
            selectedKeys={[default_selected]}
            mode="horizontal"
            defaultSelectedKeys={[default_selected]}
            
           
          >
            <SubMenu title={<h3 className="submenu-title-wrapper">HOME</h3>}>
           <Menu.Item key="1">HOME 1</Menu.Item>
           <hr />
           <Menu.Item key="1.1">HOME 2</Menu.Item>
          </SubMenu>
            <Menu.Item key="2" onClick={(evt) => this.selectedTeb(evt.key)} >
              <Link to="/aboutus"  > ABOUT US</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={(evt) => this.selectedTeb(evt.key)} >
              <Link to="/aboutus" >TEAM</Link>

            </Menu.Item>
            <SubMenu title={<h3 className="submenu-title-wrapper">SERVICE</h3>}>
           <Menu.Item onClick={(evt) => this.selectedTeb(evt.key)} key="4">SERVICE 1</Menu.Item>
           <hr />
           <Menu.Item onClick={(evt) => this.selectedTeb(evt.key)} key="4.1">SIRVICE 2</Menu.Item>
           <hr />
           <Menu.Item onClick={(evt) => this.selectedTeb(evt.key)} key="4.2">SIRVICE DETAIL</Menu.Item>
          </SubMenu>
          <SubMenu title={<h3 className="submenu-title-wrapper">PORTFOLIO</h3>}>
           <Menu.Item key="5">Portfolio 1</Menu.Item>
           <hr />
           <Menu.Item key="5.1">Portfolio 2</Menu.Item>
           <hr />
           <Menu.Item key="5.2">Portfolio Single</Menu.Item>
          </SubMenu>
            <Menu.Item key="6" onClick={(evt) => this.selectedTeb(evt.key)} >
              <Link to="/aboutus" > TESTIMONIAL</Link>
            </Menu.Item>
            <SubMenu title={<h3 className="submenu-title-wrapper">BLOG</h3>}>
           <Menu.Item key="7">Blog LIST</Menu.Item>
           <hr />
           <Menu.Item key="7.1">Blog Gird</Menu.Item>
           <hr />
           <Menu.Item key="7.2">Blog Single</Menu.Item>
          </SubMenu>
  
            <Menu.Item key="8" onClick={(evt) => this.selectedTeb(evt.key)} >
              <Link to="/signin" > CONTACT</Link>
            </Menu.Item>
            <Menu.Item key="9" onClick={(evt) => this.selectedTeb(evt.key)} >
            <Icon type="search" /> 
            </Menu.Item>
          </Menu>
          </Col>
          </Row>
        </Header>
        {/* <Content style={{ padding: '0 50px' }}>
     
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content> */}
      </Layout>
    </div>
    )


  }

}
export default withRouter(Header);






