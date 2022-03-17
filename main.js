

//Features remaining:
//Google audio issue + check if others can hear audio
//Client can modify: (1) defaultTime (2) Sound on/off (3) Which sites to track (4) Sound options: off or choose from list


//Stretch features:
    //Readme - need to publish to Google Chrome Extensions page
    //save number of times client got alerts for a website -> retrieve total no. of mins spent on said website
    
//if client goes to any site in the matches array 
    //open main.js
    //time tracker automatically set off usign setTimeout
    //when time spent > defaultTime -> set alert
    

    let myAudio = new Audio();   
    myAudio.src = chrome.extension.getURL("sound1.mp3");   
    

    // const defaultTime = 7000;

    // setTimeout(function() {
        
    //     myAudio.play();
    //     alert("You\'ve exceeded your screen time. Get to code!");
    //     window.location.replace("https://leetcode.com/problemset/all/");
    // }, defaultTime);

    //Time out options page for JS
    // Saves options to chrome.storage
    function save_options() {
    let timeVal = document.getElementById('time').value;
    let likesColor = document.getElementById('like').checked;
    //storing to chrome.storage
    chrome.storage.sync.set({
      favoriteTime: timeVal,
      likesColor: likesColor
    }, function() {
      // Update status to let user know options were saved.
      let status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value timeVal = '5' and likesColor = true.
    chrome.storage.sync.get({
      favoriteTime: 5,
      likesColor: true
    }, function(items) {
      document.getElementById('time').value = items.favoriteTime;
      document.getElementById('like').checked = items.likesColor;
    });
  }


  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
    


//defaultTime is what we use in setTimeout
//1min = 60,000ms
//30s aka 0/5 min = 30,000ms
//defaultTime = timeVal/60000

const defaultTime = 7000;
// const defaultTime = items.favoriteTime*60000;
//items.favoriteTime = 0.5?

setTimeout(function() {
        
    myAudio.play();
    alert("You\'ve exceeded your screen time. Get to code!");
    window.location.replace("https://leetcode.com/problemset/all/");
}, defaultTime);








