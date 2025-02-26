#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH



import chalk from "chalk";

const data = {
    name: chalk.bold.green("Sofiane"),
    work: chalk.white("Développeur passionné"),
    github: chalk.gray("https://github.com/") + chalk.green("Sofiane5900"),
    portfolio: chalk.cyan("https://portfolio-sofiane.vercel.app/"),
    discord: chalk.magenta("sofiane590_"),
    npx: chalk.red("npx") + " " + chalk.white("sofiane")
}
console.log(data.name);
console.log(data.work);
console.log(data.github);
console.log(data.portfolio);
console.log(data.discord);
console.log(data.npx);
