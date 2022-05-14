import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './Modal.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 150,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
};

export default function ModalComponent({ open, setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input
                        placeholder='Add the Title'
                        className='add-input'
                    />
                    <div className='button-container'>
                        <button
                            className='add-docs'
                        >
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}