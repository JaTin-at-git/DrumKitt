function handleClick(element) {
  element.addEventListener('click', () => {
    if (element.classList.contains("w")) {
      let audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
    } else if (element.classList.contains("a")) {
      lets= audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
    } else if (element.classList.contains("s")) {
      lets= audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
    } else if (element.classList.contains("d")) {
      lets= audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
    } else if (element.classList.contains("j")) {
      lets= audio = new Audio("sounds\\crash.mp3");
      audio.play();
    } else if (element.classList.contains("k")) {
      lets= audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
    } else if (element.classList.contains("l")) {
      lets= audio = new Audio("sounds\\snare.mp3");
      audio.play();
    }
  })
}

var buttons = document.querySelectorAll('.btn.button');
buttons.forEach(handleClick);
