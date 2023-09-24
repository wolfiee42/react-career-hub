import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Feature = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDatalength] = useState(4)
    useEffect(() => {
        jobsInfo()
    }, [])
    const jobsInfo = async () => {
        const response = await fetch('jobs.json');
        const data = await response.json();
        setJobs(data)
    }
    return (
        <div>
            <div className="text-center">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDatalength(jobs.length)} className="btn"> Show All</button>
            </div>
        </div>
    );
};

export default Feature;