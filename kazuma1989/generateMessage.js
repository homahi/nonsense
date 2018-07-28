function generateMessage(e = {
  adjectiveList,
  nounList,
  verbList,
  interjectionList,
  unknownWordList,
}) {
  const avaiablePattern = [].concat(...patternList.filter(p => p.test(e)).map(p => p.generatorList));

  const generator = avaiablePattern[Math.floor(Math.random() * avaiablePattern.length)];
  return generator(e);
}

const patternList = [
  // 名詞と動詞が必要
  {
    test: e => e.nounList.length && e.verbList.length,
    generatorList: [
      e => `${e.adjectiveList[0] || ''}${e.nounList[0]}が${e.verbList[0]}ことができない人に対して不謹慎だと思います`,
    ],
  },

  // 名詞だけ必要
  {
    test: e => e.nounList.length,
    generatorList: [
      e => `嘘乙。${e.adjectiveList[0] || ''}${e.nounList[0]}なんてあるわけない`,
      e => `私も今日ちょうど${e.nounList[0]}を見ました`,
      e => `あなたは${e.nounList[0]}という言葉の定義を正しく理解していないようですね。`,
    ],
  },

  // 不明な単語が必要
  {
    test: e => e.unknownWordList.length,
    generatorList: [
      e => e.unknownWordList[0],
      e => `その${e.unknownWordList[0]}言うのやめなさい`,
    ],
  },

  // 感動詞が必要
  {
    test: e => e.interjectionList.length,
    generatorList: [
      e => e.interjectionList[0],
      e => `その${e.interjectionList[0]}言うのやめなさい`,
    ],
  },

  // 文章関係なし
  {
    test: e => true,
    generatorList: [
      e => 'なんでこんな低脳なツイートがバズってる？おいおい、日本は大丈夫なのか・・・',
      e => 'それ、私は小学校の頃から気づいてましたけど？',
      e => 'ああああああああああああああああああああああああああああああ！！！！！！！！！！！ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！',
    ],
  },
];
