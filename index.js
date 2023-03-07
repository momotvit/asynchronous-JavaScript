// const button = document.querySelector("button");

// const onClick = () => {
//     setTimeout(() => {
//       console.log("I love async JS!");
//       alert("I love async JS!");
      
      
// //   }, 2000);
// // };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);



///////////clearTimeOut (timeOut is not going to work)


// const greet = () => {
//   console.log("Hello!");
// };

// const timerId1 = setTimeout(greet, 3000);

// clearTimeout(timerId1);




//////////setInterval and clearInterval



//  При клике на кнопку «Start» запустим интервал и будем
//  каждую секунду выводить в консоль строку. Используем
//  Math.random() чтобы строки были разные. По клику на кнопку
//  «Stop» вызовем clearInterval() и передадим идентификатор
//  интервала который надо остановить.



// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;


// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });




// ///////// class Date


// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"



// ///////// method getTime()

// confirm(new Date().getTime());
// console.log(new Date().getTime());


// ////can set the time as a string

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"


// ////can set the time as a number


// const date1 = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date1);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)



// // ////////date getter

// // const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date.getDay());

// // Возвращает месяц от 0 до 11 , works like index
// console.log("getMonth(): ", date.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());



// Существуют эквивалентные версии этих методов, которые возвращают
//  значения в формате UTC(Coordinated Universal Time), а не
//  адаптированные к текущему часовому поясу пользователя.


// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Возвращает час
// console.log("getUTCHours(): ", date.getUTCHours());

// // Возвращает минуты
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Возвращает секунды
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());



//// setter has the same effect as getter


// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"


////formatting date format


// date.toString();
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(console.log(response.status));
//     }
//     console.log(response.json());
//     return response.json();
//   })
//   .then(data => { })
//   .catch(error => { });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(console.log(response.status));
//     }
//     console.log(response.blob());
//     return response.blob();
//   })
//   .then(data => { })
//   .catch(error => { });


//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//   .then(json => console.log(json))
      


  ///////////////////////////////// when press fetch users btn fn renders users



const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  ///////////////////////////////////,
  return fetch( "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
    
  // return fetch("https://jsonplaceholder.typicode.com/users")
  // getting all of the users not in alphabetical order
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join("");
  userList.innerHTML = markup;
}


/////////////////////////////////////// common mistake that new sevelopers make globalVariable outside fetch



let globalVariable; // undefined

// Initializing data fetching
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Writing the result to a global variable
    globalVariable = users;

    // Everything is ok here, the data is in the variable
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// No async data here
console.log("globalVariable outside fetch: ", globalVariable); // undefined




/////////////////////////////////////////////  URLSearchParams()


const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
console.log(searchParams);

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"