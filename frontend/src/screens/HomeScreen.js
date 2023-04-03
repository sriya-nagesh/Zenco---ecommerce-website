import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product.js';
import { Helmet } from 'react-helmet-async';
import LoadingWidget from '../components/LoadingWidget.js';
import MessageBox from '../components/MessageBox.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: 'Please try again later' });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Zenco Stationery</title>
      </Helmet>
      <div class="slider-frame">
        <div class="slide-images">
          <div class="img-container">
            <img src="images/b-1.png" alt="" />
          </div>
          <div class="img-container">
            <img src="images/b-2.png" alt="" />
          </div>
          <div class="img-container">
            <img src="images/b-3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="products">
        {loading ? (
          <LoadingWidget />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
