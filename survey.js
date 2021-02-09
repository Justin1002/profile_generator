const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s your favorite activity? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('Which sport is your favorite? ', (sport) => {
          rl.question('What is your superpower? ', (power) => {
            console.log(`${name} loves listening to ${listen} while ${activity}, they love eating ${meal}, prefers ${sport} over any other sport and is amazing at ${power}.`);
            rl.close();
          });
        });
      });
    });
  });
});
