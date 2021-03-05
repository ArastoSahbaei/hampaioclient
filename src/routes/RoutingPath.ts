const signInView = '/hampaioclient/signin'
const homeView = '/hampaioclient/'
const userSettingsView = '/hampaioclient/user/settings'
const userProfileView = '/hampaioclient/user/profile'
const forgotPasswordView = '/hampaioclient/reset/:token'
const accessoriesView = '/hampaioclient/product/accessories'
const brandsView = '/hampaioclient/brands'
const expertiseView = '/hampaioclient/expertise'
const newsView = '/hampaioclient/news'
const productsView = '/hampaioclient/product'
const checkoutView = '/hampaioclient/checkout'
const admin = '/hampaioclient/admin'
const productDetailsView = (id?: string) => { return id ? `/hampaioclient/product/${id}` : '/hampaioclient/product/:id' }


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