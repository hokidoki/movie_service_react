import React, { Component } from 'react';
import './MyModal.css';
import { Button } from 'semantic-ui-react'

class MyModal extends Component {
 
    render() {
        return (
            <div className="MyModal">
                <div className="content">
                    <h3>
                        정말 삭제하시겠습니까 ?
                </h3>
                    <Button onClick={this.props.delete}>확인</Button>
                    <Button onClick={this.props.onClose}>취소</Button>
                </div>
        </div>
        )
    }
}

export default MyModal;