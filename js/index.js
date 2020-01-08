const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const electronHtmlTo = require("electron-html-to");
const generateHTML = require("./generateHTML");

function promptUser() {
  return inquirer.prompt([
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
    
  ]);
}

function getInfo(response) {
  const queryUrl = `https://api.github.com/users/${response.username}`;
  const favoriteColor = response.color;
  const queryStarred = `https://api.github.com/users/${response.username}/starred`

  axios.get(queryUrl).then(function (res) {
    const a = res.data;
    const name = a.name;
    const website = a.blog;
    const profileImg = a.avatar_url;
    const bio = a.bio;
    const company = a.company;
    const location = a.location;
    const publicRepos = a.public_repos;
    const followers = a.followers;
    const following = a.following;

  });
  axios.get(queryStarred).then(function (res) {
    const a = res.data;
    const starred = a.length;

  });
  console.log("success!")
}

promptUser()
 .then (function(data) {
    getInfo();
    //const html = generateHTML();

     /*return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);*/
  });

/*function writeToFile(fileName, data) {

  fs.writeFile("log.html", process.argv[2], function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}*/

/*console.log(questions(name));*/


/*function init() {

init(); */
