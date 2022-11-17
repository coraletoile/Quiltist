import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import QuiltDetails from './Components/quiltDetails'
import "./styles.css"

class App extends Component {

    constructor() {
        super()
        this.state = {
            quilts: []

        }
    }
/*
    componentDidMount() {
        fetch('http://localhost:3000/api/quilts')
        .then((response) => response.json())
        .then(console.log('it worked'))
    }
*/

  componentDidMount() {
    const apiUrl = '/api/quilts';
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                quilts: data
            });
            


            //add to state
            
            console.log('this is my data', data)
            console.log('this is state', this.state)
        })
        .catch((error) => {
            {error: "error in componentdidmount"}
        })
  }



    render (){
        const QuiltBoxes = [];
        for (let i = 0; i < this.state.quilts.length; i++){
            QuiltBoxes.push(<QuiltDetails quilt={this.state.quilts[i]} key = {i}/> )
        }


        


        return (
            <div ClassName= 'Home'>
                <div className='Header'>
                    <h1> Quiltist </h1>
                    <h4> Save important details about your pieces</h4>
                </div>
                <div ClassName= 'Quilt'>
                    {QuiltBoxes}
                </div>
            </div>   
        )
    }
}
export default App; 