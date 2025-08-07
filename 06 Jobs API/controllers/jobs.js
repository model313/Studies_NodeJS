// Jobs Controller

const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}

const getJob = async (req, res) => {
  res.send('get job')
}

const createJob = async (req, res) => {
  res.send('create')
}

const updateJob = async (req, res) => {
  res.send('update')
}

const deleteJob = async (req, res) => {
  res.send('delete')
}


module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob
}