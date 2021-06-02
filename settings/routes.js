'use strict'

module.exports = (app) => {
    const passport = require('passport')
    const usersController = require('./../Controller/UsersController')
    const postsController = require('./../Controller/PostsController')
    const questionsController = require('./../Controller/QuestionsController')

    const cors = require('cors')


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
        .get(passport.authenticate('jwt', {session: false}), postsController.getPosts)

    //questions routes

    app
        .route('/api/questions')
        /*.get(passport.authenticate('jwt', { session: false }), usersController.getAllQuestions)*/
        .get(questionsController.getAllQuestions)
    app
        .route('/api/questions/add')
        /*.get(passport.authenticate('jwt', { session: false }), usersController.getAllQuestions)*/
        .post(questionsController.addQuestion)

/*    app
        .route('/cors')
        .get*/

   /* app.use(cors())*/

    app.get('/products/:id', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.json({msg: 'This is CORS-enabled for all origins!'})
    })


}