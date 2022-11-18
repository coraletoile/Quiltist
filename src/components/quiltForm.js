import React, { Component } from 'react';
import "../styles.css"


class QuiltForm extends Component {
    constructor (){
        super()
        
    }




    render () {


        return (
            <form className = 'create'>
                <h3>Add a New Quilt </h3>
                <label> Quilt Name </label>
                <input type="text" 
                onChange={e => this.props.updateData('quiltName', e.target.value)}></input>

                <label> Giftee </label>
                <input type="text" 
                onChange={e => this.props.updateData('giftee', e.target.value)}></input>

                <label> Completion Season </label>
                <input type="text" 
                onChange={e => this.props.updateData('completion', e.target.value)}></input>

                <label> Pattern </label>
                <input type="text" 
                onChange={e => this.props.updateData('pattern', e.target.value)}></input>     

                <label> Notes </label>
                <input type="text" 
                onChange={e => this.props.updateData('notes', e.target.value)}></input>  
                <button> Add Quilt</button>

            </form>
        )
    }
}


export default QuiltForm; 