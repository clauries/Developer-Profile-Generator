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
        const queryUrl = `https://api.github.com/users/${response.username}`;
        const favoriteColor = response.color;
        const queryStarred = `https://api.github.com/users/${response.username}/starred`

        axios.get(queryUrl).then(function(res) {
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


        //console.log(response.username);
        //console.log(response.color);
        // console.log(queryUrl);
        // console.log(favoriteColor);
        // console.log(name);
        // console.log(website);
        // console.log(profileImg);
        // console.log(bio);
        // console.log(company);
        // console.log(location);
        // console.log("Public Repos:" + publicRepos);
        // console.log("Followers: " + followers);
        // console.log("Following: " + following);

    });
    axios.get(queryStarred).then(function(res) {
        const a = res.data;
        const starred = a.length;

        //console.log("Stars: " + starred);

});
})
];

/*
function writeToFile(fileName, data) {
 
}

function init() {

init(); */
