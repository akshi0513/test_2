const express = require('express');
const Todo = require('../model/todoModel');
const { todo } = require('node:test');

//Fetch all to-dos

exports.getTodo = async(req, res) => {
    try {
        const todo = await todo.find();
        res.json(todo);
    } catch (error) {
        res.status(500).json ({
            message: error.message
        });
    }
}

//Create a new to-do

exports.createTodo = async (req,res) => {
try {
    const{title, description} = req.body;
    const todo = new todo ({

        title: title,
        description: description
    });
    await todo.save();
    res.status(201).json ({
        message: 'to-do created sucessfully', todo
    });
} catch (error) {
    res.status(500).json ({
        message:'error creating to-do', error
    });
}
}
