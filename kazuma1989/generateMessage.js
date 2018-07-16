function generateMessage(e = {
  adjectiveList,
  nounList,
  verbList,
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
    ],
  },

  // 不明な単語が必要
  {
    test: e => e.unknownWordList.length,
    generatorList: [
      e => `その${e.unknownWordList[0]}言うのやめなさい`,
    ],
  },

  // 文章関係なし
  {
    test: e => true,
    generatorList: [
      e => 'ああああああああああああああああああああああああああああああ！！！！！！！！！！！ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！',
    ],
  },
];
