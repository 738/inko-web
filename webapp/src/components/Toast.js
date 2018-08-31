import React from 'react';
import styled, { keyframes } from 'styled-components';

const easeIn = keyframes`
  0% {
    bottom: -50px;
  }

  100% {
    bottom: 0px;
  }
`;

const easeOut = keyframes`
  0% {
    bottom: 0px;
  }

  100% {
    bottom: -50px;
  }
`;

const ContainerView = styled.div`
    height: 50px;
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
    animation: ${props => props.isOpen ? easeOut : easeIn} 0.8s;
`;

const Message = styled.div`
    font-size: 16px;
    letter-spacing: 2px;
`;

class Toast extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.isOpen) {
            setTimeout(() => {
                this.props.onRequestClose && this.props.onRequestClose();
            }, this.props.autoHideDuration || 3000);
        } else {
            
        }
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        if (this.props.isOpen) {
            return (
                <ContainerView>
                    <Message>{this.props.message}</Message>
                </ContainerView>
            );
        }
        return null;
    }

}

export default Toast;
