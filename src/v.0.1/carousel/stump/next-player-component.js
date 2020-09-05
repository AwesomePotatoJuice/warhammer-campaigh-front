import React from "react";
import Sidebar from "react-sidebar";
import Button from "@material-ui/core/ButtonBase";

const players = {
    an: "Андрей",
    al: "Алексей",
    nik: "Никита",
    tech: "Технический"
}

class nextPlayerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeNextPlayer = this.onChangeNextPlayer.bind(this)
    }
    render() {
        const position = {
            backgroundColor: "black",
            width: "133px",
            height: "100px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "inline-block",
            color: "white",
            position: "absolute",
            right: "0px",
            marginBottom: "10px",
            zIndex:"100"
        };
        return (
            <div style={position}>
                <div>Текущий игрок: {this.props.currentPlayer}</div>
                <div>Текущий ход: {this.props.turnCounter}</div>
                <Button onClick={this.onChangeNextPlayer}>
                    Следующий!
                </Button>
            </div>
        );
    }

    onChangeNextPlayer() {
        let b = window.confirm("Are u sure?");
        return b ? this.props.onChangeNextPlayer() : null;
    }
}
export default nextPlayerComponent;

