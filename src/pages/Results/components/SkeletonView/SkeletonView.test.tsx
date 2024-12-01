import { render } from '@testing-library/react'
import SkeletonView from '.'

describe('SkeletonView Component', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = render(<SkeletonView />)
    expect(asFragment()).toMatchSnapshot()
  })
})
