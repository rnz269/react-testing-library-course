import React, {useState} from 'react'
import { savePost } from 'api'

function Editor() {
  const [isSaving, setIsSaving] = useState(true)
  function handleSubmit(event) {
    console.log(event.target)
    event.preventDefault() // prevent default full page reload on submission
    const { title, content, tabs } = event.target.elements;
    setIsSaving(true)
    savePost(newPost)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title"/>

      <label htmlFor="content">Content</label>
      <input id="content" type="text" name="content"/>

      <label htmlFor="tags">Tags</label>
      <input id="tags" type="text" name="tags"/>

      <button type="submit" disabled={!isSaving}>Submit</button>
    </form>
  )
}

export {Editor}
