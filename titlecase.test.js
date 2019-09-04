const titlecase = require('./titlecase');

describe('titlecase returns the appropriate Title Cased movie title for the movie entered', function() {
  it('should not capitalize articles found past the first word', () => {
    const title = 'the young and the restless';
    expect(titlecase(title)).toBe('The Young and the Restless');
  });

  it('should capitalize the first letter after a hyphen', () => {
    expect(titlecase('x-men first-class')).toBe('X-Men First-Class');
    expect(titlecase('mission-critical EVEnt')).toBe('Mission-Critical Event');
  });
  it('should accept a number as a title', () => {
    expect(titlecase('24')).toBe('24');
  });

  it('should properly captialize mixed case strings', () => {
    expect(titlecase('AveNgers eNDgamE')).toBe('Avengers Endgame');
  });

  it('should capitalize the first letter of each word in a multi-word title', function() {
    expect(titlecase('superman returns')).toBe('Superman Returns');
  });

  it('should capitalize a single word movie title', () => {
    expect(titlecase('it')).toBe('It');
  });

  it('should capitalize a single letter movie title', () => {
    expect(titlecase('v')).toBe('V');
  });

  it('should only accept a string as its parameter', () => {
    expect(() => titlecase(3)).toThrow();
  });

  it('should return a string', () => {
    expect(typeof titlecase('movie')).toBe('string');
  });
});

test('jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});
