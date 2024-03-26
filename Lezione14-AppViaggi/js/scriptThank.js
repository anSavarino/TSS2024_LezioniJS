let timer = document.querySelector("#secondi");


  window.addEventListener("DOMContentLoaded", ()=>{
      let cont = 9;
      setInterval(()=>{
        timer.innerHTML = cont-- +" ";
      }, 1000)
    setTimeout(() => {
        console.log("Delayed for 10 second.");
        window.location.href = "index.html";
      }, 10000);
  });