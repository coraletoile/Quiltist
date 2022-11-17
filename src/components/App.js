import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import QuiltDetails from '../Components/quiltDetails'

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
            let curr = this.state.quilts[i]
            QuiltBoxes.push(<QuiltDetails quilt={curr} key = {i}/> )
            console.log(this.state.quilts[i])
        }


        


        return (
            <section>
                 
                    <p> hi </p>
                    {QuiltBoxes}

            </section>
                   
                
        )
    }
}
export default App; 