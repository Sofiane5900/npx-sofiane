#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH


import clear from "clear";
import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";

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

const prompt = inquirer.createPromptModule();

// Retourne une promesse
const questions = [
    {
        // On défini le type du prompt
        type: "list",
        name: "action",
        message: "What is your choice ?",
        choices: [
            {
                name: `Open my ${chalk.gray.bold("GitHub")}`,
                value: () => {
                    open("https://github.com/Sofiane5900");
                    console.log("\nGitHub is open in your browser !\n");
                }
            },
            {
                name: `Visit my ${chalk.blue.bold("Portfolio")}`,
                value: () => {
                    open("https://portfolio-sofiane.vercel.app/");
                    console.log("\nMy portfolio is open in your browser !\n");
                }
            },
            {
                name: `Copy my ${chalk.magentaBright.bold("Discord")}`,
                value: () => {
                    console.log(`\nAdd me on Discord : ${chalk.magentaBright.bold("sofiane590_")}`);
                }
            },
            {
                name: chalk.red("Quit..."),
                value: () => {
                    console.log("\nSee you soon ! 👋\n");
                }
            }
        ]
    }
];

prompt(questions)
    //action contient l'objet correspondant au choix, answer.action() execute l'action du choix
.then(answer => answer.action());