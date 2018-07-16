window.tokenizer = {
  tokenize() {
    return [];
  },
};
kuromoji.builder({ dicPath: 'dict' }).build((_, tokenizer) => {
  // tokenizer is ready
  window.tokenizer = tokenizer;
});

function generateReply(tweet) {
  const rawPath = tokenizer.tokenize(tweet);
  console.log(rawPath);

  const basicForm = e => e.basic_form;
  const knownList = shuffle(rawPath.filter(e => e.word_type === 'KNOWN'));
  const adjectiveList = knownList.filter(e => e.pos === '連体詞' || e.pos === '形容詞').map(basicForm);
  const nounList = knownList.filter(e => e.pos === '名詞').map(basicForm);
  const verbList = knownList.filter(e => e.pos === '動詞' && e.pos_detail_1 === '自立').map(basicForm);
  const interjectionList = knownList.filter(e => e.pos === '感動詞').map(basicForm);

  const surfaceForm = e => e.surface_form;
  const unknownWordList = shuffle(rawPath.filter(e => e.word_type === 'UNKNOWN')).map(surfaceForm);

  const message = generateMessage({
    adjectiveList,
    nounList,
    verbList,
    interjectionList,
    unknownWordList,
  });

  faker.locale = Math.random() < 0.5 ? 'ja' : 'en';
  const avatar = faker.image.avatar();
  const fullname = faker.name.firstName();
  const username = `${faker.lorem.word()}_${faker.random.number()}`;

  return {
    avatar,
    fullname,
    username,
    message,
  };
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
