import Banner from "../Banner/Banner";
import Feature from "../FeatureList/Feature";
import JobCategorylist from "../JobCategory/JobCategorylist";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategorylist></JobCategorylist>
            <Feature></Feature>
        </div>
    );
};

export default Home;