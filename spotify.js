
alert("SORRY GUY'S CAN'T ADD THE FUNCTIONALITY TO PLAY MULTIPLE SONGS AND MORE BUT YOU CAN PLAY ONE SONG BY CLICKING THE PLAY BUTTON IN THE FOOTER")

let d = document.querySelector(".btn-play")
let con = document.getElementById("main-play")
let addnew = document.getElementById("added")
addnew.addEventListener("click", function(){
    let play_naame = document.getElementById("entry").value.trim()
    if (play_naame){
        let c = document.createElement("div")
        let update = document.createElement("button")
        let delete_btn = document.createElement("button")
        let nameSpan = document.createElement("span")
        delete_btn.className = "delete-btn"
        update.className = "update-btn"
        update.innerHTML = "Update"
        delete_btn.innerHTML = "Delete"
        nameSpan.className = "playlist-name"
        nameSpan.textContent = play_naame
        c.className = "playlist-name"
        c.classList.add("items")
        update.addEventListener("click", function(){
            let new_name = prompt("Enter new playlist name:", play_naame)
            if (new_name) {
                nameSpan.innerText = new_name
            }
        })

        delete_btn.addEventListener("click", function(){
           let b = confirm("Do you want to Delete playlist: " + play_naame)
           if (b ===true){
               c.remove()
           }
           else{
            alert("BE CAREFULL.....🤷‍♂️🤷‍♂️")
           }
        })

        c.appendChild(nameSpan)
        c.appendChild(update)
        c.appendChild(delete_btn)
        con.appendChild(c)
        document.getElementById("entry").value = "";

    }
})
let play_btn = document.getElementById("play")
let prev_btn = document.getElementById("prev")
let next_btn = document.getElementById("next")
let shuffle_btn = document.getElementById("shuffle")
let repeat_btn = document.getElementById("repeat")  

// SLIDEBAR OR FOOTER OR MUSIC CONTROL MAIN FUNCTION and song linking....

async function playmusic() {
    let folder = await fetch("http://127.0.0.1:3000/songs/")
    let songs = await folder.text()
    let store_songs = document.createElement("div")
    store_songs.innerHTML = songs
    let url = store_songs.getElementsByTagName("a")
    let main_url = []
    for (let index = 0; index < url.length; index++) {
        const element = url[index];
        if(element.href.endsWith(".mp3")){
            main_url.push(element.href)
        }
    }
    return main_url
}

// async function getsongs() {
//     let audio_source = await playmusic()
//     // console.log(audio_source)
//     console.log(audio_source[0].duration)

// }
// getsongs()

let aud = new Audio("songs/Blue Eyes.mp3")
play_btn.addEventListener("click", function(){
    if (play_btn.src.includes("play.png")){
        play_btn.src = "images/pause.png"
        let tme = aud.duration
        console.log(tme%60)
        console.log(aud.cur)
        aud.play()
    }
    else{
        play_btn.src = "images/play.png"
        aud.pause()
    }
})

//  FOR TROLL BUTTON

let troll = document.getElementById("troll")
troll.addEventListener("click", function(){
    let cnf = confirm("WANT TO CONTINUE FORWARD???")
    if (cnf === true){
        let x = confirm("THINK BEFORE PROCEEDING...💀💀💀💀")
        if (x === true){
            alert("Processing... please wait 😇 for 1 second");
            setTimeout(() => {
                window.location.href = "important.html";
      
            }, 1000); // Delay in milliseconds (5000ms = 5 seconds)
        }
  }

})
 async function tunes() {
  let s = await fetch("https://itunes.apple.com/search?term=coldplay&entity=album&limit=51")
  let d = await s.json().then(data => {
    // let i = Math.floor(Math.random()*data.results.length) use this when u only need to change one image
    let simidiv = document.querySelectorAll(".simi")
    let album = data.results.sort(()=> Math.random()-0.5)
    simidiv.forEach((div , index) => {
        let simiimg = div.querySelector("img")
        let simitext = div.querySelector("span")
        if(album[index]){
            let spanText_name = document.createElement("span")
            spanText_name.innerText = `By: ${album[index].artistName}`
            console.log(album[index].artistName)  
            simiimg.src = album[index].artworkUrl100
            simitext.innerText = album[index].collectionName
            div.appendChild(spanText_name)
        }
    })
  })
}
tunes()
function addSVGImageToSimiDivs() {
    let simiDivs = document.querySelectorAll('.simi');
    
    simiDivs.forEach((simiDiv) => {
        if (!simiDiv.querySelector('.svg-container')) { // prevent duplicates
            let svgContainer = document.createElement('div');
            svgContainer.className = 'svg-container';
            let svgImg = document.createElement('img');
            svgImg.src = 'images/play1-button.png';
            svgImg.alt = 'Play button';
            svgImg.className = "svg-icon";
            svgContainer.appendChild(svgImg);
            simiDiv.appendChild(svgContainer);
        }
    });
}

