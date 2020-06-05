import React, { Component } from 'react';

export const Home = function () {
  return <div className={'home'}>{"Welcome to our page"}</div>
}

export const About = function () {
  return <div className={'about'}>{"It's great here"}</div>
}

export class SpotCheck2 extends Component {

  constructor(){
    super()
    this.state = {
      currentPage: 'Home'
    }
  }

  togglePage = ()=> {
    if(this.state.currentPage ==='Home'){
      this.setState({
        currentPage:'About'
      })
    } else {
      this.setState({
        currentPage:'Home'
      })
    }
  }

  render() {
    return (
      <div >
        {this.state.currentPage==='Home' ? <Home /> : <About />}
        <button onClick={this.togglePage}>Toggle</button>
      </div>
    );
  }
}


