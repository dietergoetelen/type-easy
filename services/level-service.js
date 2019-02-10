const levels = {
  1: {
    id: 1,
    name: "Level 1",
    inputs: [
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ],
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ]
    ]
  },

  3: {
    id: 3,
    name: "Level 3",
    inputs: [
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ],
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ]
    ]
  },
  2: {
    id: 2,
    name: "Level 2",
    inputs: [
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ],
      [
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k",
        " ",
        "j",
        "j",
        "j",
        "j",
        " ",
        "k",
        "k",
        "k",
        "k"
      ]
    ]
  }
};

export default {
  getLevelById(id) {
    if (levels[id]) {
      return levels[id];
    }

    return undefined;
  },
  getLevels() {
    return levels;
  }
};
