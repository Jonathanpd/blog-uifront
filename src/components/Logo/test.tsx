import { render, screen } from '@testing-library/react'
import Logo from '.'

test('should render the Logo component correctly', () => {
  const { container } = render(<Logo />)
  const parentDiv = container.firstChild as HTMLElement
  const svgElement = screen.getByLabelText('Logo UI Front')

  // Checks if the SVG element is present | Verifica se o elemento SVG está presente
  expect(svgElement).toBeInTheDocument()

  // Checks if the "aria-label" attribute is correct | Verifica se o atributo "aria-label" está correto
  expect(svgElement).toHaveAttribute('aria-label', 'Logo UI Front')

  // Verifique se as classes de modo escuro estão presentes no elemento pai
  expect(parentDiv).toHaveClass('text-black-uifront', 'dark:text-white')
})
