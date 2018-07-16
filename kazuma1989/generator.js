window.tokenizer = {
  tokenize() {
    return [];
  },
};
kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((_, tokenizer) => {
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

  return {
    fullname: 'アンチしゅまい',
    username: 'anti_shumai',
    message: generateMessage({
      adjective,
      noun,
      verb,
    }),
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
