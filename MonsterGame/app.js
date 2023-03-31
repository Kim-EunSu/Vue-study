function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      // 게임을 처음 시작했을 때는 당연히 승패가 결정되지 않았으므로
      winner: null,
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
  watch: {
    // 자유롭게 정하는것이 아니라 앞으로 감시할 프로퍼티의 이름
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //무승부
        this.winner = "draw";
      } else if (value <= 0) {
        //player가 짐
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value && this.playerHealth <= 0) {
        //무승부
        this.winner = "draw";
      } else if (value <= 0) {
        //monster가 짐
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      if (this.playerHealth < 0) {
        //player가 게임에서 짐
      }
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
    playerHeal() {
      this.currentRound++;
      const healValue = 7;
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackMonster();
    },
  },
});

app.mount("#game");
