import type { Route } from "./+types/home"
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import Resumecards from "~/components/Resumecards";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate-ai" },
    { name: "description", content: "A smart Feeback for your Dream Job" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect( () =>{
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

      <Navbar />
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Track Your Application and Resume Ratings </h1>
                <h2>Review your submissions and check AI-powered feedback.</h2>
            </div>

      {resumes.length > 0 &&  (
    <div className="resumes-section">
        {resumes.map(  (resume)=>(
            <Resumecards key={resume.id} resume={resume}/>
        ))}
    </div>
      )}
        </section>
    </main>

}
