import chalk from 'chalk';

export const startLog = (name) => {
  console.group();
  console.log(chalk.bgHex('#4A4A4A').bold(`     ${name}     \n`));
  console.time(chalk.greenBright('Time'));
}

export const endLog = (iterations, comparisons, writes) => {
  console.group();
  console.timeEnd(chalk.greenBright('Time'));
  console.log(`Iterations: ${chalk.yellow.bold(iterations)}`);
  console.log(`Comparisons: ${chalk.yellow.bold(comparisons)}`);
  console.log(`Writes: ${chalk.yellow.bold(writes)}\n`);
  console.groupEnd();
  console.groupEnd();
}

export const copy = (data) => JSON.parse(JSON.stringify(data));