const app = new Vue({
  el: '#app',
  data: {
    tweet: ''
  },
  methods: {
    onSubmit() {
      const path = tokenizer.tokenize(this.tweet);
      console.log(path);

      const noun = path.find(({ pos }) => pos === '名詞');
      const verb = path.find(({ pos }) => pos === '動詞');
      console.log(`${noun.basic_form}が${verb.surface_form}ない人に対して不謹慎だと思います`);
    }
  }
});

let tokenizer = {
  tokenize() { }
};
kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, _tokenizer) => {
  // tokenizer is ready
  tokenizer = _tokenizer;
  app.tweet = '昔々、あるところにおじいさんとおばあさんがいました';
});
