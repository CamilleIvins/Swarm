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

people.forEach((person) => { console.log(person.location) })

function attack() {
    let inLocation = people.filter((person) => person.location == area)
    let victim = inLocation.find(person => person.picture != '🦇')
}



drawPeople()