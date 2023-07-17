import BusinessCard from './Card'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<BusinessCard />).toJSON()
  expect(tree).toMatchSnapshot()
})