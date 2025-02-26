#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH


import clear from "clear";
import chalk from "chalk";
import boxen from "boxen";

clear();

const data = {
    name: chalk.bold.underline.green("Sofiane"),
    work: chalk.white("Studying:") + " Application Design and Development",
    github: chalk.gray("GitHub: ") + chalk.white("https://github.com/Sofiane5900"),
    portfolio: chalk.gray("Portfolio: ") + chalk.cyan("https://portfolio-sofiane.vercel.app/"),
    discord: chalk.gray("Discord: ") + chalk.magenta("sofiane590_"),
    npx: chalk.red("npx") + " " + chalk.white("sofiane")
}

const aboutMe = boxen([
    `${data.name}`,
    ``,
    `${data.work}`,
    ``,
    `${data.github}`,
    `${data.portfolio}`,
    `${data.discord}`,
    `${data.npx}`,
    ``,
    `${chalk.italic("Select an option to know more about me !")}`
].join("\n"), {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan"
    }
);

console.log(aboutMe);

