import JobService from './JobService.js'
import Car from '../../models/Car.js';

let jobService = new JobService()


function drawJob(jobs) {
    let template = ''
    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        template += `
        <div style="outline: 1px solid black" class="col-3">
        <p>Company: ${job.company}</p>
        <p>Job Title:${job.jobTitle}</p>
        <p>Hours: ${job.hours}</p>
        <p>Rate: ${job.rate}</p>
        <p>Description: ${job.description}</p>
        <button onclick="app.controllers.jobController.deleteJob('${job._id}')">BUHLETE</button>
        </div>`
    }
    document.getElementById('submissions').innerHTML = template
}


export default class JobController {
    constructor() {

    }
    jobSetup() {
        let template = `
        <form onsubmit="app.controllers.jobController.postJob(event)">
        <h3>Post Your Job: Your House:</h3>
        <label for="company">Company</label>
        <input type="text" name="company" placeholder="Company" required>
        
        <label for="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        
        <label for="hours">Hours</label>
        <input type="number" name="hours" placeholder="Hours" required>
        
        <label for="rate">Rate</label>
        <input type="text" name="rate" placeholder="Rate" required>

        <label for="description">Job Description</label>
        <input type="text" name="description" placeholder="Describe the Position" required>
        
        <button type="submit">Post Job</button>
        </form>
        `
        document.getElementById('form').innerHTML = template
        jobService.getJobs(drawJob)
    }

    postJob(e) {
        e.PreventDefault();
        let formData = e.target;
        jobService.postJob(formData, drawJob)
        formData.reset()

    }

    deleteJob(jobId) {
        jobService.deleteJob(jobId, drawJob)
    }
}