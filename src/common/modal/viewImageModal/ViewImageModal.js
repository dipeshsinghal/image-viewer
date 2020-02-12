import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import './ViewImageModal.css';
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

class ViewImageModal  extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
        }

    }

    render() {
        return (
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.openImageViewModal}
                    onClose={this.props.onCloseImageViewModal}
                    onBackdropClick={this.props.onCloseImageViewModal}
                >
                    <div className="modal-div">
                        <Card>
                            {/* <CardMedia
                                image={this.props.openImageViewMediaObj.images.standard_resolution.url}
                                title={this.props.openImageViewMediaObj.images.standard_resolution.url}
                            /> */}
                        </Card>
                    </div>
                </Modal>
        );
    }
}

export default ViewImageModal;
