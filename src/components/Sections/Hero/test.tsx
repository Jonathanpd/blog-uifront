import { render, screen } from '@testing-library/react'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /Bem-vindo ao Blog Ui & Front/i })
    ).toBeInTheDocument()
  })
})
