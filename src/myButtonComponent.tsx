import React from "react";
import {Button} from "react-bootstrap";

interface State {
}
interface Props {
    SaveOnClick?: (e:any) => void;
    dataSaved: boolean;
    isLoading: boolean;
}

class ISaveButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }

    simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    saveBtnHandler = (e:any):void => {
        const {SaveOnClick} = this.props;
        if (SaveOnClick !== undefined && SaveOnClick !== null) {
            SaveOnClick(true);
        }
    }

    componentWillMount() {

    }

    render() {
        const isLoading = this.props.isLoading;
        return (
            <Button
                disabled={isLoading as boolean ? true : false}
                onClick={this.saveBtnHandler}
                className='saveBtn'
                size="sm"
                variant="dark"
            >{isLoading ? 'Loading…' : 'Save'}
            </Button>
        )
    }
}

export default ISaveButton;