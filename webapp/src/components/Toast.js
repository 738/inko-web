import React from 'react';
import styled from 'styled-components';

const TOAST_HEIGHT = 45;

const ContainerView = styled.div`
    height: ${TOAST_HEIGHT}px;
    width: 300px;
    background-color: rgba(219, 53, 147, 0.85);
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s;
    -webkit-transition: 0.8s;
`;

const Message = styled.div`
    font-size: 16px;
    letter-spacing: 2px;
`;

class Toast extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.isOpen) {
            setTimeout(() => {
                this.props.onRequestClose && this.props.onRequestClose();
            }, this.props.autoHideDuration || 3000);
        }
    }

    render() {
        return (
            <ContainerView style={this.props.isOpen ? {} : { bottom: -TOAST_HEIGHT + 'px', opacity: '0' }}>
                <Message>{this.props.message}</Message>
            </ContainerView>
        );
    }

}

export default Toast;
