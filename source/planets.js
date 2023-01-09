class Planet {
  constructor({ name = "", gravity = 0, photo = "", link = "" } = {}) {
    this.name = name;
    this.gravity = gravity;
    this.photo = photo;
    this.link = link;
  }
}

const mercury = new Planet({
  name: "Mercury",
  gravity: 3.7,
  photo:
    "https://media0.giphy.com/media/108bNXja5KRrkA/giphy.gif?cid=ecf05e47snsuhk2hyzeai6kf1wbrll2r26m50rh1tnd3ad3d&rid=giphy.gif&ct=g",
  link: "https://en.wikipedia.org/wiki/Mercury_(planet)"
});

const venus = new Planet({
  name: "Venus",
  gravity: 8.87,
  photo:
    "https://media.giphy.com/media/l0MYB89UFsVqLY5oc/giphy-downsized-large.gif",
    link: "https://es.wikipedia.org/wiki/Venus_(planeta)"
});

const earth = new Planet({
  name: "Earth",
  gravity: 9.8,
  photo:
    "https://media.giphy.com/media/zwoRf2Ww6LPk4tCL9m/giphy-downsized-large.gif" ?? undefined,
    link: "https://en.wikipedia.org/wiki/Earth"
});

const mars = new Planet({
  name: "Mars",
  gravity: 3.7,
  photo: "https://media.giphy.com/media/13cxHLqRer5q6s/giphy.gif",
  link: "https://en.wikipedia.org/wiki/Mars"
});

const jupiter = new Planet({
  name: "Jupiter",
  gravity: 24.8,
  photo: "https://media.giphy.com/media/s2uampOAMWksU/giphy.gif",
  link: "https://en.wikipedia.org/wiki/Jupiter"
});

const saturn = new Planet({
  name: "Saturn",
  gravity: 10.44,
  photo:
    "https://i.pinimg.com/originals/eb/24/09/eb2409fa11b564c90d109813b8cd9533.gif",
    link: "https://en.wikipedia.org/wiki/Saturn"
});

const uranus = new Planet({
  name: "Uranus",
  gravity: 8.87,
  photo: "https://media.giphy.com/media/O6TriF9nQLe30hEQwa/giphy.gif",
  link: "https://en.wikipedia.org/wiki/Uranus"
});

const neptune = new Planet({
  name: "Neptune",
  gravity: 11.15,
  photo: "https://media.giphy.com/media/CJsgbX9A3DZLg2xJGD/giphy.gif",
  link: "https://en.wikipedia.org/wiki/Neptune"
});

const pluto = new Planet({
  name: "Pluto",
  gravity: 0.62,
  photo: "https://media.giphy.com/media/p3CacTNaF9ObSMRFxn/giphy.gif",
  link: "https://en.wikipedia.org/wiki/Pluto"
});

const solarSystem = [
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
];

export { solarSystem };
