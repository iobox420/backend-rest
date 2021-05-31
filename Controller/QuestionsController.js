'use strict'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const response = require('./../response')
const db = require('./../settings/db')
const config = require('./../config')

/*
exports.getAllQuestions = (req, res) => {
    const sql = ('SELECT `_id_post`, `id_user_create`, `question_text`, `date_create` FROM `table_ex`')
    db.query(sql, (e, rows, fields) => {
        if (e) {
            response.status(400, e, res)
        } else {
            response.status(200, rows, res)
        }
    })
}
*/

exports.getAllQuestions = (req, res) => {
    //Отключение CORS защиты
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader("Access-Control-Allow-Methods", "*");

    const sql = ('SELECT `_id_post`, `id_user_create`, `question_text`, `date_create` FROM `questions_posts`')
    db.query(sql, (error, rows, fields) => {
        if(error) {
            response.status(400, error, res)
        } else {
            response.status(200, rows, res)
        }
    })
}

exports.addQuestion = (req, res) => {
    let today = new Date().toISOString().slice(0, 10)
    const sql = ("INSERT INTO `questions_posts`(`question_text`, `date_create`) VALUES('" + req.body.text + "', NOW())")
    /*const sql = ("INSERT INTO `questions_posts`(`date_create`, `question_text`) VALUES('" + req.body.text + "', '" + today + "')")*/
    db.query(sql, (error, results) => {
        if (error) {
            response.status(400, error, res)
        } else {
            response.status(200, {message:`Запись успешно добавлена`, results}, res)
        }
    })
}
