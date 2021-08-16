import './App.css';

import React from "react";
class App extends React.Component {
  state = {
    FullName: "Ranim Amor",
    Bio:"22 years old",
    imgSrc:"https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg",
    profession:"Software engineering student",
    shows:false,
    date: new Date()
  };
  
 handleClick=()=>this.setState({shows:!this.state.shows});
 componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
tick() {
  this.setState({
    date: new Date()
  });
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
  render(){
    return <>
 <div style={{textAlign:"center",marginTop:"50px"}}>
   <button style={{backgroundColor:"#42424c", color:"white",borderStyle: "none", height:"35px", width:"80px"}}onClick={this.handleClick}> ClickMe</button>
   <h2> {this.state.date.toLocaleTimeString()}</h2>

 </div>
    {(this.state.shows )?(
    <div style={{textAlign:"center"}}>
      <img width="400px" height="400px" src={this.state.imgSrc}></img>
    <h1 style={{color:"#187562"}}> {this.state.FullName}</h1>
    <h2 style={{color:"#232232"}}>{this.state.profession}</h2>
    <h2 style={{color:"#232232"}}> {this.state.Bio}</h2>

    </div>)
    
    :(<h2 style={{textAlign:"center",color:"#187562"}}>Click On The Button</h2>)}

    
    </>
  }
 }

export default App;
