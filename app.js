//-----------------------EXAMPLE 1---------------------------

async function run1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("run 1 finished");
      return resolve();
    }, 1000);
  });
}

async function run2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("run 2 finished");
      return resolve();
    }, 1000);
  });
}

async function run3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("run 3 finished");
      return resolve();
    }, 1000);
  });
}

run1().then(() => {
  run2().then(() => {
    run3().then(() => {
      console.log("all functions are done");
    });
  });
});

//-----------------------EXAMPLE 2---------------------------

const foo1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo 1 finished");
  }, 1000);
});

const foo2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo 2 finished");
  }, 1000);
});

const foo3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo 3 finished");
  }, 5000);
});

Promise.all([foo1, foo2, foo3]).then((messages) => {
  console.log(messages);
});
