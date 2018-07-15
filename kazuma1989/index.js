const app = new Vue({
  el: '#app',
  data: {
    tweet: '',
    showOverlay: false,
    reply: 0,
    retweet: 10000,
    like: 200,
  },
  filters: {
    number(value) {
      if (!value || !value.toLocaleString) {
        return value;
      }

      return value.toLocaleString();
    }
  },
  methods: {
    update(event) {
      this.tweet = event.target.innerText;
    },
    submit() {
      this.openOverlay();

      const path = shuffle(tokenizer.tokenize(this.tweet).filter(({ word_type }) => word_type === 'KNOWN'));
      console.log(path);

      const adjective = path.find(({ pos }) => pos === '連体詞' || pos === '形容詞');
      const noun = path.find(({ pos }) => pos === '名詞');
      const verb = path.find(({ pos }) => pos === '動詞');
      console.log(`${adjective.basic_form}${noun.basic_form}が${verb.basic_form}ことができない人に対して不謹慎だと思います`);
    },
    openOverlay() {
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
    },
  },
});

let tokenizer = {
  tokenize() {
    return [];
  },
};
kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, _tokenizer) => {
  // tokenizer is ready
  tokenizer = _tokenizer;
  app.tweet = '昔々、あるところにおじいさんとおばあさんがいました';
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
