import { render } from '@testing-library/react'
import Details from '.'
import { mockAnimals } from '../../../../utils/test/constant'

describe('Details Component', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = render(<Details item={mockAnimals[0]} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
