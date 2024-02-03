import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
    it('Should be able to see the initial text on screen', () => {
        const { getByText } = render(<App />)
        expect(getByText('Hello')).toBeInTheDocument()
    })
})