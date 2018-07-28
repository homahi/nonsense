faker.locale = Math.random() < 0.5 ? 'ja' : 'en';

const app = new Vue({
  el: '#app',
  data: {
    profile: {
      avatar: faker.image.avatar(),
      fullname: faker.name.firstName(),
      username: `${faker.lorem.word()}_${faker.random.number()}`,
      cardStyle: {
        backgroundImage: `url(${faker.image.image()})`,
      },
    },
    tweet: '',
    showOverlay: false,
    retweetCount: 0,
    likeCount: 0,
    replyList: [],
  },
  computed: {
    disabled() {
      return this.tweet.length === 0 || this.tweet.length >= 141;
    },
    replyCount() {
      return this.replyList.length;
    },
  },
  filters: {
    number(value) {
      if (value && value.toLocaleString) {
        return value.toLocaleString();
      }
      else {
        return value;
      }
    },
  },
  methods: {
    update(event) {
      this.tweet = event.target.innerText;
    },
    submit() {
      this.openOverlay();

      startReplying();
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
});

const RETWEET_RATIO = 0.15;
const LIKE_RATIO = 0.2;
const DELTA_MAX = 983;

function startReplying() {
  const timing = Array(100).fill(60 * 1000).map(v => v * Math.random());
  timing.forEach(t => {
    setTimeout(() => {
      app.replyList.unshift(generateReply(app.tweet));

      app.retweetCount += Math.min(Math.round(app.retweetCount * RETWEET_RATIO), DELTA_MAX) || 1;
      app.likeCount += Math.min(Math.round(app.retweetCount * LIKE_RATIO), DELTA_MAX) || 1;
    }, t);
  });
}
