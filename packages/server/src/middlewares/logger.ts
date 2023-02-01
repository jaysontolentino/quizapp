//https://codesource.io/creating-a-logging-middleware-in-expressjs/
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { NextFunction, Request, Response } from "express";

const getDurationInMilliseconds = function(start: [number, number]) {
    const NS_PER_SEC = 1e9; //  convert to nanoseconds
    const NS_TO_MS = 1e6; // convert to milliseconds
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
}

const logToFile = function(filename: string, log: string) {
    fs.appendFile(path.join(__dirname, '..' , 'logs/' + filename + '.txt'), log + '\n', err => {
        if(err) console.log(err.message)
    })
}

export const logger = function(req: Request, res: Response, next: NextFunction) {
    let date_time = new Date()
    let y = date_time.getFullYear()
    let m = date_time.getMonth() + 1
    let d = date_time.getDate()
    let hr = date_time.getHours()
    let min = date_time.getMinutes()
    let sec = date_time.getSeconds()

    const fomatted_date = `${y}-${m}-${d} ${hr}:${min}:${sec}`

    const method = req.method
    const url = req.url
    const status = res.statusCode
    const start = process.hrtime()
    const duration = getDurationInMilliseconds(start)

    const durationStr = duration.toLocaleString() + ' ms'
    
    let log = `[${fomatted_date}] - [${method}] - ${url} ${status} ${durationStr}`

    console.log(`[${chalk.blue(fomatted_date)}] - [${method}] - ${url} ${status} ${chalk.green(durationStr)}`)
    logToFile('req_logs', log)
    
    next()
}