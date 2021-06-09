jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false},
]

const activeJobs = jobs.filter(function(job){                       //normal callback func
    return job.isActive;
});

const arrow_activeJobs = jobs.filter(job => job.isActive);          //arrow callback func

console.log("normalFunction: ",activeJobs);
console.log("ArrowFunction: ",arrow_activeJobs);