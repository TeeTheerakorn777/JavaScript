const sounds = [
    "1",
    "2",
    "3",
    "4",
    "5"
]

sounds.forEach(sound=>{
    const btn = document.createElement("button")
    btn.innerText = sound
    btn.addEventListener("click",()=>{
        stopSounds()
        document.getElementById(sound).play()
    })
    document.getElementById("controller").append(btn)
})

function stopSounds(){
    sounds.forEach(sound=>{
       const song =  document.getElementById(sound)
       song.pause()
       song.currentTime = 0
    })
}