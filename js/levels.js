var canvas = document.getElementById("game");
canvas.height = 500;
canvas.width = 900;

var c = canvas.getContext("2d");
unit = canvas.width / 90;
levels = [
  {
    portal: [34, 8],
    spawn: [4, 8],
    powerups: [],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [45, 0],
        width: 1,
        height: 40,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 60,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 19],
        width: 2,
        height: 2,
        color: "red",
        type: "normal",
      },
      {
        placement: [0, 16],
        width: 8,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [16, 12],
        width: 8,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [17, 11],
        width: 7,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [10, 14],
        width: 1,
        height: 1,
        color: "orange",
        type: "normal",
      },
      {
        placement: [10, 9],
        width: 1,
        height: 1,
        color: "orange",
        type: "normal",
      },
      {
        placement: [13, 5],
        width: 1,
        height: 2,
        color: "blue",
        type: "normal",
      },
      {
        placement: [18, 2],
        width: 3,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [25, 4],
        width: 2,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [33, 10],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
    ],
  },
  {
    portal: [40, 18],
    spawn: [4, 8],
    powerups: [],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 30,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 35,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [4, 20],
        width: 1,
        height: 1,
        color: "yellow",
        type: "normal",
      },
      {
        placement: [10, 18],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [10, 14],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [12, 3],
        width: 1,
        height: 20,
        color: "silver",
        type: "normal",
      },
      {
        placement: [1, 15],
        width: 2,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [1, 11],
        width: 2,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [9, 9],
        width: 1,
        height: 1,
        color: "red",
        type: "normal",
      },
      {
        placement: [10, 9],
        width: 1,
        height: 1,
        color: "orange",
        type: "normal",
      },
      {
        placement: [11, 9],
        width: 1,
        height: 1,
        color: "yellow",
        type: "normal",
      },
      {
        placement: [12, 9],
        width: 1,
        height: 1,
        color: "green",
        type: "normal",
      },
      {
        placement: [13, 9],
        width: 1,
        height: 1,
        color: "blue",
        type: "normal",
      },
      {
        placement: [14, 9],
        width: 1,
        height: 1,
        color: "indigo",
        type: "normal",
      },
      {
        placement: [15, 9],
        width: 1,
        height: 1,
        color: "violet",
        type: "normal",
      },
      {
        placement: [13, 12],
        width: 5,
        height: 1,
        color: "navy",
        type: "normal",
      },
      {
        placement: [18, 5],
        width: 1,
        height: 8,
        color: "violet",
        type: "normal",
      },
      {
        placement: [17, 0],
        width: 1,
        height: 3.9,
        color: "violet",
        type: "normal",
      },
      {
        placement: [9, 5],
        width: 2,
        height: 1,
        color: "red",
        type: "normal",
      },
      {
        placement: [20, 0],
        width: 1,
        height: 20,
        color: "silver",
        type: "normal",
      },
      {
        placement: [21, 19],
        width: 2,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [25, 13],
        width: 1,
        height: 4,
        color: "silver",
        type: "normal",
      },
      {
        placement: [24, 13],
        width: 1,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [24, 16],
        width: 1,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [25, 9],
        width: 1,
        height: 4,
        color: "silver",
        type: "normal",
      },
      {
        placement: [24, 9],
        width: 1,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [24, 12],
        width: 1,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [34, 9],
        width: 2,
        height: 1,
        color: "silver",
        type: "normal",
      },
      {
        placement: [39, 20],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 8],
    spawn: [4, 8],
    powerups: [
      {
        position: [2, 20],
        type: "jumpheight",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 60,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 19],
        width: 2,
        height: 2,
        color: "red",
        type: "normal",
      },
      {
        placement: [0, 16],
        width: 8,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [16, 12],
        width: 8,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [17, 11],
        width: 7,
        height: 1,
        color: "maroon",
        type: "normal",
      },

      {
        placement: [25, 4],
        width: 2,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [33, 10],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
      {
        placement: [0, 18],
        width: 1,
        height: 4,
        color: "black",
        type: "normal",
      },
      {
        placement: [0, 21],
        width: 4,
        height: 1,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 19.5],
        width: 1,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 18],
        width: 1,
        height: 0.35,
        color: "black",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 8],
    spawn: [4, 8],
    powerups: [
      {
        position: [2, 20],
        type: "speed",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 60,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 19],
        width: 2,
        height: 2,
        color: "red",
        type: "normal",
      },
      {
        placement: [0, 16],
        width: 8,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [16, 12],
        width: 8,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [17, 11],
        width: 7,
        height: 1,
        color: "maroon",
        type: "normal",
      },

      {
        placement: [25, 4],
        width: 2,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [33, 10],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
      {
        placement: [0, 18],
        width: 1,
        height: 4,
        color: "black",
        type: "normal",
      },
      {
        placement: [0, 21],
        width: 4,
        height: 1,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 19.5],
        width: 1,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 18],
        width: 1,
        height: 0.35,
        color: "black",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 6],
    spawn: [4, 8],
    powerups: [
      {
        position: [2, 20],
        type: "speed",
        taken: false,
      },
      {
        position: [1, 20],
        type: "jumpheight",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 60,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 19],
        width: 2,
        height: 2,
        color: "red",
        type: "normal",
      },
      {
        placement: [0, 16],
        width: 8,
        height: 2,
        color: "black",
        type: "normal",
      },

      {
        placement: [25, 4],
        width: 2,
        height: 1,
        color: "maroon",
        type: "normal",
      },
      {
        placement: [33, 8],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
      {
        placement: [31, 15],
        width: 2,
        height: 2,
        color: "gold",
        type: "normal",
      },
      {
        placement: [0, 18],
        width: 1,
        height: 4,
        color: "black",
        type: "normal",
      },
      {
        placement: [0, 21],
        width: 4,
        height: 1,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 19.5],
        width: 1,
        height: 2,
        color: "black",
        type: "normal",
      },
      {
        placement: [3, 18],
        width: 1,
        height: 0.35,
        color: "black",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 6],
    spawn: [4, 8],
    powerups: [
      // {
      //   position: [2, 20],
      //   type: "speed",
      //   taken: false,
      // },
      {
        position: [1, 16],
        type: "jumpheight",
        taken: false,
      },
      {
        position: [19, 7],
        type: "gravity",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-1, 0],
        width: 31,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 60,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 12],
        width: 1,
        height: 13,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [5, 19],
        width: 5,
        height: 1,
        color: "aqua",
        type: "normal",
      },
      {
        placement: [3, 12],
        width: 9,
        height: 1,
        color: "aqua",
        type: "normal",
      },
      {
        placement: [33, 8],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 16],
    spawn: [4, 8],
    powerups: [
      {
        position: [22, 6],
        type: "speed",
        taken: false,
      },
      {
        position: [1, 20],
        type: "gravity",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [0, 4],
        width: 2,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [0, 8],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [4, 10],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 12],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [10, 13],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [7, 17],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [9, 20],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [22, 5],
        width: 1,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 12,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 0],
        width: 60,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },

      {
        placement: [33, 18],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
      {
        placement: [28, 12],
        width: 2,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 16],
    spawn: [3, 20],
    powerups: [
      {
        position: [21, 6],
        type: "gravity",
        taken: false,
      },
      {
        position: [6, 18],
        type: "gravity",
        taken: false,
      },
      {
        position: [1, 20],
        type: "speed",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 23],
        width: 12,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [33, 18],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
    ],
  },
  {
    portal: [34, 16],
    spawn: [4, 8],
    powerups: [
      {
        position: [24, 6],
        type: "gravity",
        taken: false,
      },
      {
        position: [6, 18],
        type: "gravity",
        taken: false,
      },
      {
        position: [15, 20],
        type: "gravity",
        taken: false,
      },
    ],
    platforms: [
      {
        placement: [-1, 0],
        width: 1,
        height: 50,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 15],
        width: 12,
        height: 2,
        color: "darkgrey",
        type: "normal",
      },
      {
        placement: [-5, 0],
        width: 60,
        height: 1,
        color: "darkgrey",
        type: "normal",
      },

      {
        placement: [33, 18],
        width: 4,
        height: 4,
        color: "gold",
        type: "normal",
      },
    ],
  },
];

