import React from "react";

class BasePlanetComponent extends React.Component {
    constructor(props) {
        super(props)
        this.that = React.createRef();
        this.canvas = React.createRef();


    }
    componentDidMount() {
    }

    render() {
        // let position = this.canvas.current.getBoundingClientRect();
        const style = {
            width:'75px',
            height:'75px',
            color:'white',
            zIndex: 100,
            position: "absolute",
            top: this.props.top,
            left: "50%",

        };
        return (
            <div ref={this.canvas}  style={style}>
                <img src={this.props.src} alt={"planet"} width="70%" height="70%"/>
            </div>
        );
    }
}
export default BasePlanetComponent;

