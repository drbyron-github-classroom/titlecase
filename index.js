const titlecase = require('./titlecase');
const prompt = require('prompt');

console.log('enter movie title to get titlecase name');

prompt.start();

prompt.get('title', (err, res) => {
  console.log(titlecase(res.title));
});
