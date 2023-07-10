
// A VERY COMMON JS INTERVIEW QUESTION

for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0) {
      console.log('Marco!');
    } else if (n % 5 === 0) {
      console.log('Polo!')
    } else if (n % 3 === 0 && n % 5 === 0) {
      console.log('Marco! Polo!');
    } else {
      console.log (n);
    }
}