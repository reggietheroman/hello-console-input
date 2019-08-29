
process.stdin.setEncoding('utf-8');

process.stdout.write('What is your name?\n');

process.stdin.on('readable', function () {
  let chunk;
  while((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`Hello, ${chunk.trim()}!\n`);
    process.exit();
  }
});

