angular.module('app').controller('mainCtrl', function ($scope) {

    var vid = document.getElementById("video");
    console.log(vid);
    vid.currentTime = 39.5;
    console.log(vid);
    vid.play();


    ////Get the first form with the name
    ////Hopefully there is only one, but there are more, select the correct index
    //var frm = document.getElementById('inputNameId')[0];
    //frm.submit(); // Submit
    //frm.reset();  // Reset
    //return false; // Prevent page refresh

});


//var vid = document.getElementById("video");
//vid.currentTime = 20;
//window.onload = function() {
//
//    var vid = document.getElementById("video");
//    console.log(vid);
//    vid.currentTime = 10;
//    console.log(vid);
//    vid.play();
//}
////function getCurTime() {
////    alert(vid.currentTime);
////}
//
//function setCurTime() {
//    vid.currentTime = 10;
//}

//setCurTime();

//    function vidplay() {
//        var video = document.getElementById("video");
//        var button = document.getElementById("play");
//        if (video.paused) {
//            video.play();
//            button.textContent = "||";
//        } else {
//            video.pause();
//            button.textContent = ">";
//        }
//    }
//
//function restart() {
//    var video = document.getElementById("video");
//    video.currentTime = 0;
//}
//
//function skip(value) {
//    var video = document.getElementById("video");
//    video.currentTime += value;
//}


