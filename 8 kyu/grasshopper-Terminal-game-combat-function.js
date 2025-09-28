

// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.



function combat(health, damage) {
    health = health - damage
    if (health === 0) {
        console.log ('Здоровье закончилось, игрок мёртв', health)
    } else if (health > 0)  {
        console.log ('Актуальное здоровье - ', health)}
        else if (health < 0) {
            health = 0
        console.log(health)
    }
    return health
}
combat(70,69)


// function combat(health, damage) {
//     if (health - damage < 0){
//         return 0;
//     }else{
//         return health - damage;
//     }
// }
