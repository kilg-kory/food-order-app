import classes from './checkout.module.css'
import { FC, SyntheticEvent, useRef, useState } from 'react';
import { UserData } from './cart'




const Checkout: FC<{ onCancel: () => void, onConfirm: (userData: UserData) => void }> = ({ onCancel, onConfirm }) => {

	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true,
	})

	const nameInputRef = useRef<HTMLInputElement>(null)
	const streetInputRef = useRef<HTMLInputElement>(null)
	const postalCodeRef = useRef<HTMLInputElement>(null)
	const cityRef = useRef<HTMLInputElement>(null)

	const isEmpty = (value: string) => value.trim() === ''
	const isNotFiveChars = (value: string) => value.trim().length !== 5

	const onConfirmHandler = (event: SyntheticEvent) => {
		event.preventDefault()

		const userData: UserData = {
			name: nameInputRef.current!.value,
			street: streetInputRef.current!.value,
			postalCode: postalCodeRef.current!.value,
			city: cityRef.current!.value,
		}



		setFormInputsValidity({
			name: !isEmpty(userData.name),
			street: !isEmpty(userData.street),
			postalCode: !isNotFiveChars(userData.postalCode),
			city: !isEmpty(userData.city)
		})

		const formIsValid = formInputsValidity.name
			&& formInputsValidity.street
			&& formInputsValidity.postalCode
			&& formInputsValidity.city

		if (!formIsValid) {
			return
		}

		onConfirm(userData)
	}


	const ErrorMsg: FC<{ message: string, show: boolean }> = ({ message, show }) => (
		<>
			{show && <p>{message}</p>}

		</>
	)


	return <form onSubmit={onConfirmHandler}>
		<div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
			<label htmlFor='name'> Your Name </label>
			<input ref={nameInputRef} type="text" name="name" id="name" />
			<ErrorMsg message="Please enter a valid name!" show={!formInputsValidity.name} />
		</div>
		<div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
			<label htmlFor='street'> Street </label>
			<input ref={streetInputRef} type="text" name="street" id="street" />
			<ErrorMsg message="Please enter a valid street!" show={!formInputsValidity.street} />
		</div>
		<div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
			<label htmlFor='postal'> Postal Code  </label>
			<input ref={postalCodeRef} type="text" name="postal" id="postal" />
			<ErrorMsg message="Please enter a valid Postal Code (5 chars)!" show={!formInputsValidity.postalCode} />
		</div>
		<div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
			<label htmlFor='city'> City  </label>
			<input ref={cityRef} type="text" name="city" id="city" />
			<ErrorMsg message="Please enter a valid  City!" show={!formInputsValidity.city} />
		</div>
		<div className={classes.actions}>
			<button type="button" onClick={onCancel}>Cancel</button>
			<button className={classes.submit} >Confirm</button>
		</div>
	</form>
}

export default Checkout