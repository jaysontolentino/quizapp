import { isAuthenticated } from './../middlewares/isAuthenticated';
import express from 'express'
import quizController from './../controllers/quiz.controller'

const router = express.Router()

router.use(isAuthenticated)

router.get('/', quizController.getAllQuiz)
router.post('/calculate-score', quizController.getQuizScore)
router.get('/:id', quizController.getQuizById)
router.post('/', quizController.createQuiz)
router.put('/:id', quizController.updateQuiz)
router.delete('/:id', quizController.deleteQuiz)

export default router