var Menu = require('react-burger-menu').pushRotate;
var React = require('react');
import {Link} from 'react-router';
module.exports = class TheMenu extends React.Component{
    render(){
        return(
            <Menu pageWrapId={"main"} outerContainerId={"content-container"}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="student" className="menu-item" href="/student">Add Student</a>
                <a id="addschool" className="menu-item" href="/school">Add School</a>
            </Menu>
        );
    }
}
