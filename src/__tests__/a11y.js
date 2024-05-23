import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {axe} from 'jest-axe'

function InaccessibleForm() {
  // Form inputs must have an accessible name
  // Ref: 4.1.1 of W3C HTML Accessibility API Mappings 1.0
  return (
    <form>
      <label htmlFor="username">Email</label>
      <input id="username" />
    </form>
  )
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />
    </form>
  )
}

test('inaccessible form fails', async () => {
  const {container} = render(<InaccessibleForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})