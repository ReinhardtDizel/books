import React from "react";
import {Button} from "react-bootstrap";

interface State {
    saveBtnClicked: boolean;
    isLoading: boolean;
}
interface Props {
    SaveOnClick?: (e:any) => void;
}

class ISaveButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLoading:false,
            saveBtnClicked: false,
        };
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }

    simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    setLoading = (e:boolean):void => {
        this.setState({
            isLoading: e,
        });
    }
    setClicked = (e:boolean):void => {
        console.log("set")
        this.setState({
            saveBtnClicked: e,
        });
    }


    saveBtnHandler = (e:any):void => {

        this.setClicked(true);



        const {SaveOnClick} = this.props;
        if(SaveOnClick) {
            const _saveBtnClicked = this.state.saveBtnClicked;

            console.log(_saveBtnClicked)

            if (SaveOnClick !== undefined && SaveOnClick !== null) {
                SaveOnClick(true);
            }
            this.setLoading(true);
            this.simulateNetworkRequest().then(() => {
                this.setLoading(false);
            });
        }

    }

    componentWillMount() {
        console.log("will")
        this.setClicked(false);
        this.setLoading(false);
    }

    render() {
        return (
            <Button
                disabled={this.state.isLoading}
                onClick={()=>{this.saveBtnHandler(this.state.saveBtnClicked)}}
                className='saveBtn'
                size="sm"
                variant="dark"
            >{this.state.isLoading ? 'Loading…' : 'Save'}
            </Button>
        )
    }
}

export default ISaveButton;