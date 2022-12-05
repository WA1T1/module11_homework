const task = require('./task.js')


test('true case', () => {
    expect(task.repeatWord('слово', 1)).toBe('слово1');
    expect(task.repeatWord('Валентин', 3)).toBe('Валентин1 Валентин2 Валентин3');
    expect(task.repeatWord('слово', 2)).toBe('слово1 слово2');
});

test('Nan case', () => {
    expect(task.repeatWord('test', 'hu')).toBe(NaN);
});

test('Nan case', () => {
    expect(task.repeatWord(888, 0)).toBe("");
});

test('Nan case', () => {
    expect(task.repeatWord(888, 2)).toBe("8881 8882");
});