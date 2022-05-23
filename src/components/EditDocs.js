import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function EditDocs() {
    let params = useParams();
    const [docsDesc, setDocsDesc] = useState('');
        const getQuillData = (value) => {
            setDocsDesc(value);
        }

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