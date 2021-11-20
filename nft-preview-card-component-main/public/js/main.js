const app = Vue.createApp({
  data() {
    return {
      hero: './images/image-equilibrium.jpg',
      ethIcon: './images/icon-ethereum.svg',
      clockIcon: './images/icon-clock.svg',
      avatar: './images/image-avatar.png',
    };
  },
}).component('nft-preview-card', {
  props: {
    hero: {
      type: String,
      required: true,
    },
    'eth-icon': {
      type: String,
      required: true,
    },
    'clock-icon': {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  /*html*/
  template: `
    <div class="preview-card-component">
        <div class="equilibrium-hero">
          <img :src="hero" alt="equilibrium image" />
        </div>
        <div class="equilibrium-about">
          <h1 class="clr-white">Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div class="eth-section">
          <span class="eth-value">
            <img :src="ethIcon" alt="ethereum icon" />
            <span>0.041 ETH</span>
          </span>
          <span class="duration">
            <img :src="clockIcon" alt="clock icon" />
            <span>3 days left</span>
          </span>
        </div>
        <div class="author">
          <img :src="avatar" alt="avatar of Jules Wyvern" />
          <span>Creation of <span class="clr-white">Jules Wyvern</span></span>
        </div>
      </div>
      `,
});
