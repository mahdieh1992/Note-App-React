import React, { Component } from 'react'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)

    


    }

    inputColor(color) {
        this.props.receiveInputColor(color)
    }
    render() {
        let { color } = this.props

        return (
            <div className='color-box' style={{ backgroundColor: `${color}` }} onClick={this.inputColor = this.inputColor.bind(this,color)}>
            </div>

        )
    }
}
