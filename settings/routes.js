'use strict'

module.exports = (app) => {
    const passport = require('passport')
    const usersController = require('./../Controller/UsersController')
    const postsController = require('./../Controller/PostsController')
    const questionsController = require('./../Controller/QuestionsController')

    

    app
        .route('/api/auth/signup')
        .post(usersController.signup)

    app
        .route('/api/auth/signin')
        .get(usersController.signin)

    app
        .route('/api/users')
        /*.get(passport.authenticate('jwt', { session: false }), usersController.getAllUsers)*/
        .get(usersController.getAllUsers)

    app
        .route('/api/posts')
        .get(passport.authenticate('jwt', { session: false }), postsController.getPosts)

    //questions routes

    app
        .route('/api/questions')
        /*.get(passport.authenticate('jwt', { session: false }), usersController.getAllQuestions)*/
        .get(questionsController.getAllQuestions)
    app
        .route('/api/questions/add')
        /*.get(passport.authenticate('jwt', { session: false }), usersController.getAllQuestions)*/
        .post(questionsController.addQuestion)
}