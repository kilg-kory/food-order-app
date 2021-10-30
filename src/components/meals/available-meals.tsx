import React from 'react'
import { DUMMY_MEALS } from './dummy-meals'
import Card from '../ui/card'
import MealItem from './meal-item/meal-item'

const AvailableMeals = () => (
    <section>
        <Card>
            <ul>
                {DUMMY_MEALS
                  .map(meal => (
                        <MealItem key={meal.id} {...meal} />
                  ))}
            </ul>
        </Card>
    </section>

)

export default AvailableMeals
