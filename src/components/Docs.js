import React, { useEffect, useState, useRef } from "react";
import ModalComponent from "./Modal";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import './Docs.css';

export default function Docs({ database }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('');
    const [docsData, setDocsData] = useState([]);
    
    const collectionRef = collection(database, 'docsData');
    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            }))
        })
    }

    // If 'isMounted.current' is true, return nothing - prevents concurrent rendering.
    //  Set 'isMounted.current to true and call getData().
    const isMounted = useRef();
    useEffect(() => {
        if(isMounted.current) {
            return
        }
        
        isMounted.current = true;
        getData();
    }, []);

    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
        .then(() => {
            alert('Data Added')
            handleClose()
        })
        .catch(() => {
            alert('Cannot add data')
        });
    }

    return (
        <>
            <h1>Docs Clone</h1>

            <button 
             className='add-docs'
             onClick={handleOpen}
            >
                Add a Document
            </button>
        <div className='grid-main'>
            {docsData.map((doc) => {
                return (
                    <div className='grid-child'>
                        <p>{doc.title}</p>
                    </div>
                );
            })}
        </div>
            <ModalComponent 
             open={open} 
             setOpen={setOpen}
             title={title} 
             setTitle={setTitle}
             addData={addData}
            />
        </>
    );
}