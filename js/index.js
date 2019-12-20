const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const electronHtmlTo = require("electron-html-to");

const questions = [
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },
      {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
        ]
      }
    ])
    .then(function(response) {
      console.log(response.username);
      console.log(response.color);
    })
];

/*
function writeToFile(fileName, data) {
 
}

function init() {

init(); */
