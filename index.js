#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH



import chalk from "chalk";

const data = {
    name: chalk.bold.green("Sofiane"),
};

console.log(data.name)