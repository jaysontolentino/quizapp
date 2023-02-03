import mongoose from 'mongoose';
import { TCreateQuiz } from './../dto/quiz.dto';
import Quiz from './../models/quiz.model'

export default class QuizService {
    constructor() {}

    static async createQuiz(input: TCreateQuiz) {
        try {
            return await Quiz.create(input)
        } catch (error) {
            throw error
        }
    }

    static async getAll() {
        try {
            return await Quiz.find()
        } catch (error) {
            throw error
        }
    }

    static async getByQuizNo(id: number) {
        try {
            return await Quiz.findOne({q_id: id})
        } catch (error) {
            throw error
        }
    }

    static async delete(id: mongoose.Types.ObjectId) {
        try {
            return await Quiz.deleteOne({_id: id})
        } catch (error) {
            throw error
        }
    }

    static async update(id: mongoose.Types.ObjectId, payload: any) {
        try {
            return await Quiz.updateOne({_id: id}, payload)
        } catch (error) {
            throw error
        }
    }
}