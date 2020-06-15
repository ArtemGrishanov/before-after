import React from 'react'

export default class ProgressiveImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <img className={this.props.className} src={this.props.src}/>
    }
}
