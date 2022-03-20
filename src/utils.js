import chalk from 'chalk';
import cliSpinners from 'cli-spinners';
import ora from 'ora';

let spinner;

export const startLog = (name) => {
  
  console.group();
  spinner = ora({
    spinner: cliSpinners.dots,
    text: chalk.bgHex('#4A4A4A').bold(`     ${name}     \n`)
  })
  spinner.start();
  console.time(chalk.greenBright('Time'));
}

export const endLog = (iterations, comparisons, writes) => {
  spinner.succeed();
  console.group();
  console.timeEnd(chalk.greenBright('Time'));
  console.log(`Iterations: ${chalk.yellow.bold(iterations)}`);
  console.log(`Comparisons: ${chalk.yellow.bold(comparisons)}`);
  console.log(`Writes: ${chalk.yellow.bold(writes)}\n`);
  console.groupEnd();
  console.groupEnd();
}

export const copy = (data) => JSON.parse(JSON.stringify(data));