import React, { FC } from "react"
import classes from "./style/CardPost.module.css"

export const CardPost: FC<{ header: string; date: string; category: string; description: string }> =
	({ header, date, category, description }) => {
		return (
			<div className={classes.wrapperCard}>
				<div className={classes.postHeader}>{header}</div>
				<div className={classes.postDate}><span>{date}</span><span>{"|"}</span><span>{category}</span></div>
				<div className={classes.postText}>{description}</div>
			</div>
		)
	}


