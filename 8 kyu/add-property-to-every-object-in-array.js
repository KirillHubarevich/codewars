// Add property to every object in array
//
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
//     Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение usersAnswer должно быть равно null. Решение должно работать для массива любой длины.
//
//
// Должно получиться:
    // var questions = [{
    //     question: "What's the currency of the USA?",
    //     choices: ["US dollar", "Ruble", "Horses", "Gold"],
    //     corAnswer: 0,
    //     usersAnswer: null
    // }, {
    //     question: "Where was the American Declaration of Independence signed?",
    //     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    //     corAnswer: 0,
    //     usersAnswer: null
    // }];

questions.forEach(user => user.usersAnswer = null)



