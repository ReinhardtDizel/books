import React from "react";
import Modal from "react-bootstrap/Modal";

interface State {
    showPopUp: boolean;
}
interface Props {
    showPopUp: boolean;
    setShow: (e:boolean) => void;
}

class Popup extends React.Component<Props,State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            showPopUp: false,
        };
        this.setShow = this.setShow.bind(this);
    }

    setShow = (e:boolean) => {
        const {setShow} = this.props;
        setShow(this.state.showPopUp);
        this.setState({});
    }


    render() {
        const {showPopUp} = this.props;
        return (
            <>
                <Modal
                    show={showPopUp}
                    onHide={ () => {this.setShow(this.state.showPopUp)}}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Saved Successfully
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        </p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Popup;