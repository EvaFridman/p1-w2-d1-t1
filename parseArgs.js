function parseArgs(argv) {
    const [command, argument] = argv.slice(2);
    return { command, argument };
}
  
module.exports = parseArgs;