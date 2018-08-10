import JobService from './JobService.js'

let jobService = new JobService()


function drawJob() {
    let jobsCopy = jobService.getJobs()
    let template = ''
    for (let i = 0; i < jobsCopy.length; i++) {
        const job = jobsCopy[i];
        template += `
        <div class="col-3">
        <p>Make: ${job.position}</p>
        <p>${job.company}</p>
        <p>${job.salary}</p>
        <p>${job.location}</p>
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
        <label for="position">Position</label>
        <input type="text" name="position" placeholder="Position" required>
        
        <label for="company">Company</label>
        <input type="text" name="company" placeholder="Company" required>
        
        <label for="salary">Salary</label>
        <input type="number" name="salary" placeholder="Square Feet" required>
        
        <label for="location">Location</label>
        <input type="text" name="location" placeholder="Location" required>
        
        <button type="submit">Post Job</button>
        </form>
        `
        document.getElementById('form').innerHTML = template
        drawJob()
    }

    postJob(event) {
        event.PreventDefault();
        let formData = event.target;
        jobService.postJob(formData)
        formData.reset()
        drawJob()

    }
}