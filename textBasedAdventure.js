  
const readline = require('readline-sync')           // readline
var readlineSync = require('readline-sync');        // readlineSync

// Input name
let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}! 
██╗    ███████████╗     ██████╗██████╗███╗   ██████████╗    ████████╗██████╗     ███╗   █████╗   ██╗     ██████╗ █████╗███╗   ██████████╗
██║    ████╔════██║    ██╔════██╔═══██████╗ ██████╔════╝    ╚══██╔══██╔═══██╗    ████╗ ████╚██╗ ██╔╝    ██╔════╝██╔══██████╗ ██████╔════╝
██║ █╗ ███████╗ ██║    ██║    ██║   ████╔████╔███████╗         ██║  ██║   ██║    ██╔████╔██║╚████╔╝     ██║  ████████████╔████╔███████╗  
██║███╗████╔══╝ ██║    ██║    ██║   ████║╚██╔╝████╔══╝         ██║  ██║   ██║    ██║╚██╔╝██║ ╚██╔╝      ██║   ████╔══████║╚██╔╝████╔══╝  
╚███╔███╔██████████████╚██████╚██████╔██║ ╚═╝ █████████╗       ██║  ╚██████╔╝    ██║ ╚═╝ ██║  ██║       ╚██████╔██║  ████║ ╚═╝ █████████╗
 ╚══╝╚══╝╚══════╚══════╝╚═════╝╚═════╝╚═╝     ╚═╚══════╝       ╚═╝   ╚═════╝     ╚═╝     ╚═╝  ╚═╝        ╚═════╝╚═╝  ╚═╚═╝     ╚═╚══════╝
                                                                                                                                         
`)


// Portal 1 or  Portal 2 prompt
let portal = readline.question("Pick a portal, 1 (BATTLE) or 2 (ADVENTURE) ? ");

const area1 = `
 _______  _______  _       _________ _______  _______           _______ 
