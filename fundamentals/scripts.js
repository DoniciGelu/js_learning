const task1 = () => {
  let n = Number(prompt("Enter a number from  0 to 3"));
  switch (n) {
    case 0: {
      alert("zero");
      break;
    }
    case 1: {
      alert("one");
      break;
    }
    case 2: {
      alert("two");
      break;
    }
    case 3: {
      alert("three");
      break;
    }
    case 4: {
      alert("four");
      break;
    }
    case 5: {
      alert("five");
      break;
    }
    case 6: {
      alert("six");
      break;
    }
    case 7: {
      alert("seven");
      break;
    }
    case 8: {
      alert("eight");
      break;
    }
    case 9: {
      alert("nine");
      break;
    }
    default: {
      alert("It's incorect number");
    }
  }
};

const task2 = () => {
  let a = Number(prompt("Write a number?"));
  let b = Number(prompt("Write b number?"));
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      result = result + i;
    }
  }
  console.log(result);
};

const task3 = () => {
  let a = Math.max(5, 3, 7);
  alert(`Max number is ${a}?`);
  let b = Math.min(5, 3, 7);
  alert(`Min number is ${b}?`);
};

const task4 = (word = "emilia") => {
  alert(word.charAt(0).toUpperCase() + word.slice(1));
};

const task5 = (str = "$225") => {
  alert(str.slice(1));
};

const task6 = () => {
  let n = Number(prompt("Enter number"));
  if (n > 0) {
    alert(1);
  } else if (n < 0) {
    alert(-1);
  } else if (n === 0) {
    alert(0);
  } else {
    alert("Error");
  }
};

const task7 = () => {
  let age = Number(prompt("Enter please number from 14 to 90"));
  if (!(age <= 14 || age >= 90)) {
    alert("Congrulation:The value of age is between 14 and 90");
  } else {
    alert("Sorry:The value of age is NOT between 14 and 90");
  }
  if (age >= 14 && age <= 90) {
    alert("Congrulation:The value of age is between 14 and 90");
  } else {
    alert("Sorry:The value of age is NOT between 14 and 90");
  }
};

const task8 = () => {
  const username = "Donici";
  const password = "Gelu";
  const enterUsername = prompt("Enter Username");
  const enterPassword = prompt("Enter password");
  if (enterUsername && enterPassword) {
    if (username === enterUsername && password === enterPassword) {
      alert("Hello");
    } else if (username === enterUsername && password !== enterPassword) {
      alert("Wrong Password");
    } else if (username !== enterUsername && password === enterPassword) {
      alert("Wrong username");
    }
  } else {
    alert("Validation Error");
  }
};

const task9 = () => {
  let a = prompt("Enter please your name:");
  alert(`Hello ${a}`);
  let c = confirm("Do you know JavaScript?");
  if (c) {
    alert("You are right.You know JavaScript");
  } else {
    alert("You can start learning JavaScript right now!");
  }
};

const task10 = () => {
  const number = Number(prompt("Please, enter a number:"));
  const dividers = (number) => {
    if (!isNaN(number)) {
      console.log(`1 is divizor of ${number}`);
      for (i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
          console.log(`${i} is divizor of ${number}`);
        }
      }
      console.log(`${number} is divizor of ${number}`);
    }
  };
  dividers(number);
};
