import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Fileuploader = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()} className="p-4">
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center">
                        <img src="/icons/info.svg" alt="upload" className="size-20"/>
                    </div>
                </div>
            </div>
            </div>

    );
};

export default Fileuploader;
