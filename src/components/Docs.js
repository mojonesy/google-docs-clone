import React from "react";
import ModalComponent from "./Modal";

export default function Docs() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div>
            <h1>Docs Clone</h1>

            <button 
             className='add-docs'
             onClick={handleOpen}
            >
                Add a Document
            </button>

            <ModalComponent 
             open={open} 
             setOpen={setOpen} 
            />
        </div>
    );
}