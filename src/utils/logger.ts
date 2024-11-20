import chalk from 'chalk';

type ColorType = 'heading' | 'success' | 'error' | 'warning' | 'info' | 'muted' | 'primary' | 'accent' | 'border' | 'text';

export const formatLog = (text: string, type: ColorType): string => {
  const colors = {
    heading: chalk.bold.blue,
    success: chalk.green,
    error: chalk.red,
    warning: chalk.yellow,
    info: chalk.cyan,
    muted: chalk.gray,
    primary: chalk.blue,
    accent: chalk.magenta,
    border: chalk.gray,
    text: chalk.white,
  };

  return colors[type](text);
};

export const log = {
  info: (message: string) => console.log(formatLog(message, 'info')),
  error: (message: string) => console.log(formatLog(message, 'error')),
  success: (message: string) => console.log(formatLog(message, 'success')),
  warning: (message: string) => console.log(formatLog(message, 'warning')),
}; 