addSVGImageToSimiDivs()


// let d = document.querySelector(".btn-play")
// let con = document.getElementById("main-play")
// let addnew = document.getElementById("added")

// // ✅ Save playlists in localStorage
// function savePlaylists() {
//     let playlists = [];
//     document.querySelectorAll("#main-play .items .playlist-name").forEach(span => {
//         playlists.push(span.textContent);
//     });
//     localStorage.setItem("playlists", JSON.stringify(playlists));
// }

// // ✅ Create playlist item (used for add & load)
// function createPlaylistItem(play_naame) {
//     let c = document.createElement("div")
//     let update = document.createElement("button")
//     let delete_btn = document.createElement("button")
//     let nameSpan = document.createElement("span")

//     delete_btn.className = "delete-btn"
//     update.className = "update-btn"
//     update.innerHTML = "Update"
//     delete_btn.innerHTML = "Delete"
//     nameSpan.className = "playlist-name"
//     nameSpan.textContent = play_naame

//     c.className = "playlist-name"
//     c.classList.add("items")

//     update.addEventListener("click", function () {
//         let new_name = prompt("Enter new playlist name:", play_naame)
//         if (new_name) {
//             nameSpan.innerText = new_name
//             savePlaylists() // ✅ update storage
//         }
//     })

//     delete_btn.addEventListener("click", function () {
//         let b = confirm("Do you want to Delete playlist: " + play_naame)
//         if (b === true) {
//             c.remove()
//             savePlaylists() // ✅ update storage
//         }
//         else {
//             alert("BE CAREFULL.....🤷‍♂️🤷‍♂️")
//         }
//     })

//     c.appendChild(nameSpan)
//     c.appendChild(update)
//     c.appendChild(delete_btn)
//     con.appendChild(c)

//     savePlaylists() // ✅ save after adding
// }

// // ✅ Load playlists on startup
// function loadPlaylists() {
//     let stored = JSON.parse(localStorage.getItem("playlists")) || []
//     stored.forEach(name => {
//         createPlaylistItem(name)
//     })
// }

// // Add new playlist
// addnew.addEventListener("click", function () {
//     let play_naame = document.getElementById("entry").value.trim()
//     if (play_naame) {
//         createPlaylistItem(play_naame)
//         document.getElementById("entry").value = "";
//     }
// })

// let play_btn = document.getElementById("play")
// let prev_btn = document.getElementById("prev")
// let next_btn = document.getElementById("next")
// let shuffle_btn = document.getElementById("shuffle")
// let repeat_btn = document.getElementById("repeat")  

// play_btn.addEventListener("click", function(){
//     if (play_btn.src.includes("play.png")){
//         play_btn.src = "images/pause.png"
//     }
//     else{
//         play_btn.src = "images/play.png"
//     }
// })

// let troll = document.getElementById("troll")
// troll.addEventListener("click", function(){
//     let cnf = confirm("WANT TO CONTINUE FORWARD???")
//     if (cnf === true){
//         let x = confirm("THINK BEFORE PROCEEDING...💀💀💀💀")
//         if (x === true){
//             alert("Processing... please wait 😇 for 1 second");
//             setTimeout(() => {
//                 window.location.href = "important.html";
//             }, 1000); 
//         }
//   }
// })

// async function tunes() {
//   let s = await fetch("https://itunes.apple.com/search?term=coldplay&entity=album&limit=51")
//   let d = await s.json().then(data => {
//     let simidiv = document.querySelectorAll(".simi")
//     let album = data.results.sort(()=> Math.random()-0.5)
//     simidiv.forEach((div , index) => {
//         let simiimg = div.querySelector("img")
//         let simitext = div.querySelector("span")
//         if(album[index]){
//             let spanText_name = document.createElement("span")
//             spanText_name.innerText = `By: ${album[index].artistName}`
//             console.log(album[index].artistName)  
//             simiimg.src = album[index].artworkUrl100
//             simitext.innerText = album[index].collectionName
//             div.appendChild(spanText_name)
//         }
//     })
//   })
// }
// tunes()

// function addSVGImageToSimiDivs() {
//     let simiDivs = document.querySelectorAll('.simi');
    
//     simiDivs.forEach((simiDiv) => {
//         if (!simiDiv.querySelector('.svg-container')) { 
//             let svgContainer = document.createElement('div');
//             svgContainer.className = 'svg-container';
//             let svgImg = document.createElement('img');
//             svgImg.src = 'images/play1-button.png';
//             svgImg.alt = 'Play button';
//             svgImg.className = "svg-icon";
//             svgContainer.appendChild(svgImg);
//             simiDiv.appendChild(svgContainer);
//         }
//     });
// }

// addSVGImageToSimiDivs()

// // ✅ finally load stored playlists when page opens
// loadPlaylists();
