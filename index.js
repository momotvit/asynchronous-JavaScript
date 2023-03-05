// const button = document.querySelector("button");

// const onClick = () => {
//     setTimeout(() => {
//       console.log("I love async JS!");
//       // alert("I love async JS!");
      
      
//   }, 2000);
// };

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


// // startBtn.addEventListener("click", () => {
// //   timerId = setInterval(() => {
// //     console.log(`I love async JS!  ${Math.random()}`);
// //   }, 1000);
// // });


// // stopBtn.addEventListener("click", () => {
// //   clearInterval(timerId);
// //   console.log(`Interval with id ${timerId} has stopped!`);
// // });




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

// date.getTime();
// // 1899894300000



// const date2 = Date.now();

// setTimeout(() =>{
//   const date3 = Date.now();
//   console.log(date2);
//   console.log(date3);
//   console.log(date3 - date2);

// },3000)


// const date4 = new Date();
// console.log(date4);





///////promise resolve() reject() catch() then()


// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
     
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(promise)
// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => console.log("Promise settled")); // "Promise settled";

// Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");


// ///////////////////// second task


const promiseNext = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promiseNext
  .then(value => {
    // console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    // console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    // console.log(value); // 30
  })
  .catch(error => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("Final task");
  });




  //////////////////////////// third task //////////////////////////



//   const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;
//       //  const isSuccess = false;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);



///////////////third task refactored to prlomise


// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = false;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));



  ///////////////Promise.all()////////////////////



//   const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));


  /////////////////////////////Promise.race()////////////////////


//   const makePromise1 = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA1 = makePromise1("promiseA1 value", 4000);
// const promiseB1 = makePromise1("promiseB1 value", 3000);

// Promise.race([promiseA1, promiseB1])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));



  //////////////////////////Promise.resolve() и Promise.reject()//////////








// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve(`fullfilled promise 0000`);
    
//     }
//     reject(`notfulfilled promise`);

//   }, 2000);
// });
 
// promise.then(result => { console.log(result); },
//   error => { console.log(error); },)


////////////////// need return a promise, otherwise it will return undifined promise

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined)  {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
  
};

makeGreeting("Vitaliy")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));