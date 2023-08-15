console.log('Dusk descends 🌇')

const locations = [
    '🏤', '🏥', '🏢', '🏨', '🏟️', '💒', '⛽', '🎪', '🏦'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏦',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏟️',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏟️',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '⛽',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]

// for (let i = 0; i < people.length; i++) {
//     let person = people[i]
//     console.log(people[i].name)
// }


function drawPeople() {
    locations.forEach((area) => {
        console.log(area)
        let inLocation = people.filter((person) => person.location == area)
        let personEmoji = inLocation.map((person) => person.picture + person.name)
        console.log(personEmoji)
        document.getElementById(area).innerText = personEmoji.join(', ')
    })
}

// people.forEach((person) => { console.log(person.location) })



function attackGasStation() {
    // find all the people at the gas station
// look at all of the people <-- open array
// compare people location to gas station
// ^success? --> turn people into bats
// show that change

people.forEach((person) => {
    if(person.location == '⛽') {
        person.picture = '🦇'
    }
})
drawPeople()
console.log(people)
}








// This is the one that also works
// function attackGasStation() {
//     let peopleAtLocation = people.filter(person => person.location == '⛽')
//     peopleAtLocation.map(person => person.picture = '🦇')
//     drawPeople()
// }

drawPeople()
// function attack() {
//     let location = locations.filter(location => locations.)
//     console.log(locations.length)
    
//     // locations.forEach((target) => {
//     //     let swarm = people.filter((person) => person.location == target)
//     //     let transform = swarm.map(person => person.picture != '🦇')
//     //     console.log(transform)
//     // })

// }



// drawPeople()

// // locations.forEach((index) => {
// //     // console.log(index)
// //     let inLocation = people.filter((person) => person.location == index)
// //     // let personEmoji = inLocation.map((person) => person.picture)

// //     let victim = inLocation.map(person => person.picture != '🦇')
// //     if (victim) {
// //         // victim.picture = '🦇'

// //         // }
// //         document.getElementById(index).innerText = victim.join(', ')
// //     }
// // })
// // drawPeople()