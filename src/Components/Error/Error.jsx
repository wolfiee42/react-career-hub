import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h2>opps. Wrong url</h2>
            <Link to={'/'}>Go back to Home Page</Link>
        </div>
    );
};

export default Error;