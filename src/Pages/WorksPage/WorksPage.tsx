import React, { Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'
import { CardWorks } from '../../UI_Components'
import { Link } from 'react-router-dom'
import { FETCH_WORKS } from '../../store/slice'

const WorksPage = () => {
    const works = useAppSelector(state => state.page.data.works)
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(FETCH_WORKS())
    }, [dispatch])
  return (
    <Fragment>
     {works.map((work) => {
        const key = Math.random().toString(30).substring(2, 15)
        return <Link to={`/work/${work._id}`} key={key} ><CardWorks {...work} /></Link>
     })}
    </Fragment>
  )
}

export default WorksPage
