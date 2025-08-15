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

play_btn.addEventListener("click", function(){
    if (play_btn.src.includes("play.png")){
        play_btn.src = "images/pause.png"
    }
    else{
        play_btn.src = "images/play.png"
    }
})
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