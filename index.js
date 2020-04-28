#!/usr/bin/env node

const args = process.argv.slice(2);
const [str] = args;
const escStr = str.replace(/[^\0-~]/g, (c) => '\\u' + ('000' + c.charCodeAt().toString(16)).slice(-4));

console.log(escStr);
return escStr;