(  ____ \(  ___  )( \      \__   __/(  ____ \(  ____ \|\     /|(       )
| (    \/| (   ) || (         ) (   | (    \/| (    \/| )   ( || () () |
| |      | |   | || |         | |   | (_____ | (__    | |   | || || || |
| |      | |   | || |         | |   (_____  )|  __)   | |   | || |(_)| |
| |      | |   | || |         | |         ) || (      | |   | || |   | |
| (____/\| (___) || (____/\___) (___/\____) || (____/\| (___) || )   ( |
(_______/(_______)(_______/\_______/\_______)(_______/(_______)|/     \|
                                                                                                                                    
`;
const area2 = `
    ###    ########  ########    ###       ########   ##   
   ## ##   ##     ## ##         ## ##      ##       ####   
  ##   ##  ##     ## ##        ##   ##     ##         ##   
 ##     ## ########  ######   ##     ##    #######    ##   
 ######### ##   ##   ##       #########          ##   ##   
 ##     ## ##    ##  ##       ##     ##    ##    ##   ##   
 ##     ## ##     ## ######## ##     ##     ######  ###### 
`;


// OBJECTS for game -----------------------------------------------*
let player = {
    name: nameInput,
    health: 100,
}

let gladiator = {
    name: "Gladiator",
    health: 100,
}


// function play --------------------------------------------------*
function play (){       // play() to initialize game
    while(portal !== '1' && portal !== '2' ){
        portal = readline.question("Please pick a Portal 1 or 2: ");
    }
    switch (portal){
        case '1':
            console.log("You have teleported to " + area1);
            portal1();
            break;
        case '2':
            console.log("You have teleported to " + area2);
            console.log(`Welcome to AREA 51. `)
            portal2();
            break;
    }
}

// PORTAL 1 - GAME 1 - BATTLE -----------------------------------------------------------------------------------------------------------*
const portal1 = () =>{         // portal1 = coliseum (battle arena)
    let a1 = readline.question("Welcome to the COLISEUM's ARENA. You are summoned to fight against an opposing gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");
    while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
        a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
    }
    while(player.health > 0 && gladiator.health > 0) {
        if (a1 === "1" || a1.toLowerCase() === 'dodge' ){
            console.clear();
            console.log("You evade the gladiators attack but he successfully slashes you.")
            let hit1 = Math.floor(Math.random() * 24) + 10;  
            player.health -= hit1;
            console.log(`You lost ${hit1} health.`);
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        } else if (a1 === "2" || a1.toLowerCase() === 'defend'){
            console.clear();
            console.log("You defend the attack with your shield and attempt to counter attack the gladiator. You and the gladiator end up simulatenously getting hit.");
            let hit2 = Math.floor(Math.random() * 15) + 5;
            player.health -= hit2;
            gladiator.health -= hit2;
            console.log(`You lost ${hit2} health.`);
            console.log(`Gladiator lost ${hit2} health.`);
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
            console.clear();
            console.log("Moving with swiftness, you attack the gladiator by suprise");
            let hit3 = Math.floor(Math.random() * 28) + 12;
            gladiator.health -= hit3;
            console.log(`Gladiator lost ${hit3} health.`)
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        }
        if (player.health <= 0){
            console.log("You tried your best to defeat the gladiator, but it was you who were defeated instead... GAME OVER!");
            console.log("Try again!");
        }
        if (gladiator.health <= 0){
            console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
            console.log("Try going to a different portal next time, winner!");
        }
    }
    console.clear();
    if (gladiator.health <= 0 && player.health <= 0){
        console.log("The crowd goes wild. The match is a draw! This marks history in our arena where two of our gladiators have fallen at the same time! ... ");
        console.log("GAME IS OVER. Please pick a different portal");
    }else if (gladiator.health <= 0){
        console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
        console.log("Try going to a different portal next time, winner!");
    } else if (player.health <= 0){
        console.log("You tried your best to defeat the gladiator, but it was you who was defeated instead... GAME OVER!")
    }

} // END FUNCTION portal1()



// damage function
const damage = (object) =>{
    let hit4 = Math.floor(Math.random() * 101) + 10;
    object.health -= hit4
    console.log(`${object.name} took ${hit4} damage!!`); 
}


//functions - different pathways that split for Area51 
// PORTAL 2 - GAME 2 - ADVENTURE --------------------------------------------------------------------------------------------------------*
const portal2 = () =>{         // portal2 = area51
    let userInput = readline.question(`You look around and see that you are in a room with two doors. Which door should you go through? Left or Right? `);
    while(userInput.toLowerCase() !== 'left' && userInput.toLowerCase() !== 'right'){
        userInput = readline.question(`You look around and see that you are in a room with two doors. Which door should you go through? Left or Right? `);
    }
    if(userInput.toLowerCase() === 'left'){
        console.clear(); 
        startLeft();
    } else{
        console.clear(); 
        startRight();
    }
} // END FUNCTION portal2() - portal2 is mapped out with other functions below

// LEFT
const startLeft = () => {
    let userInput = readline.question(`You enter through the left door and you are standing at the beginning of a long corridor. A horrible smell fills the corridor. Traverse down the corridor or go back? `);
    while(userInput.toLowerCase() !== 'traverse' && userInput.toLowerCase() !== 'down' && userInput.toLowerCase() !== "traverse down" && userInput.toLowerCase() !== "corridor" && userInput.toLowerCase() !== 'back' && userInput.toLowerCase() !== 'go back'){
        userInput = readline.question(`You enter through the left door and you are standing at the beginning of a long corridor. A horrible smell fills the corridor. Traverse down the corridor or go back? `);
    }
    if(userInput.toLowerCase() === 'traverse' || userInput.toLowerCase() === 'down' || userInput.toLowerCase() === 'traverse down' || userInput.toLowerCase() === 'corridor'){
        console.clear(); 
        middleLeft();
    } else{
        console.clear(); 
        portal2();
    }
} // END startLeft()

const middleLeft = () => { 
    let userInput = readline.question("You reach the end of the corridor and the stench has completely obliterated your sense of smell. There is huge door that seems unlocked in front of you. Open door? Or go back? ");
    while(userInput.toLowerCase() !== 'open' && userInput.toLowerCase() !== 'open it' && userInput.toLowerCase() !== 'open door' && userInput.toLowerCase() !== 'back' && userInput.toLowerCase() !== 'go back' ){
        userInput = readline.question("Sorry couldn't understand that. Open it or go back? ");
    }
    if(userInput.toLowerCase() === 'open' || userInput.toLowerCase() === 'open door' || userInput.toLowerCase() === 'open it'){
        console.clear(); 
        endLeft();
    } else {
        console.clear(); 
        startLeft();
    }
} // END middleLeft()

const endLeft = () => {
    console.log("You open the door and a strange figure is seen in the middle of the room. It flashes towards you in an blink-instant and you feel a probe to your stomach. OUCH. The figure then molecularly dissipates into thin air in front of your eyes.");
    damage(player);
    if(player.health <= 0){
        console.log("The strange figure (most likely extraterrestrial) has probed the life out of you! You didn't make it out of AREA 51 alive... GAME OVER!! TRY AGAIN");
    } else{
        console.log(player);
        let userInput = readline.question("The only option is to turn back. You realize that this place is no joke and you will need to escape! This route was obviously a bad idea. Go back to room with 2 doors? ");
        while(userInput.toLowerCase() !== 'back' && userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'turn back'){
            userInput = readline.question("This place is dangerous! You need to escape! Go back? ");
        }
        if (userInput.toLowerCase() === "go back" || userInput.toLowerCase() === "back" || userInput.toLowerCase() === "turn back"){
            console.clear();
            portal2();
        }
    }
}  // END endLeft()

// RIGHT
const startRight = () => {
    console.log("You enter through the right door and you are located in a large open room. A shiny liquid substance is dripping onto the walls from the ceiling and a black spherical ball is floats in the center of the room.");
    let userInput = readline.question("Will you approach the black sphere or go back? ");
    while(userInput.toLowerCase() !== 'back' && userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'approach sphere' && userInput.toLowerCase() !== 'approach black sphere' && userInput.toLowerCase() !== 'black sphere' && userInput.toLowerCase() !== 'approach' && userInput.toLowerCase() !== 'approach the black sphere'  ){
        userInput = readline.question("Approach black sphere or go back? ");
    }
    if(userInput.toLowerCase() === 'black sphere' || userInput.toLowerCase() === 'approach the black sphere' || userInput.toLowerCase() === 'approach sphere' || userInput.toLowerCase() === 'approach black sphere' || userInput.toLowerCase() === 'approach'){
        console.clear(); 
        blackSphere();
    } else{
        console.clear();
        portal2();
    }
}  // END startRight()

//blackSphere
const blackSphere = () => {
    console.log("As you approach the spherical object in the center of the room, it begins to grow larger. Eventually is becomes massive enough for you to touch it.");
    console.log("As you touch the black sphere, it sucks you into it and everything goes black. You are suddenly transported to another room in the base." + "\n")
    let userInput = readline.question("You find yourself in a weapons lab and you spot U.S. Military personnel with heavy weaponry guarding the entrance. In the corner of the laboratory, you see vents that you might be able to crawl through. Which way will you go, out the entrance or through the vents? ");
    while(userInput.toLowerCase() !== 'entrance' && userInput.toLowerCase() !== 'out the entrance' && userInput.toLowerCase() !== 'the entrance' && userInput.toLowerCase() !== 'vents' && userInput.toLowerCase() !== 'the vents' && userInput.toLowerCase() !== 'through the vents'){
        userInput = readline.question("Which way will you go, out the entrance or through the vents? ");
    }
    if (userInput.toLowerCase() === 'entrance' || userInput.toLowerCase() === 'out the entrance' || userInput.toLowerCase() === 'the entrance'){
        player.health -= 100;
        console.clear();
        console.log(player);
        console.log("You try to run out the entrance and get past the Military personnel but they easily spot you. They end up shooting you down... GAME OVER!! TRY AGAIN")
    } else{
        console.clear();
        vents();
    }
} // END blackSphere()

// VENT PATHs - splits into leftVent and rightVent
const vents = () => {
    let userInput = readline.question("You open the vents and crawl through them. In the middle of traveling through the vents the passage splits into two different vents.. Should you go left or right? ");
    while (userInput.toLowerCase() !== 'left' && userInput.toLowerCase() !== 'left vent' && userInput.toLowerCase() !== 'right' && userInput.toLowerCase() !== 'right vent'){
        userInput = readline.question("Which vent? Left vent or right vent? ");
    }
    if(userInput.toLowerCase() === 'left' || userInput.toLowerCase() === 'left vent'){
        console.clear();
        leftVent();
    } else{
        console.clear();
        rightVent();
    }
} // END vents()

const leftVent = () => {
    console.log("You crawl down the left vent and there is an opening to another room. After busting into the room, you are surrounded by a thousand micro aliens.");
    let userInput = readline.question("Out of the thousand micro aliens, one of them steps forward and starts dancing. Then they all start dancing. Should you dance with the alien and act like one of them? Or should you not dance? ");
    while (userInput.toLowerCase() !== 'dance' && userInput.toLowerCase() !== 'dance with aliens' && userInput.toLowerCase() !== 'no' && userInput.toLowerCase() !== 'not dance' && userInput.toLowerCase() !== `don't dance`){
        userInput = readline.question(`Dance with aliens or don't dance? `)
    }
    if(userInput.toLowerCase() === 'dance' || userInput.toLowerCase() === 'dance with aliens'){
        console.clear();
        console.log("The micro aliens see you as one of them. They open up a passage that leads to the upper floor of the base");
        endVents();
    } else{
        console.clear();
        console.log("The aliens find you suspicious because you are not dancing with them. They stop dancing and become aggressively violent towards you.")
        player.health -= 100;
        console.log(player);
        console.log("You have been probed a thousand times and didn't make it out of AREA 51 ... GAME OVER!! TRY AGAIN")
    }
} // END leftVent()

const rightVent = () => {
    console.log("You crawl down the right vent and it starts to shake. The vent collapses and you fall down out of the vent. ")
    damage(player);
    if(player.health <= 0){
        console.log("The fall from the vents disabled you to move any further. You lay there until you meet your demise.. You didn't make it out of AREA 51 alive... GAME OVER!! TRY AGAIN");
    } else{
        console.log(player);
        let userInput = readline.question("You are in critical condition, but still survived that fall from the vent. Struggling but managing to get up, you see a door in front of you. Open it? ");
        while(userInput.toLowerCase() !== 'open' && userInput.toLowerCase() !== 'open door' && userInput.toLowerCase() !== 'open the door' && userInput.toLowerCase() !== 'open it'){
            userInput = readline.question("How much more can you take?? The only move is to go forward. Open the door! ");
        }
        if (userInput.toLowerCase() === "open" || userInput.toLowerCase() === "open door" || userInput.toLowerCase() === "open the door" || userInput.toLowerCase() === "open it"){
            console.clear();
            endVents();
        }
    }
}  // END rightVent()

const endVents = () => {
    console.log("It seems that you are now located on the upper floor of the underground base. This room has one lever that is attached to the left wall and a door on the right.")
    let userInput = readline.question("Will you pull the lever or go through the door on the right? ");
    while(userInput.toLowerCase() !== 'pull lever' && userInput.toLowerCase() !== 'pull the lever' && userInput.toLowerCase() !== 'lever' && userInput.toLowerCase() !== 'go through door' && userInput.toLowerCase() !== 'door' && userInput.toLowerCase() !== 'go through the door' && userInput.toLowerCase() !== 'go through the door on the right' && userInput.toLowerCase() !== 'through the door' && userInput.toLowerCase() !== 'right' && userInput.toLowerCase() !== 'right door'){
        userInput = readline.question("Pull the lever or go through the door? ");
    }
    if (userInput.toLowerCase() === 'pull lever' || userInput.toLowerCase() === 'pull the lever' || userInput.toLowerCase() === 'lever'){
        console.clear();
        secretLeverDoor();
    } else {
        console.clear();
        secretRight();
    }
} // END endVents()

let password = ["THE", "UPSIDE", "DOWN"];   // PASSWORD array NEEDED at end of game

const secretLeverDoor = () => {
    console.log("You pulled the lever and a loud shifting noise is heard above you. A secret door in the ceiling has opened up and a suddently ladder comes sliding down, almost killing you , but you are able to dodge it in time. What could be up there? You go up the ladder to find out.");
    console.log(`You now appear to be in some sort of control room with many incomprehensible devices and equipment. A screen that is brightly lighting up the room reads some sort of password: `);
    for (let i = 0; i < password.length; i++) {
        console.log(password[i]);
    }
    let userInput = readline.question("Go back down the ladder? ");
    while (userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'go down' && userInput.toLowerCase() !== 'go back down the ladder' && userInput.toLowerCase() !== 'go back down' && userInput.toLowerCase() !== 'down' && userInput.toLowerCase() !== 'down the ladder'){
        userInput = readline.question("There is nothing left to do here ... Go back down? ")
    }
    if (userInput.toLowerCase() === 'go back' || userInput.toLowerCase() === 'go down' || userInput.toLowerCase() === 'go back down the ladder' || userInput.toLowerCase() === 'go back down' || userInput.toLowerCase() === 'down' || userInput.toLowerCase() === 'down the ladder'){
        console.clear();
        endVents();
    }
} // END secretLeverDoor()

const secretRight = () => {
    console.log("You enter into what appears to be a hangar, with very strange disturbing aircrafts. Some soldiers are patrolling on the otherside of the hangar and you quickly hide behind some cargo cases.")
    let userInput = readline.question("On the closer side of the hangar there is a passageway that you can escape to. You can also try to attempt to sneak into one of the aircrafts, but the tech is undeniably advanced and the soldiers might also spot you. Will you sneak into aircraft, run up passageway, or go back? ");
    while (userInput.toLowerCase() !== 'sneak' && userInput.toLowerCase() !== 'sneak into aircraft' && userInput.toLowerCase() !== 'aircraft' && userInput.toLowerCase() !== 'run' && userInput.toLowerCase() !== 'run up' && userInput.toLowerCase() !== 'run up passageway' && userInput.toLowerCase() !== 'passageway' && userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'back'){
        userInput = readline.question("Sneak into aircraft, run up passageway, or go back? ")
    }
    if (userInput.toLowerCase() === 'sneak' || userInput.toLowerCase() === 'sneak into aircraft' || userInput.toLowerCase() === 'aircraft'){
        console.clear();
        console.log("You successfully were able to board one of the aircrafts, but the technology is too advanced for you to operate. After tinkering with it, alarms go suddenly blare and go off. The soldiers have caught you trying to steal one of the aircrafts! They shoot you down .. ");
        let damage = 100;
        player.health -= 100;
        console.log(player.name + " took " + damage + " damage!!");
        console.log(player);
        console.log (" ... GAME OVER!!");
    } else if (userInput.toLowerCase() === 'run' || userInput.toLowerCase() === 'run up' || userInput.toLowerCase() === 'run up passageway' || userInput.toLowerCase() === 'passageway'){
        console.clear();
        passageWay();
    } else {
        console.clear();
        endVents();
    }
} // END secretRight()

const passageWay = () => {
    console.log(`In the passageway, you see a huge vaulted door at the end. You finally reach the vaulted door and try to open it. It doesn't budge. There is panel on the side that prompts you for some sort of password ... `);
    let userInput = readline.question("Enter password? Or go back? ");
    while(userInput.toLowerCase() !== 'enter password' && userInput.toLowerCase() !== 'enter' && userInput.toLowerCase() !== 'password' && userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'back' ){
        userInput = readline.question("Enter password? Or go back? ");
    }
    if (userInput.toLowerCase() === 'enter password' || userInput.toLowerCase() === 'enter' || userInput.toLowerCase() === 'password'){
        console.clear();
        vault();
    } else {
        console.clear();
        secretRight();
    }
}   // END passageWay()

const vault = () => {
    let secretPassword = readlineSync.question(`Please enter password: `, {hideEchoBack: true});
    if (secretPassword === `${password[0]} ${password[1]} ${password[2]}`){
        console.log("A hissing noise comes throughout the sides of the vault and it opens. The light from the Nevada desert comes shining in. You've finally found the exit and escaped AREA 51! ");
        console.log(`                                                               CONGRATULATIONS!!!

                                            ██╗   ██╗ ██████╗ ██╗   ██╗    ██╗    ██╗██╗███╗   ██╗██╗
                                            ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██║    ██║██║████╗  ██║██║
                                             ╚████╔╝ ██║   ██║██║   ██║    ██║ █╗ ██║██║██╔██╗ ██║██║
                                              ╚██╔╝  ██║   ██║██║   ██║    ██║███╗██║██║██║╚██╗██║╚═╝
                                               ██║   ╚██████╔╝╚██████╔╝    ╚███╔███╔╝██║██║ ╚████║██╗
                                               ╚═╝    ╚═════╝  ╚═════╝      ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝
                                                                         

MMMMMMMMMMMMMMMh:/:///////////////////////////////////////////////////////////////////////////////////////////////////////////////////dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh::::::::::::::::::::::::::::::::::::::::: You walk out into the desert..::::::::::::::::::::::::::::::::::::::::::::::hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh::::::::::::::::::::::::::::::::::::::::::::::::::::: blessed to be alive ...:::::::::::::::::::::::::::::::::::::::::hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh::::::::::::::::::::::::::::::::::::::::::::::::::::::::///:-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh:-::::::::::-:::/:-::::::::::::::::::::::::::::::::::-+hmNNms:-:::::::::::::::::::::::::::::::::::::::::::::::::::-:::hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh----------------+s/:---------------------------------:hmNNMMMs--------------------------------------------------------hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh----------------+y+oo:-------------------------------/oydNMMMh--------------------------------------------------------hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh---------------:sy+syso+/:---------------------:://::+ohdmmNNmo+:-----------------------------------------------------hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh---------------+yyyyyyyyyo----------------::/oyyhhmhhmmmNmmmdmNNmhs+/:------------------------------------------------hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMy---------------+oyyyyyyyy/--------------:oooyhdddhmmdhmmNmdyydNMMMMNNmh/-----------------------------------:/+/:------hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMy.-......--.-.-+oosyyyyyyyo/...-----.---.-+ydNNmmmmddysmNNmsydNNMMMMNNMMN-...------------------------..---:/+/sys--..--hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh-:::::::-.-../so+oyyyyyyyyo........---/:::/smNNNmysyyohMMdsdmmNMMMMNNMMM:...............................--ooosyss:....hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh/osoossso/://+o++oyyyyyyyyso+:----://+so/oyodmMdyydmddNMMNNmhdNMMMMNNNMMs//:://+//:--..................-::oosyyyys-...hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmyyysss+oo+++osoo/+oossssossyyyyyso+/+syyoyyodNMmyyddddmMNmdmhdNMMMNNNNNMNsooosssooo++++++/--.........--::/o:+yyyyho/:-hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmysss+//sso/+++++//+sssssssyyyyysosysyys++sosNMMMdddddmNNNdoyhmNMMNhdNNNMMNhsssoooo+++o++soo++//-.-:///+///o:/oyyyyyyysmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMd/+o++++////////+oooooooo+++oo++++++++/////+yNMMmshmmmmNMMNyymNMMMs+ohmmNNNs++o+oo/:-::://:::///::::::://:////+ooooosssmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh//++++++++++//+++//////////////::::::://++oyMMMs/odmmNNMMMNNMMMMM+//+hdNNNy//+syyoo//://:://:////////://::::::::/+ooo+mMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmsyoso++++++syssyyysooo+++++++++ooo+////osohdMMN///ydmNNMMNNMMMMMM++/+hdmNNNo/oshhyy+/::///:/:///+ysoo/////:-:/+osyhhhhNMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNddhyo++++//+ohdddhso+/+++++++++syhy////osohNMMMo++shmNNNMMMMMMMMMsoooymmmNNs+oosssoo++++++/////++hddhys/+++///////+oosmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNmdhss+++o++/+/osso++//////++ooooooooo+////yNMMMsydhdNNNNMMNNNNNNMd+//+dmNNNo//////:::::::/+/+yyhdmmmmmdyyhho//::::::::dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdso++ooooo++++++++///////++++/++/++++////++yNMMMhdmmNNNNMMMNNMNMMMMsydssmNNN+:://:::::::///++++oyysooo++////:::::::::::dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdooooooooooo+++ooooooooo+ooooo++++++++/////odMMMhyhdmNNNMMMMMMMMMMMmNMm/yNNN+///:::----:/::///++++++/+/+++++++o+ooooooomMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmhhhysssssooo++ooooo+oo+++++++////++++++/+++sNMh+/+oydmNNNNNNNMMMMMNmMm/:mNN:-:-::///::/++//+++++++ooosoo+osoooooosssssmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmyyhhhyyyyyyysssssssso+oossoo+++o++oooooooooomMNh+oshdNNNNNNNNMMMMMMNMMh/hmNsooo++ooooooosssysso+o/+++++++ooo+++/+oyyhymMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmsssyyhhhyyyssssoo+oooosyyyyyyoossossyysyyyso+mMmsoshmNMMMMNMMMMMMMMMMMdoNmNh++++oooo+++++++o+/://:///+ooo+//+///+oosysmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdooooossyssooooooooooo+++++ossyyssssoo++o+oosohMooyhdNMMMMMMMMMMMMMMMMMyhyyNm:-------...-----://///oyhhhdddddyyyysyyyhsmMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmhhhyyysyssooossssyyyyyyyysoosysoosssssoyyyysssdmhdmmNMMMMMMMMMMMMMMMMMo/odNs---..-.-.-....---/////+oso++++ssssssoosyhymMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmyyyyysyyysyyysyhyhyhyyyysssossyyysooo++ooossoo+/sddmmMMMMMMMMMMMMMMMMN/-+ys:::::::------::::::/:://///+o+/++yysossooyhNMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNdhhhyhyyyyyyyyssossooosso+++++oooooo+////+ossssssdddmMMMMMMMMMMMMMMMMm:--:-:---::::-------:::::::///+oyyyhyyyddyyyhhhmNMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMNhhhsooo+++++o++++++ooooosss+//+/++oooosooo/::/:/+hhdmMMMMMmMMMMMMMMMMm/:-:---::::::::++//+soo/+/++o++ooyyysosshysyyhdmNMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmsosssssoooosyysssoooossyysssooooo++oooo+++////://hhdmMMMMN+dMMMMMMMMMh/++/:::::://+/+oooo+o+o+++oosssoososysyyhyyhhyhhNMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMd+++++++++////+++ossssoosossooososssssssssosso+///yhhmMMMMd/smMMMMMNys+++++++++/ossosssssoooo+//++++++ooo+o++++ossys+oodMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh/++ooosso+////++oooooosyysooooo+//++++oo+/////::/oshmMMMMh++dNMMMMh--::::::::/+/+//+osssossso////+/+//:/::::++ooso+///dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdoossssoo++:/++++++/+osssssssooo+/////////+o++//+//symNMMMy//yNMMMMs:/+++++++ooosoo+/+/////::///::/::::/:::://+osooshdymMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMd+oo+++++o+++++/:///+/+/+ossssoso//://+//++++///:::+smMMMMhhyomNMMMh///////://////+/:////::/::/::://://+oosossssooyyyyymMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh/////+++/++/+::/syyyyyyyysso+/+o+ooo++++///:/:::::/sdMMMN////ohNMMm/++//::----:///++/+///:/:/:://+/+++sosyssyyyssyyo//dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMd++/////++osssssoossyssosssosyyyyyooo+++/:://///++//sdNMMd/://sdNMMN+///////:-:::::::::::/::/://+++++/+++soooo+////://+dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmysssyyyssyhyysssssssosssyssssso++/++//://://:/:/y+oyhNMMy+///ymNMMMh++o+++::::///://::/://+o+o+++//+++/++/+o+++/+/:/++dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdssosososhhss+//++o/+o++oso++/////::/:/:+////::/:h/shdNMMyo+/odmNMMMmoso++o////:///:/::/::/+/+oooo//+sysssso///+/++ooo+dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdooossssso+//+////+/:///+++ssossyso//://:::/++oooysyhdmMMm+/:/dmMMMMdoo+///://:://///::::://:://+osooso+oo+/:/++oo/://+dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh:://///:/+///+o+oo+/+sossyyyyyyyyyos/o+/++sosysoodhmmNMMMo//:dmMMMMy++/////++::/+/:///:::::/+o+sysyssysyyysooosso++o++dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh:/+oo+/++oossyyssyyosyo+syyssyyyyyhs+oossososso/sdydNNMMMs///hmNMMMy+++++////:-:::::::::/::://+sso+++oooos++oyooo++:oomMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh/ooyysssys+sossssyyyssyossssoossysyyyo+ooo//+++oyddmNNMNmh++++hNMMN+/+o++//:/-://+//////:::::oo/+/-://+//+o/+oo/:-::+omMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh:/+ooooososyssyyysyyyyyyhyyso//++/+/+//+///://+yyhNmNMMMMysso+hmMMm://+//:::://:-:://s++::::::///:/+oo+osysooo+/:-:--/hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMh:://+yssssyysssyyyyhyyyysoos+///++//:::/::/o///+ohdhmNMMmoysysydMMNs:::/+++////---::-:://::++o+:/:://+/:/ssss+/:///--:hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdoso+ossysysssosyhyyyyyyysyyso+::/:////:/+/+/:://+odhdNMMy//+/ohdMMMy:+/+++++++//::/:::-::/://++/++:::::://++///:-::--:hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmysssyysyyyysysyhyhyyyhysssyyyy+/:://///++/+//::://oshNMMs+oooohmMMNo+ossysso///++///++++/+/:::://:::::-:-::--::--:-::/dMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMmyyhyyssyooysyyhyyyyyyyhyyyhyyyso+++sss++//+o/++/++++smMMy/////smMNmdddddddddso+ssoo+++oo+ooo+s++/////://::---:+:-:-:::hMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMdosy+o++/++o++++ossyyhhhsysyysyyooosyyso//oossyhsssyosmMMh+oo//+oyhddddhdddddmdddhysoo++oooossssossyso++://:/::::--:::/dMMMMMMMMMMMMMMM
        `);
    } else{
        console.log("Incorrect password! Try again!!! ")
        let userInput = readline.question("Enter password? Or go back? ");
        while(userInput.toLowerCase() !== 'enter password' && userInput.toLowerCase() !== 'enter' && userInput.toLowerCase() !== 'password' && userInput.toLowerCase() !== 'go back' && userInput.toLowerCase() !== 'back' ){
            userInput = readline.question("Enter password? Or go back? ");
        }
        if (userInput.toLowerCase() === 'enter password' || userInput.toLowerCase() === 'enter' || userInput.toLowerCase() === 'password'){
            console.clear();
            vault();
        } else{
            console.clear();
            passageWay();
        }
    }
}   // END vault()



// INITIALIZE GAME ---------------------------------
play();
