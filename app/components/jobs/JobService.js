import Job from "../../models/Job.js"

let jobs = []

export default class JobService {
    constructor() {

    }
    getJobs() {
        let copyJobs = []
        jobs.forEach(j => {
            copyJobs.push({
                position: j.position,
                company: j.company,
                salary: j.salary,
                location: j.location
            })
        })
        return copyJobs
    }
    postJob(data) {
        let job = new Job(
            data.position.value,
            data.company.value,
            data.salary.value,
            data.location.value)
        jobs.push(job)
    }

}