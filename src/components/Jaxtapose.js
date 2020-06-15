import React from 'react'
import ReactDOM from 'react-dom'
import './css/tstx_jaxtapose.css'

/**
* You must set two children in component
*/
export class Jaxtapose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position || 50,
            componentWidth: undefined
        };
        this.wrapperElement = null;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    setPosition(p) {
        if (p < 0) p = 0
        else if (p > 100) p = 100
        this.setState({
            position: p
        });
    }

    onMouseMove(e) {
        const cx = e.touches ? e.touches[0].clientX: e.clientX;
        this.setPosition((cx - e.currentTarget.offsetLeft) / e.currentTarget.clientWidth * 100);
    }

    onClick(e) {

    }

    resize = () => {
        this.setState({
            componentWidth: ReactDOM.findDOMNode(this.refs.wrapperElement).getBoundingClientRect().width
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
        this.resize();
    }

    render() {
        // const width = (this.props.width || 400) + 'px';
        // const height = (this.props.height || 300) + 'px';
        // const wrStyle = {
        //     width: width,
        //     height: height
        // };
        const childStyle = {
            position: 'absolute',
            //width: 'auto',
            height: 'auto',
            top: '50%',
            transform: 'translateY(-50%)'
        };
        if (this.state.componentWidth > 0) {
            childStyle.width = this.state.componentWidth + 'px';
        }
        else {
            childStyle.display = 'none';
        }
        const { children } = this.props;
        const child0 = React.cloneElement(children[0], {
            style: {...children[0].props.style, ...childStyle, left: 0}
        });
        const child1 = React.cloneElement(children[1], {
            style: {...children[1].props.style, ...childStyle, right: 0}
        });
        return (
            <div ref="wrapperElement" className="tstx_jaxtapose_wr" onTouchMove={this.onMouseMove} onMouseMove={this.onMouseMove} onClick={this.onClick}>
                <div className="tstx_jax_slide __left" style={{width: this.state.position+'%'}}>
                    {child0}
                </div>
                <div className="tstx_jax_slide __right" style={{width: 100-this.state.position+'%'}}>
                    {child1}
                </div>
                <div className="tstx-jaxtapose_delimeter" style={{left:this.state.position+'%', borderColor: this.props.delimeterColor}}></div>
                <p className="tstx_jax_label __left" style={{fontSize: this.props.fontSize+'px'}}>{this.props.leftText}</p>
                <p className="tstx_jax_label __right" style={{fontSize: this.props.fontSize+'px'}}>{this.props.rightText}</p>
            </div>
        );
    }
}

export default Jaxtapose
