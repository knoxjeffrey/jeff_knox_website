import '../stylesheets/main.scss';
Array.from(document.getElementsByTagName('p')).forEach((p) => {
  console.log(`p ${index}, startsWith('W')`, p, p.innerHTML.startsWith('W'));
});
console.log('Hello again');
