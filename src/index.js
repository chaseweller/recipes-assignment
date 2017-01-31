import Vorpal from 'vorpal';

const vorpal = Vorpal();

vorpal
  .command('foo')
  .action(args => {
    // console.log(args);
  });

vorpal
  .delimiter('recipes >')
  .show();

// export default vorpal;

// Vorpal
//   .command('foo')
//   .action((args) => {
//     console.log(args);
//   });
//
// Vorpal.show();
//
// export default Vorpal;
