<template>
  <div id="advice-container">
    <small>A D V I C E #{{ adviceObj.slip.id }}</small>
    <h1>"{{ adviceObj.slip.advice }}"</h1>
    <div class="divider">
      <picture>
        <source
          media="(min-width: 668px)"
          srcset="./assets/images/pattern-divider-desktop.svg"
        />
        <img src="./assets/images/pattern-divider-mobile.svg" alt="divider" />
      </picture>
    </div>
    <div class="dice" @click="getAdvice">
      <img src="./assets/images/icon-dice.svg" alt="dice icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      adviceObj: {},
    };
  },
  methods: {
    async getAdvice() {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();

      this.adviceObj = { ...data };
    },
  },
  async created() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    this.adviceObj = { ...data };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
:root {
  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);

  --grayish-blue: hsl(217, 19%, 38%);
  --dark-grayish-blue: hsl(217, 19%, 24%);
  --dark-blue: hsl(218, 23%, 16%);

  --base-font: 20px;
  --family: 'Manrope', sans-serif;
  --weight: 800;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: var(--base-font);
}

body {
  font-family: var(--family);
  font-weight: var(--weight);
  color: var(--light-cyan);
  background-color: var(--dark-blue);
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#advice-container {
  max-width: 668px;
  padding: 2.5rem 1.5rem;
  margin: 1.5rem;
  background-color: var(--dark-grayish-blue);
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
}

small {
  display: inline-block;
  margin-bottom: 2.5rem;
  color: var(--neon-green);
}

.divider {
  margin: 1.5rem 0;
}

.dice {
  width: 65px;
  height: 65px;
  background-color: var(--neon-green);
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -32.5px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.dice:hover,
.dice:focus {
  box-shadow: 0 0 25px 10px var(--neon-green);
}
</style>
