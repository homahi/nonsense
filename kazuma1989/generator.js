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
  const path = shuffle(rawPath.filter(({ word_type }) => word_type === 'KNOWN'));

  const adjective = path.find(({ pos }) => pos === '連体詞' || pos === '形容詞');
  const noun = path.find(({ pos }) => pos === '名詞');
  const verb = path.find(({ pos, pos_detail_1 }) => pos === '動詞' && pos_detail_1 === '自立');
  const message = generateMessage({
    adjective,
    noun,
    verb,
  });

  faker.locale = Math.random() < 0.5 ? 'ja' : 'en';
  const fullname = faker.name.firstName();
  const avatar = faker.image.avatar();
  const username = `${faker.lorem.word()}_${faker.random.number()}`;

  return {
    fullname,
    username,
    avatar,
    message,
  };
}

function generateMessage({
  adjective = {},
  noun = {},
  verb = {},
}) {
  const message = `${adjective.basic_form || ''}${noun.basic_form || ''}が${verb.basic_form}ことができない人に対して不謹慎だと思います`;
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
