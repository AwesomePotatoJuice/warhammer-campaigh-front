import React from "react";

class DedicatedTransportComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const style = {
            backgroundColor: "black",
            width: "100px",
            height: "100px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "inline-block",
            color: "white"
        };
        return (
            <div style={style}>DedicatedTransport</div>
        );
    }
}
export default DedicatedTransportComponent;

