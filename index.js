#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const { escStr } = require('./lib/esc-uni');

(async function main() {
	if (argv.path) {
		const { path: filePath } = argv;
		const fileContent = await fs.readFile(path.normalize(filePath), 'ucs2');

		console.log(fileContent);

		// const noUnicodeStr = escStr(fileContent);

		// await fs.writeFile(path, noUnicodeStr);
	} else {
		const [str] = argv._;
		const noUnicodeStr = escStr(str);

		console.log(noUnicodeStr);
	}
})();
