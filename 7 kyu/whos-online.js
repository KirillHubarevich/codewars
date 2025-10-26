// You have a group chat application, but who is online!?
//
//     You want to show your users which of their friends are online and available to chat!
//
//     Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
//
//     If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//
//     The input data has the following structure:
//     [{
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     }, {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     }, {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }]
// The corresponding output should look as follows:
//
// {
//     online: ['David'],
//         offline: ['Lucy'],
//     away: ['Bob']
// }
// If for example, no users are online the output should look as follows:
//
// {
//     offline: ['Lucy'],
//         away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
//
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).




// online: ['David'],
// //         offline: ['Lucy'],
// //     away: ['Bob']

// const whosOnline = (friends) => {
//
//


// const whosOnline = (friends) => {
//     const result = { online: [], offline: [], away: [] };
//     const wrongResult = {}
//     for (let i = 0; i < friends.length; i++) {
//         const user = friends[i];
//         if (user && user.status === 'online') {
//             if (typeof user.lastActivity === 'number' && user.lastActivity >= 0 && user.lastActivity > 10) {
//                 result.away.push(user.username);
//             } else {
//                 result.online.push(user.username);
//             }
//         } else if (user) {
//             result.offline.push(user.username);
//         }
//         else if (!user && !user.status) {
//             return wrongResult;
//         }
//     }
//     return result;
// };
//
// console.log(whosOnline(friends))


    const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]



const whosOnline = (friends) => {
    const status = {
        online: [],
        offline: [],
        away: []
    }

    for (const friend of friends) {
        if(friend.status === 'offline') {
            status.offline.push(friend.username)
        }
        else {
            if(friend.lastActivity > 10 && friend.status === 'online') {
                status.away.push(friend.username)
            } else {
                status.online.push(friend.username)
            }
        }
    }
    for(const guests in status) {
        if(status[guests].length === 0) {
            delete status[guests];
        }
    }
    return status;
}

console.log(whosOnline(friends))





























