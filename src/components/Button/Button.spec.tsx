import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

const buttonTestId = 'button'

describe('Button', () => {
    it('should render the button on screen', () => {
        const { getByTestId } = render(<Button />)
        expect(getByTestId(buttonTestId)).toBeInTheDocument()
    })

    it('should render the children prop', () => {
        const { getByTestId } = render(<Button>Click me now</Button>)
        expect(getByTestId(buttonTestId)).toHaveTextContent('Click me now')
    })

    it('should be able to fire event click', () => {
        const handleClick = vi.fn()
        const { getByTestId } = render(<Button onClick={handleClick}>Click me now</Button>)
        const button = getByTestId(buttonTestId)
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should be able to have the default styles', () => {
        const { getByTestId } = render(<Button>Click me now</Button>)
        const button = getByTestId(buttonTestId)
        expect(button).toHaveStyle({
            width: '100%',
            maxWidth: '280px',
            height: '38px',
            backgroundColor: '#CCCCCC',
            color: '#000000'
        })
    })
})