const sentence = "hello there from lighthouse labs";
let i = 0;


const tw = () => setTimeout(() => {
  process.stdout.write(sentence[i++]);
  if (i < sentence.length) tw();
  if (i === sentence.length) process.stdout.write('\n');
}, 1000);

tw();