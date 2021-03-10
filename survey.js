const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: `Write your nick name  `,
  species: `What currently endang- er... ahem "in transition" species do you belong to?  `,
  planet: `What former planet are we taking you from?  `,
  apocolypse: `What was the cause of your untimely erradication?  `,
  skills: `What talents do you offer?  `, 
  occupation: `What did your species do with you before?  ` 
};

rl.question(`${questions.name}`, (answer) => {
  const name = answer;
  rl.question(`${questions.species}`, (answer) => {
    const species = answer;
    rl.question(`${questions.planet}`, (answer) => {
      const planet = answer;
      rl.question(`${questions.apocolypse}`, (answer) => {
          const apocolypse = answer;
        rl.question(`${questions.skills}`, (answer) => {
            const skills = answer;
          rl.question(`${questions.occupation}`, (answer) => {
            const occupation = answer;
            console.log(`\nThe alien clerk aboard the strange ship waves you forward. "So you're called ${name}, from the doomed planet ${planet}...  and you are the last of the ${species}. Who were wiped out by ${apocolypse}" The clerk seems pretty apprehensive about that last bit.. "well it says here you have ${skills}. What kind of job are you looking to.... ${occupation}.... Oh my." The alien clerk hastily presses the 'Eject Airlock' button`);
            rl.close();
          });
        });
      });
    });
  });
});
