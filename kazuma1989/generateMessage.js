function generateMessage({
  adjectiveList,
  nounList,
  verbList,
  unknownList,
}) {
  const message = `${adjectiveList[0]}${nounList[0]}が${verbList[0]}ことができない人に対して不謹慎だと思います`;
  return message;
}
