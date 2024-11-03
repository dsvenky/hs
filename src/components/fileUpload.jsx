import React, { useState } from 'react'
// component working for img,pdf
const FileUpload = () => {
    //const Accept=[".xlsx", ".xls", ".csv", ".png", ".doc", ".docx", ".pdf"];
    const [file,setfile] = useState(null);
    const [filePreview,setfilePreview] =useState("");
    const uploadfiles =(e)=>{
     let  v =e.target.files[0];
       if(v){
        setfile(v);
        if(v.type.startsWith("image/")){
        setfilePreview(URL.createObjectURL(v));
        }
       }
    };

  return (
    <>
    <input type="file" name="file" onChange={uploadfiles}  accept=".xlsx, .xls, .csv, .png, .doc, .docx, .pdf"/>
    <div>FileUpload</div>
    {file && (
                <>
                    <div>
                        <strong>Selected File:</strong> {file.name}
                    </div>
                    {file.type.startsWith('image/') ? ( // Check if it's an image
                        <img 
                            src={filePreview} 
                            alt="file preview" 
                            className="mt-2" 
                            style={{ maxWidth: '100%', maxHeight: '300px' }} // Set image size
                        />
                    ) : (
                        <div className="mt-2">
                            <strong>File Preview:</strong> 
                            {file.type.startsWith('application/pdf') ? (
                                <span>PDF file (no preview available)</span>
                            ) : (
                                <span>{file.type} file (no preview available)</span>
                            )}
                        </div>
                    )}
                </>
            )}       
    
    </>
  )
}

export default FileUpload