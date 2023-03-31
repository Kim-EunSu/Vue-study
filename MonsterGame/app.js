function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
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
    UseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
