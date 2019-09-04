const titlecase = title => {
  if (typeof title !== 'string') {
    throw new TypeError('Expected string but received' + typeof title);
  }

  const articles = ['and', 'for', 'but', 'an', 'the', 'a', 'to', 'is'];

  title = title.toLowerCase();

  title = title.replace(/(-.)/g, x => {
    return x.toUpperCase();
  });

  if (title.length == 1) {
    return title.toUpperCase();
  } else {
    const words = title.split(' ');

    titleCasedWords = words.map(function(word, index) {
      if (index == 0) {
        return word[0].toUpperCase() + word.substring(1);
      } else if (articles.includes(word)) {
        return word;
      } else {
        return word[0].toUpperCase() + word.substring(1);
      }
    });

    return titleCasedWords.join(' ');
  }
};

module.exports = titlecase;
