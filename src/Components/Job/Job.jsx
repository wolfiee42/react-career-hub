import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, job_title, logo, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="" className="w-24 h-7 flex-grow-0" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="border border-[#9873FF] rounded text-[#9873FF] p-2 font-bold mr-4 hover:bg-[#9873FF] hover:text-white duration-200">{remote_or_onsite}</button>
                        <button className="border border-[#9873FF] rounded text-[#9873FF] p-2 font-bold mr-4  hover:bg-[#9873FF] hover:text-white duration-200">{job_type}</button>
                    </div>
                    <div className="flex justify-start items-center gap-6">
                        <div className="flex">
                            <MdLocationOn className="text-3xl"></MdLocationOn>
                            <p className="text-xl">{location}</p>
                        </div>
                        <div className="flex">
                            <HiCurrencyDollar className="text-3xl"></HiCurrencyDollar>
                            <p className="text-xl">{salary}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/jobs/${id}`}>
                            <button className="btn bg-[#9873FF] text-white font-bold hover:bg-white hover:text-[#9873FF] hover:border-[#9873FF]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;