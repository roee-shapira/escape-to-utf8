#!/usr/bin/env node

const { promises: fs } = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const { escStr } = require('./lib/esc-uni');

(async function main() {
	if (argv.path) {
		const filePath = path.normalize(argv.path);
		const fileBuffer = await fs.readFile(filePath);
		const fileContent = fileBuffer.toString('latin1');

		const noUnicodeStr = escStr(fileContent);
		if (argv.dryRun) {
			console.log(fileContent, '\n', noUnicodeStr);
		} else {
			await fs.writeFile(filePath, noUnicodeStr);
		}
	} else {
		const [str] = argv._;
		const noUnicodeStr = escStr(str);

		console.log(noUnicodeStr);
	}
})();
