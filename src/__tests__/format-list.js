const formatList = require('../lib/format-list')

test('can format a list', () => {
  const formattedList = formatList(
    'Star Wars Names',
    [
      {name: 'Qui-Gon Jinn'},
      {name: 'Chewbacca'},
      {name: 'Han Solo'},
      {name: 'Luke Skywalker'},
    ],
    'name',
  )
  expect(formattedList).toMatchSnapshot()
})
