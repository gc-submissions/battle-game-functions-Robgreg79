"use strict";

const randomDamage = () => 
Math.floor(Math.random() * 11);


const chooseOption = (opt1,opt2) => {
let randNum = Math.round(Math.random())
console.log(randNum)
 return randNum === 0 ? opt1 : opt2
}

 const attackPlayer = function(health) {
    return (health-randomDamage())
 }
const logHealth = (player,health) => 
console.log(`${player} health: ${health}`)

const logDeath = (winner, loser) =>
console.log(`${winner} defeated ${loser}`)

const isDead = (health) => 
health <= 0? true : false 

function fight(player1, player2, player1Health, player2Health) 
{
    
    while (true)  
    {
        const attacker= chooseOption(player1, player2)
       console.log(attacker)
        if (attacker === player1) 
        {
            player2Health = attackPlayer(player2Health)
            logHealth(player2,player2Health)
           
            if (isDead(player2Health)===true)
            {
                logDeath(player1,player2)
                break
            }
        }
            else 
            {
                player1Health = attackPlayer(player1Health)
                logHealth(player1,player1Health)
                    if (isDead(player1Health)=== true)
                    {
                        logDeath(player2,player1)
                        break
                    }
            }
    }

}

fight("Matt", "Greg", 100, 100)