function drawSquare(x, y, color) {
  c.fillStyle = color;
  c.fillRect(unit * x, unit * y, unit, unit);
}

function drawPlatforms(level) {
  for (i = 0; i < levels[level].platforms.length; i++) {
    c.fillStyle = levels[level].platforms[i].color;
    c.fillRect(
      unit * levels[level].platforms[i].placement[0],
      unit * levels[level].platforms[i].placement[1],
      unit * levels[level].platforms[i].width,
      unit * levels[level].platforms[i].height
    );
  }
  drawPortal();
  drawPowerups();
}

function drawPortal() {
  c.fillStyle = "rgb(210, 220, 225)";
  c.fillRect(
    levels[level - 1].portal[0] * unit,
    levels[level - 1].portal[1] * unit,
    2 * unit,
    2 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 230, 250)";
  } else {
    c.fillStyle = "rgb(180, 250, 230)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.2) * unit,
    (levels[level - 1].portal[1] + 0.2) * unit,
    1.6 * unit,
    1.8 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 250, 230)";
  } else {
    c.fillStyle = "rgb(180, 230, 250)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.3) * unit,
    (levels[level - 1].portal[1] + 0.3) * unit,
    1.4 * unit,
    1.7 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 230, 250)";
  } else {
    c.fillStyle = "rgb(180, 250, 230)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.4) * unit,
    (levels[level - 1].portal[1] + 0.4) * unit,
    1.2 * unit,
    1.6 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 250, 230)";
  } else {
    c.fillStyle = "rgb(180, 230, 250)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.5) * unit,
    (levels[level - 1].portal[1] + 0.5) * unit,
    1 * unit,
    1.5 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 230, 250)";
  } else {
    c.fillStyle = "rgb(180, 250, 230)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.6) * unit,
    (levels[level - 1].portal[1] + 0.6) * unit,
    0.8 * unit,
    1.4 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 250, 230)";
  } else {
    c.fillStyle = "rgb(180, 230, 250)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.7) * unit,
    (levels[level - 1].portal[1] + 0.7) * unit,
    0.6 * unit,
    1.3 * unit
  );
  if (portalAnimationTimer > 9) {
    c.fillStyle = "rgb(180, 230, 250)";
  } else {
    c.fillStyle = "rgb(180, 250, 230)";
  }
  c.fillRect(
    (levels[level - 1].portal[0] + 0.8) * unit,
    (levels[level - 1].portal[1] + 0.8) * unit,
    0.4 * unit,
    1.2 * unit
  );
  c.fillStyle = "rgb(180, 250, 230)";
  c.fillRect(
    (levels[level - 1].portal[0] + 0.9) * unit,
    (levels[level - 1].portal[1] + 0.9) * unit,
    0.2 * unit,
    1.1 * unit
  );
}

function drawPowerups() {
  for (i = 0; i < levels[level - 1].powerups.length; i++) {
    pu = levels[level - 1].powerups[i];
    if (pu.type == "speed") {
      c.fillStyle = "yellow";
    }
    if (pu.type == "jumpheight") {
      c.fillStyle = "violet";
    }
    if (pu.type == "gravity") {
      c.fillStyle = "skyblue";
    }
    if (pu.taken == false) {
      c.fillRect(
        unit * pu.position[0] + unit / 4,
        unit * pu.position[1] + unit / 4,
        unit / 2,
        unit / 2
      );
    }
  }
}
