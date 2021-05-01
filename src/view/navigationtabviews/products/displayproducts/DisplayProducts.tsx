import './DisplayProducts.css'
import { useContext } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import heartImg from '../../../../shared/images/heart.svg'
import likedHeartImg from '../../../../shared/images/filledHeart.svg'
import { useFetch } from '../../../../hooks/useFetch'

export const DisplayProducts = () => {
	const history = useHistory()
	const [, setIsShoppingBagOpen] = useContext(ToggleCartContext)
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)
	const { data, loading, error } = useFetch(APIService.getAllProducts)

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await APIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			setIsShoppingBagOpen(true)
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}

	const updateProductToFavourite = async (productId: string) => {
		const isProductAlreadyInFavouriteList = authenticatedUser.favouriteProducts?.some((item: any) => item._id === productId)
		if (isProductAlreadyInFavouriteList) {
			const removedFavouriteItem = authenticatedUser.favouriteProducts.filter((item: any) => item._id !== productId)
			setAuthenticatedUser({ ...authenticatedUser, favouriteProducts: removedFavouriteItem })
			await APIService.updateFavouriteProducts({ userId: authenticatedUser.id, favouriteProducts: removedFavouriteItem })
		} else {
			const addedfavouriteItem = authenticatedUser.favouriteProducts.concat([productId]) //TODO: Fix this line!
			const { data } = await APIService.updateFavouriteProducts({ userId: authenticatedUser.id, favouriteProducts: addedfavouriteItem })
			setAuthenticatedUser({ ...authenticatedUser, favouriteProducts: data.favouriteProducts })
		}
	}

	const displayColoredHeartIfProductIsLiked = (productId: string) => {
		const found = authenticatedUser.favouriteProducts?.some((item: any) => item._id === productId)
		console.log(found)
		return authenticatedUser.favouriteProducts?.some((item: any) => item._id === productId)
			? <img className='addToFavourite' src={likedHeartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
			: <img className='addToFavourite' src={heartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
	}

	const displayData = () => {
		if (!loading) {
			return data?.map((item: any) =>
				<div className='displayProductWrapper' key={item?._id}>
					<div>
						<div className='productImgWrapper'>
							<img className='productImg' src={'https://picsum.photos/200/200'} alt='' onClick={() => history.push(RoutingPath.productDetailsView(item._id), item)} />
						</div>
						<p className='pBrand'>Herbaman Co.</p>
						{displayColoredHeartIfProductIsLiked(item._id)}
						<p className='pTitle'>{item?.title}</p>
						<p className='pPrice'>{item?.price} kr</p>
					</div>
					<div className='addToCartButton' onClick={() => addToCart(item._id)}>Addera till varukorg</div>
				</div>)
		}
	}

	return (
		loading
			? <h1>LOADING..</h1>
			: <div className='displayProductsContainer'>
				{displayData()}
			</div>
	)
}
