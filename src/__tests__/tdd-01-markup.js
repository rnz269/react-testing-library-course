import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {Editor} from '../post-editor-01-markup'
import userEvent from "@testing-library/user-event"

test('renders a form with title, content, tags, and a submit button', () => {
  render(<Editor />)
  // assert presence of title, content, tags, and submit button
  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  const submitButton = screen.getByText(/submit/i, { selector: 'button' })
  userEvent.click(submitButton)
  expect(submitButton).toBeDisabled()
})

// disabling this rule for now. We'll get to this later
/*
eslint
  testing-library/prefer-explicit-assert: "off",
*/
