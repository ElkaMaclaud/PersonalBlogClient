import React, { Fragment } from 'react'
import { useAppSelector } from '../../store/reduxHooks'
import { CardWorks } from '../../UI_Components'
import { Link } from 'react-router-dom'

const WorksPage = () => {
    const works = useAppSelector(state => state.page.data.works)
  return (
    <Fragment>
     {works.map((work) => {
        const key = Math.random().toString(30).substring(2, 15)
        return <Link to={`/work/${work.id}`}><CardWorks key={key} {...work} /></Link>
     })}
    </Fragment>
  )
}

export default WorksPage
