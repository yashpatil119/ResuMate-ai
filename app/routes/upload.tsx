import React from 'react';
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import Resumecards from "~/components/Resumecards";
import {useState} from "react";
import Fileuploader from "~/components/Fileuploader";


const Upload = () => {
    const [isProcessing,setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

    // @ts-ignore
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">

            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                       <h1>
                           Smart Feedback for your dream job</h1>
                           {isProcessing ? (
                               <>
                                   <h2>{statusText}</h2>
                                   <img src="/images/resume-scan.gif" className="w-full"/>

                               </>
                           ) :(
                               <h2>Drop your resume for ATS score and improvement tips</h2>
                           )}
                    {!isProcessing && (
                         <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                                  <div className="form-div">
                                      <label htmlFor="company-name">Company Name</label>
                                      <input type="text" name="company-name" placeholder="Company Name"/>
                                  </div>
                             <div className="form-div">
                                 <label htmlFor="job-title">Job Title</label>
                                 <input type="text" name="job-title" placeholder="Job Title"/>
                             </div>
                             <div className="form-div">
                                 <label htmlFor="job-description">Job Description</label>
                                 <textarea rows={5} name="job-description" placeholder="job-description"/>
                             </div>
                             <div className="form-div w-full">
                                 <label htmlFor="uploader">Upload Resume</label>
                                     <div className="w-full">
                                         <Fileuploader/>
                                     </div>
                             </div>
                             <button className="primary-button" type="submit">
                                 Analyze Resume
                             </button>
                         </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Upload;