import React, { Component } from 'react';
import "../styles.css"


class QuiltDetails extends Component {
    

    

    render () {
        const handleClick = async () => {
            const response = await fetch('/api/quilts/' + this.props.quilts._id, {
                method: 'DELETE'
            })
            const json = await response.json()
            if (response.ok){

            }
        }
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
                <button> Update Quilt </button>
                <button> Delete Quilt </button>
               
               

            </div>
        )
    }
}

export default QuiltDetails; 