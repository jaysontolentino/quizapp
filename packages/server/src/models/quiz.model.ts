import mongoose, { Document, Schema } from 'mongoose'

type TAnswer = 'a' | 'b' | 'c' | 'd'

interface IOption {
    value: TAnswer
    label: string
}

const OptionSchema = new Schema<IOption>({
    value: String,
    label: String
})

export interface IQuiz {
    q_id: number
    question: string
    options: IOption[]
    answer: TAnswer
}

interface IquizSchema extends IQuiz, Document {}

const QuizSchema = new Schema({
    q_id: Number,
    question: String,
    options: [OptionSchema],
    answer: String
})

export default mongoose.model<IquizSchema>('Quiz', QuizSchema)