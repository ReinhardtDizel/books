import React from "react";
import {Button} from "react-bootstrap";

interface State {
    saveBtnClicked: boolean;
}
interface Props {
    SaveOnClick?: (e:any) => void;
}

class myButtonComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            saveBtnClicked: false,
        };
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }

    saveBtnHandler = (e:any):void => {
        const {SaveOnClick} = this.props;
        const _saveBtnClicked = this.state.saveBtnClicked;
        if (SaveOnClick !== undefined && SaveOnClick !== null) {
            SaveOnClick(_saveBtnClicked);
        }
    }

    render() {
        return (
            <Button
                onClick={()=>{this.saveBtnHandler(this.state.saveBtnClicked)}}
                className='saveBtn'
                size="sm"
                variant="dark"
            >Save
            </Button>
        )
    }
}

export default myButtonComponent;