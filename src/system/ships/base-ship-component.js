import React from "react";

class BaseShipComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let sizeMod = 1;
        if (this.props.scout)
            sizeMod = 0.70;
        let width = 100 * sizeMod + "%";
        let height = 50 * sizeMod + "%";
        const style = {
            width:'50px',
            height:'50px',
            color:'white',
            zIndex: 100,
            position: "absolute",
            top: this.props.top,
            left: this.props.left

        };
        return (
            <div style={style}>
                <img src={this.props.src} alt={"ship"} width={width} height={height}/>
            </div>
        );
    }
}
export default BaseShipComponent;

