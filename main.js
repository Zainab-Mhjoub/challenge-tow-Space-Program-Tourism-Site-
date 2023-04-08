// start variable
//destination variable
let img = document.querySelector('#d-img');
let h1 = document.querySelector('#d-name');
let pargraph = document.querySelector('#tall-text');
let distance = document.querySelector('#distance');
let space = document.querySelector('#space');
let moon = document.querySelector('#d-moon');
let mars = document.querySelector('#d-mars');
let europa = document.querySelector('#d-europa');
let titan = document.querySelector('#d-titan');
//start crew variables
let crewImg = document.getElementById('crewImg');
let firstTitle = document.querySelector('#firstTitleid');
let secondTitle = document.querySelector('#secondTitleid');
let crewPragraph = document.querySelector('#crewPragraphid');
//start techonology variables
const activePage = window.location.pathname;

// start main nav ul
function Redirect (url) {
    if(url != '')
    {
        window.location = url;

    }
}
// start destination nav ul 
moon.addEventListener('click', () => {

    img.src ='Images/destination/image-moon.png';
    h1.textContent = 'MOON';
    pargraph.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ';
    distance.textContent = '384,400 km';
    space.textContent = ' 3 days';
})
mars.addEventListener('click', () => {

    img.src ='Images/destination/image-mars.png';
    h1.textContent = 'MARS';
    pargraph.textContent = ' Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    distance.textContent = '225 mil. km';
    space.textContent = ' 9 months ';

})
europa.addEventListener('click', () => {

    img.src ='Images/destination/image-europa.png';
    h1.textContent = 'EUROPA';
    pargraph.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lovers dream. With an icy surface, its perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    distance.textContent = '628 mil. km';
    space.textContent = ' 3 years';

})
titan.addEventListener('click', () => {

    img.src ='Images/destination/image-titan.png';
    h1.textContent = 'TITAN';
    pargraph.textContent = ' The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    distance.textContent = ' 1.6 bil. km';
    space.textContent = '7 years ';

})

//start crew radio button

function changeFormula(){
    if(document.getElementById('img-1').checked){
        crewImg.src = "/Images/crew/image-douglas-hurley.png";
        firstTitle.textContent = "Commander";
        secondTitle.textContent = "Douglas Hurley";
        crewPragraph.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."; 
    }
           if(document.getElementById('img-2').checked){
            crewImg.src = "/Images/crew/image-victor-glover.png";
            firstTitle.textContent = "Mission Specialist";
            secondTitle.textContent = "Mission Specialist";
            crewPragraph.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
     
           }
           if(document.getElementById('img-3').checked){
            crewImg.src = "/Images/crew/image-mark-shuttleworth.png";
            firstTitle.textContent = "Pilot";
            secondTitle.textContent = "Victor Glover";
            crewPragraph.textContent ="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
     
           }
           if(document.getElementById('img-4').checked){
            crewImg.src = "/Images/crew/image-anousheh-ansari.png";
            firstTitle.textContent = "Flight Engineer";
            secondTitle.textContent = "Anousheh Ansari";
            crewPragraph.textContent ="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
     
           }
      }
//start technology 
const btnlist = document.querySelectorAll('.btn');
btnlist.forEach(btnlist)
