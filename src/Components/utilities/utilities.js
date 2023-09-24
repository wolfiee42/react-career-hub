const getStorageData = () => {
    const storedData = localStorage.getItem('job-application');
    if (storedData) {
        return JSON.parse(storedData)
    }
    return [];
}

const savejobApplication = (id) => {
    const storedJobApplication = getStorageData();
    const isExist = storedJobApplication.find(jobId => jobId === id)
    if (!isExist) {
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }
}
export {getStorageData, savejobApplication}