function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    
    missionAbort.addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

     missionAbort.addEventListener('click', function() {
        const confirmAbort = confirm("Are you sure you want to abort the mission?");
        if (confirmAbort) {
          // If the user confirms, change the button text
          missionAbort.textContent = "Mission aborted! Space shuttle returning home.";
        } 
    });
    
}

window.addEventListener("load", init);
