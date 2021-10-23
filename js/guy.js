var canvas = document.getElementById("game");
canvas.height = 500;
canvas.width = 900;

var c = canvas.getContext("2d");
unit = canvas.width / 45;

keysdown = [];

guy = {
  powerups: {
    speed: false,
    jumpheight: false,
    gravity: false,
  },
  x: 4,
  y: 8,
  xvel: 0,
  yvel: 0,
  maxvel: 0.12,
  jumppower: -0.3,
  gravdir: 1,
  width: 1,
  height: 1,
  supported: false,
  jump: function () {
    if (guy.supported == true) {
      console.log("jumping");
      this.yvel = this.jumppower * this.gravdir;
      this.supported = false;
    }
  },
  accelerate: function () {
    if (keysdown[68] == true) {
      if (this.xvel < this.maxvel) {
        this.xvel += 0.01;
      }
    } else {
      if (this.xvel > 0.01) {
        if (this.supported == true) {
          this.xvel -= 0.005;
        } else {
          this.xvel -= 0.0035;
        }
      } else if (this.xvel > 0) {
        this.xvel = 0;
      }
    }
    if (keysdown[65] == true) {
      if (this.xvel > -1 * this.maxvel) {
        this.xvel -= 0.01;
      }
    } else {
      if (this.xvel < -0.01) {
        if (this.supported == true) {
          this.xvel += 0.005;
        } else {
          this.xvel += 0.0035;
        }
      } else if (this.xvel < 0) {
        this.xvel = 0;
      }
    }
  },
  render: function () {
    c.fillStyle = "indigo";
    c.fillRect(
      unit * this.x,
      unit * this.y,
      this.width * unit,
      this.height * unit
    );
    c.fillStyle = "lightgreen";
    c.fillRect(
      unit * (this.x + 0.1),
      unit * (this.y + 0.1),
      unit * 0.8 * this.width,
      unit * 0.8 * this.height
    );
    c.fillStyle = "indigo";
    c.fillRect(
      unit * (this.x + 0.4),
      unit * (this.y + 0.4),
      unit * 0.2 * this.width,
      unit * 0.2 * this.height
    );
  },
  isonPlatform: function () {
    pltfrms = levels[level - 1].platforms;
    this.supported = false;
    for (i = 0; i < pltfrms.length; i++) {
      if (this.gravdir == 1) {
        if (
          this.x + this.width > pltfrms[i].placement[0] &&
          this.x < pltfrms[i].placement[0] + pltfrms[i].width &&
          this.y + this.height <= pltfrms[i].placement[1] &&
          this.y + this.height >= pltfrms[i].placement[1] - this.yvel
        ) {
          this.y = pltfrms[i].placement[1] - this.height;
          this.supported = true;
          this.yvel = 0;
        }
      }
      if (this.gravdir == -1) {
        if (
          this.x + this.width > pltfrms[i].placement[0] &&
          this.x < pltfrms[i].placement[0] + pltfrms[i].width &&
          this.y >= pltfrms[i].placement[1] + pltfrms[i].height &&
          this.y <= pltfrms[i].placement[1] + pltfrms[i].height - this.yvel
        ) {
          console.log("shmoop");
          this.y = pltfrms[i].placement[1] + pltfrms[i].height;
          this.supported = true;
          this.yvel = 0;
        }
      }
    }
  },
  checkSideImpact: function () {
    if (this.xvel > 0) {
      dir = 1;
    } else {
      dir = -1;
    }

    pltfrms = levels[level - 1].platforms;
    for (i = 0; i < pltfrms.length; i++) {
      if (
        this.y < pltfrms[i].placement[1] + pltfrms[i].height &&
        this.y + this.height > pltfrms[i].placement[1]
      ) {
        if (dir == 1) {
          if (
            this.x + this.width + this.xvel > pltfrms[i].placement[0] &&
            this.x <= pltfrms[i].placement[0]
          ) {
            this.x = pltfrms[i].placement[0] - this.width;
            this.xvel = 0;
          }
        } else if (dir == -1) {
          if (
            this.x + this.xvel < pltfrms[i].placement[0] + pltfrms[i].width &&
            this.x >= pltfrms[i].placement[0] + pltfrms[i].width
          ) {
            this.x = pltfrms[i].placement[0] + pltfrms[i].width;
            this.xvel = 0;
          }
        }
      }
    }
  },
  checkTopImpact: function () {
    pltfrms = levels[level - 1].platforms;
    for (i = 0; i < pltfrms.length; i++) {
      if (this.gravdir == 1) {
        if (this.yvel <= 0) {
          if (
            this.x + this.width > pltfrms[i].placement[0] &&
            this.x < pltfrms[i].placement[0] + pltfrms[i].width &&
            this.y + this.yvel <= pltfrms[i].placement[1] + pltfrms[i].height &&
            this.y >= pltfrms[i].placement[1] + pltfrms[i].height
          ) {
            this.y = pltfrms[i].placement[1] + pltfrms[i].height;
            this.yvel = 0;
          }
        }
      }
      if (this.gravdir == -1) {
        if (this.yvel >= 0) {
          if (
            this.x + this.width > pltfrms[i].placement[0] &&
            this.x < pltfrms[i].placement[0] + pltfrms[i].width &&
            this.y + this.height + this.yvel >= pltfrms[i].placement[1] &&
            this.y <= pltfrms[i].placement[1]
          ) {
            this.y = pltfrms[i].placement[1] - this.height;
            this.yvel = 0;
          }
        }
      }
    }
  },
  checkPortalImpact: function () {
    if (
      this.x < levels[level - 1].portal[0] + 2 &&
      this.x + this.width > levels[level - 1].portal[0] &&
      this.y < levels[level - 1].portal[1] + 2 &&
      this.y + this.height > levels[level - 1].portal[1]
    ) {
      level++;
      this.powerups.speed = false;
      this.maxvel = 0.12;
      this.powerups.jumpheight = false;
      this.jumppower = -0.3;
      this.gravity = false;
      this.gravdir = 1;
      this.xvel = 0;
      this.yvel = 0;
      this.x = levels[level - 1].spawn[0];
      this.y = levels[level - 1].spawn[1];
    }
  },
  checkPowerupImpact: function () {
    for (i = 0; i < levels[level - 1].powerups.length; i++) {
      pu = levels[level - 1].powerups[i];
      if (
        pu.taken == false &&
        this.x < pu.position[0] + 0.75 &&
        this.x + this.width > pu.position[0] + 0.25 &&
        this.y < pu.position[1] + 0.25 &&
        this.y + this.height > pu.position[1] + 0.25
      ) {
        if (pu.type == "speed") {
          this.maxvel = 0.3;
          this.powerups.speed = true;
        }
        if (pu.type == "jumpheight") {
          this.jumppower = -0.4;
          this.powerups.jumpheight = true;
        }
        if (pu.type == "gravity") {
          if (this.gravdir == 1) {
            this.gravdir = -1;
            this.powerups.gravity = true;
          } else if (this.gravdir == -1) {
            this.gravdir = 1;
            this.powerups.gravity = false;
          }
        }
        pu.taken = true;
      }
    }
  },
};

function updateGuy() {
  guy.accelerate();
  if (guy.supported == false && guy.yvel < 1) {
    guy.yvel += 0.01 * guy.gravdir;
  }
  console.log(guy.gravdir);
  guy.isonPlatform();
  guy.checkSideImpact();
  guy.checkTopImpact();
  guy.checkPortalImpact();
  guy.checkPowerupImpact();

  guy.x = guy.x + guy.xvel;
  guy.y = guy.y + guy.yvel;
}

document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    guy.jump();
  } else {
    key = e.keyCode;
    keysdown[key] = true;
  }
});
document.body.addEventListener("keyup", function (e) {
  if (e.keyCode != 32) {
    key = e.keyCode;
    keysdown[key] = false;
  }
});
