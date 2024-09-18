import React, { useEffect } from 'react'
import { CardPost } from '../../UI_Components'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import classes from "./style/PostsPage.module.css";
import { FETCH_POSTS } from '../../store/slice';

const PostsPage = () => {
    const posts = useAppSelector(state => state.page.data.posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(FETCH_POSTS())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
      <div className={classes.wrapperPosts}>
       {posts.map((post) => {
          const key = Math.random().toString(30).substring(2, 15)
          return <Link to={`/post/${post._id}`} key={key} ><CardPost {...post} /></Link>
       })}
      </div>
    )
}

export default PostsPage
