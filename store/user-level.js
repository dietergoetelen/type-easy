import localforage from "localforage";
import levelService from "@/services/level-service";

export const state = () => ({
  userLevels: []
});

export const actions = {
  async add({commit, rootState}, level) {
    console.log(rootState);
    const userId = rootState.profile.user.id;
    const levels = await localforage.getItem(`USER_LEVEL${userId}`);
    const toSaveLevels = levels || [];

    toSaveLevels.push(level);

    await localforage.setItem(`USER_LEVEL${userId}`, toSaveLevels);

    commit("USER_LEVELS", toSaveLevels);
  },
  async setUserLevels({commit}, userId) {
    const levels = await localforage.getItem(`USER_LEVEL${userId}`)
    commit("USER_LEVELS", levels || []);
  }
};

export const mutations = {
  USER_LEVELS(state, levels) {
    state.userLevels = levels;
  }
};

export const getters = {
  levels: (state) => {
    const userLevels = levelService.getLevels();
    const levels = Object.keys(userLevels).reduce((prev, key) => {
      prev.push({
        ...userLevels[key],
        unlocked: state.userLevels.find(y => y === userLevels[key].id) !== undefined
      });

      return prev;
    }, []);

    return levels.map((item, index) => {
      if (!levels[index].unlocked && (!levels[index - 1] || levels[index - 1].unlocked)) {
        item.unlocked = true;
      }

      return item;
    });
  }, 
  level: (state, getters) => (id) => {
    const level = getters.levels.find(x => x.id === id);

    if (!level || !level.unlocked) {
      return undefined;
    }

    return level;
  }
};