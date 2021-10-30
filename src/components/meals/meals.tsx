import React, { Fragment } from 'react'
import MealsSummary from './meals-summary'
import AvailableMeals from './available-meals'

const Meals: React.FC<{name: string, value: string}> = ({ name, value }) => {
  return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
  )
}

export default Meals
