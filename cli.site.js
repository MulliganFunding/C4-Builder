import chalk from 'chalk';
import path from 'path';
import express from 'express';
const app = express();

export default (currentConfiguration, program) => {
    if (!currentConfiguration.DIST_FOLDER) return console.log(chalk.red('No destination folder configured'));

    const port = program.port || currentConfiguration.WEB_PORT;
    app.get('/*', express.static(path.join(currentConfiguration.DIST_FOLDER)));

    return new Promise((resolve, reject) => {
        app.listen(port, () => {
            console.log('serving your docsify site');
            console.log(
                `go to ${chalk.green('http://localhost:' + (program.port || currentConfiguration.WEB_PORT))}`
            );
        });
    });
};
