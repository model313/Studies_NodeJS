// Jobs Controller

const Job = require("../models/Job") // Creates collection when running (even w/o invoking)
const { StatusCodes, OK } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllJobs = async (req, res) => {
  // Get all jobs associated with user

  const jobs = await Job
  .find({ createdBy: req.user.userId })
  .sort("createdAt")

  res.status(StatusCodes.OK).json({ jobs, count: jobs.length})
}

const getJob = async (req, res) => {
  // Get single job about user with route parameter

  const {
    user: { userId },
    params: { id: jobId },
  } = req

  const job = await Job
  .findOne({
    _id: jobId,
    createdBy: userId,
  })

  if (!job) {
    throw new NotFoundError(`No job with id: ${jobId}`)
  }

  res.status(StatusCodes.OK).json({ job })
}

const createJob = async (req, res) => {
  // Add user data to req.body for createdBy data field in Jobs schema
  req.body.createdBy = req.user.userId
  const job = await Job
  .create(req.body)

  res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
  res.send("update")
}

const deleteJob = async (req, res) => {
  res.send("delete")
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
