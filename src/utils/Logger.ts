import Chalk from 'chalk';
import Box from 'cli-box';

import PackageJson from '../../package.json';

const FRAMEWORKID = '[AYBERk]';

export default class Logger {
  public static success(log: string): void {
    console.log(Chalk.green(`${FRAMEWORKID} ${new Date().toISOString()} | ${log}`));
  }
  public static info(log: string): void {
    console.log(Chalk.blue(`${FRAMEWORKID} ${new Date().toISOString()} | ${log}`));
  }
  public static warn(log: string): void {
    console.log(Chalk.yellow(`${FRAMEWORKID} ${new Date().toISOString()} | ${log}`));
  }
  public static error(log: string): void {
    console.log(Chalk.red(`${FRAMEWORKID} ${new Date().toISOString()} | ${log}`));
  }

  public static async showInfoBox(): Promise<void> {
    console.clear();
    const myBox = new Box({
      w: 80,
      h: 4,
      stringify: false,
      marks: {
        nw: '╭',
        n: '─',
        ne: '╮',
        e: '│',
        se: '╯',
        s: '─',
        sw: '╰',
        w: '│',
      },
      hAlign: 'center',
    }, `Ayberk @ ${PackageJson.version}
    ----------------------------------------------------------------------------
    Application has been started and is listening on: http://localhost:${process.env.APP_PORT}/`);
    console.log(Chalk.bgGreen(Chalk.black(myBox.stringify())));
  }
}
