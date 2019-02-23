const express = require ('express');
const router = require ('express').Router();
const {getItem} = require ('./controller.js');

router
.route('/:id')
.get(getItem)

module.exports = router; 