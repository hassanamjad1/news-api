import React, {Component} from 'react';

import {useState} from 'react';
import './App.css';
import DropDownMenu from './DropDownMenu';
import News from './News/News';
import NewSingle from './News/NewSingle.js';

// function App () {
//   return (
//     <div className ="App" >
//       <h1>Hey</h1>
//       <News/>
//     </div>
//   );
  
// }


function Newss(props) {
  return (
  <div>
    Enter Zip Code : 
    <input type="text" onChange={ props.changeHandler } />
  </div>
  
  );
}
// const [countryValue,setValue] = useState('');
// function Appo() {
//   const [countryValue,setValue] = useState('');
//   const selectedCountry=(e)=>{
//     console.log(e);
//     setValue(e)
//   }
 
//   return (
//     <div>
//       <h4>You selected {countryValue}</h4>
//     </div>
//   );
// }
class App extends Component{

  // const country = 'us';
  // const category = 'technology';
 
  state = {
    country : 'Country',
    category : 'Category',
    newsArray : [],
    
    // url : '',
  }
  
  

  handleCallBack = (categoryKeyword) => {
    this.setState({
      category : categoryKeyword.target.value,
    })
  }
  // callBackCategory = (categoryKeyword) => {
  //   this.setState({
  //     category : categoryKeyword
  //   })
  // }
  countryChanged = (event) =>{
    this.setState({
      country : event,
      category : this.state.category,
    })
    console.log(event);
    let countryVar = event;
    let categoryVar = this.state.category;
    let url = 'https://newsapi.org/v2/top-headlines?country='+ countryVar +'&category='+categoryVar+'&apiKey=7b38a50dc5ac4437b56c2f2290b9d8d8';

    if (countryVar.length === 2){
      fetch(url)
      .then((response) => {
          return response.json();
      })
      .then(data => {
          console.log(data.articles);
          this.setState({
              newsArray : data.articles,
              // totalNum : data.totalResults,
          });
      })
      .catch((error) => console.log(error));
  
    }
   
  }
  categoryChanged = (event) =>{
    this.setState({
      country : this.state.country,
      category : event,
    })
    let countryVar = this.state.country;
    let categoryVar = event;
    let url = 'https://newsapi.org/v2/top-headlines?country='+ countryVar +'&category='+categoryVar+'&apiKey=7b38a50dc5ac4437b56c2f2290b9d8d8';

    if (countryVar.length === 2){
      fetch(url)
      .then((response) => {
          return response.json();
      })
      .then(data => {
          console.log(data.articles);
          this.setState({
              newsArray : data.articles,
              // totalNum : data.totalResults,
          });
      })
      .catch((error) => console.log(error));
  
    }
   
  }
  selectedCountry = (select) => {
    console.log(select);
    // setValue(select);
  }

  render() {
    const {newsArray}  = this.state;

    // const [countryValue,setValue] = useState('');
    // const selectedCountry=(e)=>{
    //   console.log(e);
    //   // setValue(e)
    // }
 

    return (
      <div >
        <div className="App-header">
          <p>Worldwide News </p>
        </div>
        {/* {this.state.country} */}
        <a class="waves-effect waves-light btn-large">{this.state.country}</a>  
        <a class="btn-large disabled">{this.state.category}</a>
    

        <DropDownMenu chosenCategory={this.categoryChanged}   chosenCountry= {this.countryChanged}/>
        {/* <DropDownMenu selectedOption={this.selectedCountry} /> */}
        {/* {this.state.country} */}
        

  
        <div className ="App" >
          {/* <Newss newsArr = {this.state.newsArray} /> */}
          {newsArray.map((item) =>(
            <NewSingle key={item.url} item = {item} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;