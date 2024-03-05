//TODO: Add Your Code Below
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json) {
    for(let i=0;i<json.length;i++){
        let astronautDiv = document.createElement("div");
        astronautDiv.classList.add("astronaut");
        if(json[i].active){
         json[i].active ='<span style="color: green;">true</span>';
        }
        astronautDiv.innerHTML = `
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(', ')}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}" >
        `;
    document.getElementById("container").appendChild(astronautDiv);

    }

    });
    });

});