function handleClick(element) {
  element.addEventListener('click', () => {
    if (element.classList.contains("w")) {
      let audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
    } else if (element.classList.contains("a")) {
      lets = audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
    } else if (element.classList.contains("s")) {
      lets = audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
    } else if (element.classList.contains("d")) {
      lets = audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
    } else if (element.classList.contains("j")) {
      lets = audio = new Audio("sounds\\snare.mp3");
      audio.play();
    } else if (element.classList.contains("k")) {
      lets = audio = new Audio("sounds\\crash.mp3");
      audio.play();
    } else if (element.classList.contains("l")) {
      lets = audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
    }

    element.classList.add('pressed');
    setTimeout(() => {
      element.classList.remove('pressed');
    }, 200);
  });
}

var buttons = document.querySelectorAll('.button');
buttons.forEach(handleClick);

document.addEventListener('keypress', (event) => {
  if (event.key == 'w') {
    document.querySelector('.w').click();
  } else if (event.key == 'a') {
    document.querySelector('.a').click();
  } else if (event.key == 's') {
    document.querySelector('.s').click();
  } else if (event.key == 'd') {
    document.querySelector('.d').click();
  } else if (event.key == 'j') {
    document.querySelector('.j').click();
  } else if (event.key == 'k') {
    document.querySelector('.k').click();
  } else if (event.key == 'l') {
    document.querySelector('.l').click();
  }
})
