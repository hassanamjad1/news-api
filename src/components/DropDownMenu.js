import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';

class DropDownMenu extends Component{


    
    state = {
        drpList : {
            countryTitle : "Select Country",
            categoryTitle : "Select"
        }
    }
    sendData = (event) => {
        this.props.chosenCategory(event.target.value);
        // event.preventDefault();
        // this.props.chosenCategory('business');
    }

    

    render(){
        
        return(
            <div>
                {/* <p>returning dropdown list </p> */}
             
                {/* <input type="text" placeholder="Enter code" name="mycountry" onChange={this.props.changeHandler}></input>
                <input type="text" placeholder="Enter Category" name="mycategory" onChange={this.props.chosenCategory}></input> */}

            <DropdownButton
                alignRight
                title= {this.state.drpList.countryTitle}
                id="dropdown-menu-align-right"
                onSelect={this.props.chosenCountry}
              
            >
                <Dropdown.Item eventKey="us">USA</Dropdown.Item>
                <Dropdown.Item eventKey="ca">Canada</Dropdown.Item>
                <Dropdown.Item eventKey="in">India</Dropdown.Item>
                <Dropdown.Item eventKey="au">Australia</Dropdown.Item>
                <Dropdown.Item eventKey="sa">South Africa</Dropdown.Item>
                <Dropdown.Item eventKey="eg">Egypt</Dropdown.Item>
           
            </DropdownButton>
            <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={this.props.chosenCategory}
                
            >
                <Dropdown.Item eventKey="technology">Technology</Dropdown.Item>
                <Dropdown.Item eventKey="general">General</Dropdown.Item>
                <Dropdown.Item eventKey="business">Business</Dropdown.Item>
                <Dropdown.Item eventKey="politics">Politics</Dropdown.Item>
                <Dropdown.Item eventKey="health">Health</Dropdown.Item>
                <Dropdown.Item eventKey="sports">Sports</Dropdown.Item>
         
            </DropdownButton>
      

            </div>
            
        );
    }
}

export default DropDownMenu;
