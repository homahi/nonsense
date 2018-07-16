window.tokenizer = {
  tokenize() {
    return [];
  },
};
kuromoji.builder({ dicPath: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict' }).build((_, tokenizer) => {
  // tokenizer is ready
  window.tokenizer = tokenizer;
});

function generateReply(tweet) {
  const rawPath = tokenizer.tokenize(tweet);
  console.log(rawPath);

  const knownList = shuffle(rawPath.filter(e => e.word_type === 'KNOWN'));
  const adjectiveList = knownList.filter(e => e.pos === '連体詞' || e.pos === '形容詞').map(e => e.basic_form);
  const nounList = knownList.filter(e => e.pos === '名詞').map(e => e.basic_form);
  const verbList = knownList.filter(e => e.pos === '動詞' && e.pos_detail_1 === '自立').map(e => e.basic_form);

  const unknownList = shuffle(rawPath.filter(e => e.word_type === 'UNKNOWN'));

  const message = generateMessage({
    adjectiveList,
    nounList,
    verbList,
    unknownList,
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

function generateMessage({
  adjectiveList,
  nounList,
  verbList,
  unknownList,
}) {
  const message = `${adjectiveList[0]}${nounList[0]}が${verbList[0]}ことができない人に対して不謹慎だと思います`;
  return message;
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
