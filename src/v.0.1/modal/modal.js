import "./modal.css";
import React from "react";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return !I.is(this.props.data, nextProps.data);
    }

    render() {
        let isOpen = this.props.data.get("isOpen");
        return (
            <div className={`flex middle center modal ${isOpen ? "open" : ""}`}>
                {isOpen ?
                    (<div className={`row modal-content ${this.props.size || ""}`}>
                        <div className="col-12 middle modal-title">{this.props.title}</div>
                        <div className="col-12 modal-body">
                            {this.props.body}
                        </div>
                        <div className="col-12 middle modal-footer">{this.props.footer}</div>
                    </div>) : null
                }
            </div>);
    }
}

export default Modal;