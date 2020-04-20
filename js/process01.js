window.addEventListener("load", () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let n = page.split(".")[0];

    let looks = document.getElementsByClassName("looks");
    for (let i = 0; i < looks.length; i++) {
        looks[i].src = "../assets/" + n + "/" + (i + 1) + ".jpg";
    }

    let anim = document.getElementById("video_coleccion1");
    anim.src = "../assets/designers/" + n + ".mp4";


    let rand = Math.round(Math.random() * 13) + 1;
    let v2 = document.getElementById("video2");
    v2.src = "../assets/interiors/interior" + rand + ".mp4";

    let v3 = document.getElementById("video3");
    rand = Math.round(Math.random() * 13) + 1;
    v3.src = "../assets/interiors/interior" + rand + ".mp4";

    const loader = document.getElementById("loader-clean");
    loader.className += " hidden";
});
