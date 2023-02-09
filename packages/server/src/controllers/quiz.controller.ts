import { NextFunction, Request, Response } from 'express'
import QuizService from './../services/quiz.service'

const getAllQuiz = async function(req: Request, res: Response, next: NextFunction) {
    try {
        let quizzes = await  QuizService.getAll()

        res.json({
            quizzes
        })
    } catch (error) {
        next(error)
    }
}

const getQuizById = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params
        let quiz = await QuizService.getByQuizNo(Number(id))

        res.json({
            quiz
        })
    } catch (error) {
        next(error)
    }
}

const getQuizScore = async function(req: Request, res: Response, next: NextFunction) {
    try {
        const {answers} = req.body

        let scores = 0

        for(let i = 0; i < answers.length; i++) {
            const qNo = Number(answers[i].id)
            const q = await QuizService.getByQuizNo(qNo)

            if(q?.answer === answers[i].value) {
                scores++
            }
        }

        console.log('user answers - ', answers)

        res.json({
            scores
        })
    } catch (error) {
        next(error)
    }
}


const createQuiz = async function(req: Request, res: Response, next: NextFunction) {
    try {
        let quiz = await QuizService.createQuiz({
            q_id: 2,
            question: 'What is 1 + 4?',
            options: [
                {
                    value: 'a',
                    label: '3'
                },
                {
                    value: 'b',
                    label: '5'
                },
                {
                    value: 'c',
                    label: '2'
                },
                {
                    value: 'd',
                    label: '11'
                }
            ],
            answer: 'b'
        })

        res.status(201)
        res.json({
            quiz
        })

    } catch (error) {
        next(error)
    }
}

const updateQuiz = async function(req: Request, res: Response, next: NextFunction) {
    try {
        
    } catch (error) {
        next(error)
    }
}

const deleteQuiz = async function(req: Request, res: Response, next: NextFunction) {
    try {
        
    } catch (error) {
        next(error)
    }
}

export default {
    getAllQuiz,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizScore
}