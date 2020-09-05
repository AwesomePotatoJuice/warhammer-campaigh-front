import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount()
    {
        let canvas = document.getElementById('circle');
        if (canvas.getContext)
        {
            let ctx = canvas.getContext('2d');
            let X = canvas.width / 2;
            let Y = canvas.height / 2;
            let R = 150;
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }
    render() {
        const style = {
            backgroundColor: "yellow",
            position: "absolute",
            right: "-200px",
            top: "-200px"
        };

        return (
            <div style={style}>
                <canvas id="circle" width="400" height="400"/>
            </div>
        );
    }
}
export default Carousel;

