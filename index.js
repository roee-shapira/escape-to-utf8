#!/usr/bin/env node

const str = process.argv.slice(2)[0];
const escStr = str.replace(/[^\0-~]/g, (c) => '\\u' + ('000' + c.charCodeAt().toString(16)).slice(-4));

console.log(escStr);
return escStr;
