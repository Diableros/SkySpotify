import { it, expect, describe } from 'vitest'
import renderer from 'react-test-renderer'
import Button, { ButtonStyle } from '@/screens/components/Button/Button'

describe('Snapshot test for Button component', () => {
  it('renders purple Button style correctly', () => {
    const tree = renderer
      .create(<Button style={ButtonStyle.Purple} title="Test button" />)
      .toJSON()
    /* eslint no-undef: "off" */ expect(tree).toMatchSnapshot()
  })

  it('renders disabled purple Button style correctly', () => {
    const tree = renderer
      .create(
        <Button style={ButtonStyle.Purple} title="Test button" disabled />
      )
      .toJSON()
    /* eslint no-undef: "off" */ expect(tree).toMatchSnapshot()
  })

  it('renders white Button style correctly', () => {
    const tree = renderer
      .create(<Button style={ButtonStyle.White} title="Test button" />)
      .toJSON()
    /* eslint no-undef: "off" */ expect(tree).toMatchSnapshot()
  })

  it('renders disabled white Button style correctly', () => {
    const tree = renderer
      .create(<Button style={ButtonStyle.White} title="Test button" />)
      .toJSON()
    /* eslint no-undef: "off" */ expect(tree).toMatchSnapshot()
  })

  it('renders Button unknown style correctly', () => {
    const tree = renderer
      // @ts-ignore
      // eslint-disable-next-line react/style-prop-object
      .create(<Button style="Unknown" title="Test button" />)
      .toJSON()
    /* eslint no-undef: "off" */ expect(tree).toMatchSnapshot()
  })
})
