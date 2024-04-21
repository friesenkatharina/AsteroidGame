document.addEventListener("DOMContentLoaded", function () {
  let spacecraft = document.querySelector("#spacecraft");

  let x = 235;

  let asteroids = [
    { x: 100, y: 0 },
    { x: 200, y: 20 },
    { x: 300, y: 10 },
    { x: 500, y: 30 },
    { x: 700, y: 40 },
  ];

  let stepper = window.setInterval(moveAsteroids, 100); // Interval to move asteroids every 50ms

  spacecraft.style.left = x + "px"; // Set initial position of the spacecraft

  document.onkeydown = function (e) {
    e = e || window.e; // Get the event (support for different browsers)
    if (e.key === "ArrowRight") {
      x += 15; // move right
      spacecraft.style.left = x + "px";
    }

    if (e.key === "ArrowLeft") {
      x -= 15; // move left
      spacecraft.style.left = x + "px";
    }
  };

  function moveAsteroids() {
    for (let i = 0; i < asteroids.length; i++) {
      asteroids[i].y += i + 6;
      displayAsteroid(i);

      if (asteroids[i].y >= 470) {
        detectCollision(i);
      }
      if (asteroids[i].y >= 480) {
        rebirthAsteroid(i);
      }
    }
  }

  function rebirthAsteroid(i) {
    asteroids[i].y = 0;
    asteroids[i].x = Math.random() * 750;
    displayAsteroid(i);
  }

  function displayAsteroid(i) {
    let asteroid = document.querySelector("#asteroid" + i); // Corrected selector to use ID
    asteroid.style.top = asteroids[i].y + "px";
    asteroid.style.left = asteroids[i].x + "px";
  }

  function detectCollision(i) {
    if (asteroids[i].x > x - 20 && asteroids[i].x < x + 30) {
      window.clearInterval(stepper);
      alert("Game over");
    }
  }
});
