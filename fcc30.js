//BUILD A TRAFFIC LIGHT SEQUENCER
const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
      if(!config.phases || config.phases.length === 0){
         console.log("No phases found");
         return;
      }
      if(config.fault === true){
        console.log("Faulted phase!");
        return;
      }
     let count = 0;
     while(count < cycles){
      for(let i = 0; i < config.phases.length; i++){
        let phase = config.phases[i];
        if(config.phases[i].duration <= 0){
          console.log("Invalid phase detected");
        }else{
          console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }

    }
         count++
  }
}

//runSequence(config4, 5);

function generateTimeline(config, cycles) {
    let arr = [];
    let initialCount = 0;
    for(let i = 0; i < cycles; i++){
      for(let j = 0; j < config.phases.length; j++){
      initialCount += config.phases[j].duration;
      arr.push(initialCount);
      }
   
    }
    return arr;
   
}

const test2 = generateTimeline(config1, 1);
console.log(test2);