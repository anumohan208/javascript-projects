// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOff = document.getElementById("takeoff");
    const flightStatus =document.getElementById("flightStatus");
    const shuttleBG = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up =document.getElementById("up");
    const down =document.getElementById("down");
    const right =document.getElementById("right");
    const left =document.getElementById("left");
    const rocket =document.getElementById("rocket");

    rocket.style.position='absolute';
    rocket.style.left='0px';
    rocket.style.bottom='0px';

    takeOff.addEventListener('click', event => {
        const confirmTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeOff) {

            flightStatus.textContent = "Shuttle in flight.";
            shuttleBG.style.backgroundColor="blue";
            spaceShuttleHeight.textContent = 10000;
     }
     });

     landing.addEventListener('click', event => {
        alert("The shuttle is landing. Landing gear engaged.");
    
            flightStatus.textContent = "The shuttle has landed.";
            shuttleBG.style.backgroundColor="green";
            spaceShuttleHeight.textContent = 0;
     });

     missionAbort.addEventListener('click', event => {
        const confirmTakeOff = confirm("Confirm that you want to abort the mission.");
        if (confirmTakeOff) {

            flightStatus.textContent = "Mission aborted.";
            shuttleBG.style.backgroundColor="green";
            spaceShuttleHeight.textContent = 0;
     }
     });

     up.addEventListener('click', event => {
        let currentTop = parseInt(rocket.style.bottom)+10+'px';
       rocket.style.bottom =currentTop;
     });

     down.addEventListener('click', event => {
        let currentTop = parseInt(rocket.style.bottom)-10+'px';
       rocket.style.bottom =currentTop;
     });

     left.addEventListener('click', event => {
        let currentTop = parseInt(rocket.style.left)-10+'px';
       rocket.style.left =currentTop;
     });

     right.addEventListener('click', event => {
        let currentTop = parseInt(rocket.style.left)+10+'px';
       rocket.style.left =currentTop;
     });


    // missionAbort.addEventListener('mouseenter', function (event) {
    //     event.target.style.backgroundColor = "red";
    // });

    // missionAbort.addEventListener("mouseout", function( event ) {
    //     event.target.style.backgroundColor = "";
    //  });

    //  missionAbort.addEventListener('click', function() {
    //     const confirmAbort = confirm("Are you sure you want to abort the mission?");
    //     if (confirmAbort) {
    //       // If the user confirms, change the button text
    //       missionAbort.textContent = "Mission aborted! Space shuttle returning home.";
    //     } 
    // });
    
}

window.addEventListener("load", init);

