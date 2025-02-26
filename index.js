#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH



import chalk from "chalk";

const data = {
    name: chalk.bold.green("Sofiane"),
    work: chalk.white("Développeur passionné"),
    github: chalk.gray("https://github.com/") + chalk.green("Sofiane5900"),

}
console.log(data.name);
console.log(data.work);
console.log(data.github);