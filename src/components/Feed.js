import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/postsSlice'
import { Container, Form, Col, Spinner } from 'react-bootstrap'
import ExampleLinks from './ExampleLinks'
import { activeLinks, inActiveLinks } from '../exampleLinkData'
import { editError } from '../redux/postsSlice'
import SingleFeed from './SingleFeed'


export function Feed() {
  const { status, postItems, error } = useSelector((state) => state.posts)
  const [enteredUrl, setEnteredUrl] = useState('')
  const dispatch = useDispatch()


  const getPosts = () => {
    if (enteredUrl.length > 1) {
      dispatch(fetchPosts(enteredUrl))
      setEnteredUrl('')
    } else {
      dispatch(editError())
    }
  }
  return (
    <div>
      <Container className='jumbotron col-8 ' >
        <Col className='p-3 col-12' >
          <h1 className='' >RSS reader</h1>
          <ExampleLinks
            title='You can check this real RSS feeds (Copy and paste):'
            links={activeLinks}
          />
          <ExampleLinks
            title='Or you can check errors with this NOT real RSS feeds (Copy and paste):'
            links={inActiveLinks}
          />
          <div>
            <p>Enter RSS address (URL). For example: https://sample.net/rss/feed</p>
            <Form.Control type='input' value={enteredUrl} className='mb-3' onChange={(e) => setEnteredUrl(e.target.value)} placeholder='Search' />
            <Button onClick={getPosts}
              disabled={status === 'loading' ? true : false}>
              {status === 'loading' ? <Spinner as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true" /> : "Search"}</Button>
          </div>
        </Col >
        {error && <h3 className='text-danger'>Error {error}</h3>}
        {postItems && <SingleFeed postItems={postItems} />}
      </Container >
    </div>
  )
}