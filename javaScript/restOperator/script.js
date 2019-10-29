console.log("script.js file is loaded");

let sum = (...args) => {
  let total = 0;
  console.log(args);

  // args.forEach((acc, ele) => {
  //   total += acc;
  // });

  // args.reduceRight(function(acc, ele) {
  //   total += ele;
  // }, 0);

  // args.map((acc, ele) => {
  //   total += acc;
  // });

  args.filter((acc, ele) => {
    total += acc;
  });

  console.log(total);
};

sum(1, 2, 3); // 6

sum(1, 2); // 3

sum(4, 6, 3); // 13
