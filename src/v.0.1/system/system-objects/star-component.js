import React from "react";

class StarComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
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
            <div style={style}>
                <img src={this.props.src} alt={"planet"} width="100%" height="100%"/>
            </div>
        );
    }
}
export default StarComponent;

