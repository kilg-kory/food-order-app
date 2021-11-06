import React, { useEffect, useState } from 'react'
import Card from '../ui/card'
import MealItem from './meal-item/meal-item'
import { IItem } from '../../store/cart-context';
import classes from './available-meals.module.css'


class ResponseError extends Error {

}


const AvailableMeals = () => {

    const [meals, setMeals] = useState<IItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>()


    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch('https://study-burger.firebaseio.com/meals.json')


            if (!response.ok) {
                throw new ResponseError('Something bad happened');
            }


            const responseData = await response.json()
            let loadedMeals: IItem[] = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }

            setMeals(loadedMeals)
            setIsLoading(false)


        }

        fetchMeals().catch((e) => {
            setIsLoading(false)
            setError(e.message)
        })
    }, [])


    if (isLoading) {
        return <section className={classes['meals-loading']}>
            <p>Loading...</p>
        </section>
    }

    if (error) {
        return <section className={classes['meals-error']}>
            <p>{error}</p>
        </section>
    }


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {
                        meals.map(meal => (
                            <MealItem key={meal.id} {...meal} />
                        ))
                    }
                </ul>
            </Card>
        </section>

    )
}

export default AvailableMeals
