"use client"


import React from 'react'
import { Upload } from 'lucide-react';
import axios from "axios";
function File() {

    const uploadFile = async()=>{
        const el = document.createElement("input");
        el.setAttribute("type" , "file");
        el.setAttribute("accept" , "application/pdf");
        el.click();
        el.addEventListener("change" , (e)=>{
            if(e?.target && e.target.files ){
                const files = el.files;

                if (files && files.length > 0) {
                    const file = files[0]; // grab the first file

                    const formData = new FormData();
                    formData.append("pdf", file);

                    axios.post("http://localhost:4000/upload/pdf", formData)
                        .then(res => console.log("✅ Upload success:", res.data))
                        .catch(err => console.error("❌ Upload failed:", err));
                }

            }
        })

    }

  return (
      <div onClick={uploadFile} className='bg-gray-700 mt-2 flex flex-col justify-center items-center  rounded-2xl w-36 h-16  border-white border-1'>
          <div className=''>upload pdf</div>
          <Upload color="#ffffff" />
    </div>
  )
}

export default File
