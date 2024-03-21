import React from "react"
import classes from "./style/Works.module.css"
import { CardWorks } from "../../UI_Components"
import { useAppSelector } from "../../store/reduxHooks"

const Works = () => {
	const works = useAppSelector(state => state.page.data[0].works)
	return (
		<div className={classes.works}>
			<div className={classes.worksHeaderNew}>Featured works</div>
			<div className={classes.worksWrapper}>
				{works.length > 0 && works.map((work => {
					const key = Math.random().toString(30).substring(2, 15)
					return (
						<CardWorks key={key} {...work} />
					)
				}))}
			</div>
		</div>
	)
}

export default Works
