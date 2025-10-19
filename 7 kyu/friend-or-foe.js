// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
//
//     Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что это не так...

// Input strings will only contain letters.
//     Note: keep the original order of the names in the output.
// Входные строки будут содержать только буквы.
//     Примечание: сохраняйте первоначальный порядок имен в выходных данных.

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
//
// Input = ["Peter", "Stephen", "Joe"]
// Output = []


function friend(friends) {
    return friends.filter (friend => friend.length === 4)
}
const x = friend (["Love", "Your", "Face"])
console.log(x)




