const app = Vue.createApp({
  data() {
    return {
        heroImage: '../../images/illustration-hero.svg',
        noteIcon: '../../images/icon-music.svg'
    };
  },
}).component('order-component',{
    props: {
        'hero-image': {
            type: String,
            required: true
        },
        'note-icon': {
            type: String,
            required: true
        }
    },
    // download es6-string-html
    template: /*html*/
    `
    <div id="order-component">
        <header class="header-hero">
            <img :src="heroImage" />
        </header>
        <section>
            <div class="introduction">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!</p>
            </div>
            <div class="annual-plan">
                <img :src="noteIcon" />
                <div>
                    <h3>Annual Plan</h3>
                    <p>$59.99/year</p>
                </div>
                <span>Change</span>
            </div>
            <div class="call-to-action">
                <button>Proceed to Payment</button>
                <button>Cancel Order</button>
            </div>
        </section>
    </div>
    `
});
