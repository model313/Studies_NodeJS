// Jobs Controller

const Job = require('../models/Job')  // Creates collection when running (even w/o invoking)
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}

const getJob = async (req, res) => {
  res.send('get job')
}

const createJob = async (req, res) => {
  // Add user data to req.body for createdBy data field in Jobs schema
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  
  res.status(StatusCodes.CREATED).json({ job })
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