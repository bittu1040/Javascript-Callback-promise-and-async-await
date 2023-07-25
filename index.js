//callback example 1

function greet(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

function callBackFunction() {
  console.log('Good morning');
}

greet('bittu', callBackFunction);

//callback example 2

function readFile(callback) {
  setTimeout(function () {
    const data = 'This is the content of the file.';
    callback(data);
  }, 5000);
}

function onDataRead(data) {
  console.log('Data from file:', data);
}

console.log('Start file read.');

readFile(onDataRead);

console.log('Continuing other tasks while waiting for file read to complete.');

// promise example 1

// just change the value of a and observe the console log

const promise = new Promise((resolve, reject) => {
  const a = 1;

  if (a === 2) {
    resolve('correct');
  } else {
    reject('incorrect');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise example 2

function fetchDataFromAPI() {
  // Replace this with your actual API call or async operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe', age: 30 };
      const error = false;

      if (!error) {
        resolve(data);
      } else {
        reject('Error occurred while fetching data');
      }
    }, 2000);
  });
}

console.log('Fetching data...');

fetchDataFromAPI()
  .then((data) => {
    console.log('Data fetched successfully:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// promise example 3

const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject('Random number is greater than or equal to 0.5');
    }
  }, 1000);
});

console.log('Promise started...');

promiseExample
  .then((result) => {
    console.log('Promise resolved with:', result);
  })
  .catch((error) => {
    console.error('error', error);
  });

console.log('example end');

// promise example 4

//fetch itself return promise
//trying changing wrong url and catch the error

function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
}

fetchUserData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('Error', error.message);
  });


  // async-await example 1

async function fetchDataFromAPI() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

async function getData() {
  try {
    const data = await fetchDataFromAPI();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

getData();