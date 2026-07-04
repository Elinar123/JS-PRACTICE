
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
//Turns playlist array into a flattened array
function flattenPlaylists(playList) {
  let flattend = [];
  if(!Array.isArray(playList)) return [];
    for(let i = 0; i < playList.length; i++){
      for(let j = 0; j < playList[i].length; j++){
        let newObj = {...playList[i][j], source: [i, j]};
        flattend.push(newObj);
      }
    }

    return flattend;
}

//Added a score property to the output of the flattenPlaylists function
function scoreTracks(flattenedArr) {
  let finalArr = [];
   for(let i = 0; i < flattenedArr.length; i++){
       const scr = flattenedArr[i].votes * 10 - Math.abs(flattenedArr[i].bpm - 120);
       let newObj = {...flattenedArr[i], score: scr};
       finalArr.push(newObj);
   }
   return finalArr;
}
//Deletes duplicated trackId
function dedupeTracks(dedupe) {
   let finalArr = [];
   for(let i=0;i<dedupe.length;i++){
     let isDuplicate = false;
    for(let j=0;j<finalArr.length;j++){
      if(dedupe[i].trackId === finalArr[j].trackId){
          isDuplicate = true;
      }
    
    }
       if(!isDuplicate){
        finalArr.push(dedupe[i]);
       }

   }
   return finalArr;
}
//Limits the artist's names occurence within the array
function enforceArtistQuota(quota, maxPerArtist) {
  let finalArr = [];
  for(let i=0;i<quota.length;i++){
    let counter = 0;
      for(let j=0;j<finalArr.length;j++){
        if(quota[i].artist === finalArr[j].artist){
          counter++;
        }
      }
      if(counter < maxPerArtist ){
          finalArr.push(quota[i]);
      }
  }
  return finalArr;
}

//Create a new object based on the previous functions output, with a new slot and trackId property
function buildSchedule(arrOftr) {
  let finalArr = [];
     for(let i=0;i<arrOftr.length;i++){
        let newObj = {slot: i + 1, trackId: arrOftr[i].trackId};
        finalArr.push(newObj);
     }
     return finalArr;
} 

//Orchestrate all helper functions within this function
function remixPlaylist(arr, maxPerArtist) {
    const flat = flattenPlaylists(arr);
    const scored = scoreTracks(flat);
    const unique = dedupeTracks(scored);
    const capped = enforceArtistQuota(unique, maxPerArtist);
    
    return buildSchedule(capped);


}

console.log(remixPlaylist(playlists, 2));

