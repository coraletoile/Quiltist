import React, { Component } from 'react';



class QuiltDetails extends Component {
    

    

    render () {
       // const {QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes} = this.props.quilt
       const { QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes } = this.props.quilt;


        console.log('this.props', this.props.quilt)
       
        return (
            <div className= 'quiltDetails'>
                <h4>{QuiltName}</h4>
                <h4>{CompletionSeasonYear}</h4>
                <h4>{Giftee}</h4>
                <h4>{Pattern}</h4>
                <h4>{Notes}</h4>
                <p> hello </p>

            </div>
        )
    }
}

export default QuiltDetails; 