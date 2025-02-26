#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH


import clear from "clear";
import chalk from "chalk";

clear();

const data = {
    name: chalk.bold.green("Sofiane"),
    work: chalk.white("Work:") + "Developer",
    github: chalk.gray("GitHub: ") + chalk.green("https://github.com/Sofiane5900"),
    portfolio: chalk.gray("Portfolio: ") + chalk.cyan("https://portfolio-sofiane.vercel.app/"),
    discord: chalk.gray("Discord: ") + chalk.magenta("sofiane590_"),
    npx: chalk.red("npx") + " " + chalk.white("sofiane")
}

