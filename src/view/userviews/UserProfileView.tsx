import React, { useContext } from 'react'
import APIService from '../../shared/api/service/APIService'
import { UserContext } from '../../shared/provider/UserProvider'

export const UserProfileView: React.FC = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)


	return (
		<div>
			<h1>Your info</h1>
			<form>
				<span>Name: </span><input value={authenticatedUser.personalDetails.firstName} /> <br />
				<span>Email: </span><input />
			</form>
			<button onClick={() => APIService.updateValuesOfExistingUser()}>Change Password</button>
			<hr />

			<h1>Shipping Address</h1>
			<p>Name and Surname</p>
			<p>Street Address</p>
			<p>Postcode City</p>
			<p>Country</p>
			<p>Phone number</p>

			<hr />

			<h1>Previous Orders:</h1>
			<p>None</p>

			<hr />
			<button> Logout </button>
			<button onClick={() => console.log(authenticatedUser.personalDetails.firstName)}>AuthenticatedUser</button>
		</div>
	)
}
