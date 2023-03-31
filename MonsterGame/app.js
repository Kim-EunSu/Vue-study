const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  computed: {
    MonsterbarStyle() {
      return {
        width: this.monsterHealth + "%",
      };
    },
    PlayerbarStyle() {
      return {
        width: this.playerHealth + "%",
      };
    },
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (10 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (20 - 10)) + 10;
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
