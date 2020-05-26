import React from "react";

class BaseShipComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {display: "none"}
        this.onClickShip = this.onClickShip.bind(this)
    }
    render() {
        let label;
        let sizeMod = 1;
        if (this.props.scout)
            sizeMod = 0.70;
        let width = 100 * sizeMod + "%";
        let height = 50 * sizeMod + "%";
        const style = {
            width: '50px',
            height: '50px',
            color: 'white',
            zIndex: 100,
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
            display: "flex",
            flexDirection: "row"

        };
        const styleWindow = {
            width: '50px',
            height: '50px',
            color: 'white',
            zIndex: 100,
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
            display: this.state.display,
            flexDirection: "row"

        };
        if (this.props.scout)
            label = this.props.player + " scout ";
        else
            label = this.props.player + " battleship ";

        return (
            <div style={style}>
                <img onClick={this.onClickShip} src={this.props.src} alt={"ship"} width={width} height={height}/><div style={styleWindow}>{label}</div>
            </div>
        );
    }
    onClickShip(){
        if(this.state.display === "")
            this.setState({display: "none"})
        if(this.state.display === "none")
            this.setState({display: ""})
    }
}
export default BaseShipComponent;

