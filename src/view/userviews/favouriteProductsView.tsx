import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import { ToggleCartContext } from '../../shared/provider/ToggleCartProvider'
import RoutingPath from '../../routes/RoutingPath'
import './favouriteProductsView.css'
import APIService from '../../shared/api/service/APIService'
import heartImg from '../../shared/images/heart.svg'
import likedHeartImg from '../../shared/images/filledHeart.svg'

export const favouriteProductsView = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [, setIsShoppingBagOpen] = useContext(ToggleCartContext)
	const history = useHistory()

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

	const displayColoredHeartIfProductIsLiked = (productId: string) => {
		const found = authenticatedUser.favouriteProducts?.some((item: any) => item._id === productId)
		console.log(found)
		return authenticatedUser.favouriteProducts?.some((item: any) => item._id === productId)
			? <img className='addToFavourite' src={likedHeartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
			: <img className='addToFavourite' src={heartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
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

	const displayFavouriteProducts = () => {
		return authenticatedUser.favouriteProducts.map((x: any) =>
			<div className='displayProductWrapper' key={x.title}>
				<div>
					<div className='productImgWrapper'>
						<img className='productImg' src={'https://picsum.photos/200/200'} alt='' onClick={() => history.push(RoutingPath.productDetailsView(x._id), x)} />
					</div>
					<p className='pBrand'>Herbaman Co.</p>
					{displayColoredHeartIfProductIsLiked(x._id)}
					<p className='pTitle'>{x?.title}</p>
					<p className='pPrice'>{x?.price} kr</p>
				</div>
				<div className='addToCartButton' onClick={() => addToCart(x._id)}>Addera till varukorg</div>
			</div>)
	}

	return (
		<div>
			<p className='productViewTitle'>My Favourite</p>
			<p className='productViewSubTitle'>
				Explore our curated collection of homewares made in Australia and Japan. <br />
				From candles and pottery to organic towels and Japanese pairing knives, <br />
				each piece has been thoughtfully selected. <br />
			</p>
			<div className='favouriteProductsViewContainer'>
				{displayFavouriteProducts()}
			</div>
		</div>
	)
}
