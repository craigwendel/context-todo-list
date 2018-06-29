import React from 'react';

const SnackBarContext = React.createContext();

export default class SnackBarProvider extends Component {
    state = {
        isOpen: false,
        message: ''
    }

    openSnackbar = message => {
        this.setState({
            message,
            isOpen: true,
        });
    };
    
    closeSnackbar = () => {
        this.setState({
            message: '',
            isOpen: false,
        });
    };

    render() {
        return (
            <SnackBarContext.Provider value={{ 
                state: { 
                    openSnackbar: this.openSnackbar,
                    closeSnackbar: this.closeSnackbar,
                    snackbarIsOpen: this.state.isOpen,
                    message: this.state.message,
                } 
            }}>
                <SharedSnackbar />
                {this.props.children}

            </SnackBarContext.Provider>
        );
    }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;