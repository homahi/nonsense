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
      this.replyList.unshift(generateReply(this.tweet));
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
});
