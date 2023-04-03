import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating.js';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import Col from 'react-bootstrap/Col';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    wishlist: { wishlistItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const addToWishlistHandler = async (item) => {
    const existItem = wishlistItems.find((x) => x._id === product._id);
    const quantity = existItem
      ? window.alert('This product is already in your wishlist')
      : 1;

    if (!existItem) {
      ctxDispatch({
        type: 'WISHLIST_ADD_ITEM',
        payload: { ...item, quantity },
      });
    }
  };

  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} noReviews={product.noReviews} />
        <Card.Text>
          <strong>RM {product.price}</strong>
        </Card.Text>
      </Card.Body>
      {product.countInStock === 0 ? (
        <Button variant="light" disabled>
          Out of stock
        </Button>
      ) : (
        <Col className="d-flex" style={{ gap: '30px' }}>
          <Button onClick={() => addToCartHandler(product)}>
            <i className="fas fa-shopping-cart"></i>
          </Button>

          <Button onClick={() => addToWishlistHandler(product)}>
            {' '}
            <i className="fas fa-heart"></i>
          </Button>
        </Col>
      )}
    </Card>
  );
}

export default Product;
