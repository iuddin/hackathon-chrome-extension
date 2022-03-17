

//Features remaining:
//Readme 
//Sounds!
//Background change
//Client can modify: (1) defaultTime (2) Sound on/off (3) Which sites to track


//Stretch features:
    //save number of times client got alerts for a website -> retrieve total no. of mins spent on said website
    

//if client goes to any site in the matches array 
    //open main.js
    //time tracker automatically set off usign setTimeout
    //when time spent > defaultTime -> set alert
    
    const defaultTime = 7000;

    setTimeout(function() {
        alert("You\'ve exceeded your screen time. Get to code!");
        window.location.replace("https://leetcode.com/problemset/all/");
    }, defaultTime);

    //client can modify default time dynamically

    //change background after alert if possible:
    // setTimeout(function() {
    //     if (counter === 1) {window.location.replace("http://www.w3schools.com")}    
    // }, 2000);
    



//Read me page or chrome-extension page for Screen Time(TM)
    //allow client to choose or add which sites to track (in addition to deault sites)
    //allow client to choose time monitored (default 15 mins)







