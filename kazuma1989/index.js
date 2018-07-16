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

      clearInterval(this._timer);
      this._timer = setInterval(() => {
        app.replyList.unshift(generateReply(this.tweet));
      }, 500);
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
});
