// Code your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your buildCrewArray function here:
function buildCrew(candidateArr,selectedArr){
  let crewArr=[]
  for(i=0;i<candidateArr.length;i++){
    for(j=0;j<selectedArr.length;j++){
      //console.log("****",selectedArr[j]["astronautID"]);
      if(candidateArr[i]["astronautID"]==selectedArr[j]["astronautID"])
      {
        crewArr.push(candidateArr[i]);
        //console.log("*****",crewArr);
      }
    }
  }
    return crewArr;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let newArr=[];
for(i=0;i<3;i++){
  let animal=randomSelection(animals);
  if(newArr.includes(animal))
     i--;
  else  
     newArr.push(randomSelection(animals));
}
//console.log(newArr);
let newArr1=buildCrew(animals,newArr);
console.log(newArr1[0]["name"],newArr1[1]["name"],"and",newArr1[2]["name"],"are going to Space!");