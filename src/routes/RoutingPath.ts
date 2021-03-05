const signInView = '/hampaioclient/signin'
const homeView = '/hampaioclient/'
const userSettingsView = '/hampaioclient/user/settings'
const userProfileView = '/hampaioclient/user/profile'
const forgotPasswordView = '/reset/:token'
const accessoriesView = '/product/accessories'
const brandsView = '/brands'
const expertiseView = '/expertise'
const newsView = '/news'
const productsView = '/product'
const checkoutView = '/checkout'
const admin = '/hampaioclient/admin'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }


export default {
	signInView,
	homeView,
	userSettingsView,
	userProfileView,
	forgotPasswordView,
	accessoriesView,
	brandsView,
	expertiseView,
	newsView,
	productsView,
	checkoutView,
	admin,
	productDetailsView,
}