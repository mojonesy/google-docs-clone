import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { updateDoc, collection, doc } from "firebase/firestore";

export default function EditDocs({ database }) {
    let params = useParams();
    const collectionRef = collection(database, 'docsData');
    const [docsDesc, setDocsDesc] = useState('');
        const getQuillData = (value) => {
            setDocsDesc(value);
        }
    
    // After typing, the 'updateDoc' function will run after 1 second and give an alert.
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
            .then(() => {
                alert('Saved')
            })
            .catch(() => {
                alert('Cannot Save')
            })
        }, 1000)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc, collectionRef, params.id]);


    return (
        <div>
            <h1>Edit Docs</h1>

            <ReactQuill 
                value={docsDesc}
                onChange={getQuillData}
            />
        </div>
    )
}