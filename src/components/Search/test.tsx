import { render, screen } from '@testing-library/react'

import Search from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    render(<Search />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
