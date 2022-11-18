import React, { Component } from 'react';
import "../styles.css"


class QuiltDetails extends Component {
    

    

    render () {
       // const {QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes} = this.props.quilt
       const { QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes } = this.props.quilt;


        console.log('this.props', this.props.quilt)
       
        return (
            <div className= 'quiltDetails'>
                <h2>{QuiltName}</h2>
                <span><b>Giftee:</b> {Giftee}</span>
                <span><b>Completed:</b> {CompletionSeasonYear}</span>
                <span><b>Pattern:</b> {Pattern}</span>
                <span><b>Notes:</b> {Notes}</span>
                <button id='update'> update quilt </button>
                <button id= 'delete'> delete quilt </button>

            </div>
        )
    }
}

export default QuiltDetails; 