window.addEventListener("load", function (e) {

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var n = page.split(".")[0];

    var looks = document.getElementsByClassName("looks");
    for (var i = 0; i < looks.length; i++) {
        looks[i].src = "../assets/" + n + "/" + (i + 1) + ".jpg";
    }

    var anim = document.getElementById("video_coleccion1");
    anim.src = "../assets/designers/" + n + ".mp4";


    var rand = Math.round(Math.random() * 13);
    var v2 = document.getElementById("video2");
    v2.src = "../assets/interiors/interior" + rand + ".mp4";

    var v3 = document.getElementById("video3");
    rand = Math.round(Math.random() * 13);
    v3.src = "../assets/interiors/interior" + rand + ".mp4";

});