import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savejobApplication } from "../utilities/utilities";

const JobsDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const joob = jobs.find(job => job.id === idInt)
    console.log(joob);
    const { job_description, job_responsibility, educational_requirements, experiences } = joob
    const notify = () => {
        toast("Applied Successfully!");
        savejobApplication(id)
        
    }
    return (
        <div className="my-5 flex justify-center items-center gap-10">
            <div className=" max-w-2xl">
                <h2 className="my-3"><span className="font-semibold">Jobs Description:</span>  {job_description}</h2>
                <h2 className="my-3"><span className="font-semibold">Jobs Responsibilities:</span>  {job_responsibility}</h2>
                <h2 className="my-3"><span className="font-semibold">Education Requirements:</span>  {educational_requirements}</h2>
                <h2 className="my-3"><span className="font-semibold">Experience:</span>  {experiences}</h2>
            </div>
            <div>
                <Link>
                <button onClick={notify} className="border border-[#9873FF] rounded text-[#9873FF] p-2 font-bold mr-4 hover:bg-[#9873FF] hover:text-white duration-200">Apply now</button>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobsDetails;