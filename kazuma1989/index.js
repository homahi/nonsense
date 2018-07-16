const app = new Vue({
  el: '#app',
  data: {
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
      this.replyList.push(generateReply(this.tweet));
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
});
