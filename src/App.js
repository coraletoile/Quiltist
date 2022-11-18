import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import QuiltDetails from './Components/quiltDetails'
import QuiltForm from './Components/quiltForm'
import "./styles.css"

class App extends Component {

    constructor() {
        super()
        this.state = {
            quilts: [],
            quiltForm: []

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
  
    //this.handleclick = this.handleClick.bind(this)

    }
/*
    handleSubmit = () => {}
    updateData = (target, value) => {
        this.setState((prevState) => {
            return({
                ...prevState,
                target: 'value'
            })
        })
           
            
        }
        */

    render (){
        const QuiltBoxes = [];
        for (let i = 0; i < this.state.quilts.length; i++){
            QuiltBoxes.push(<QuiltDetails quilt={this.state.quilts[i]} key = {i} handleClick={this.handleClick}/> )}


        


        return (
            <div className='Home'>
                <div className='Header'>
                    <h1> Quiltist </h1>
                    <h4> Save important details about your pieces</h4>
                </div>
                <div ClassName='Quilt'>
                    {QuiltBoxes}
                </div>

                <div className= 'Form'>
                    <QuiltForm updateData= {this.updateData} />


                </div>
            </div>   
        )
    }
}
export default App; 