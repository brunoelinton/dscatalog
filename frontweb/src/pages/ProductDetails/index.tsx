import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Product } from 'assets/types/product';
import axios from 'axios';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'util/requests';
import './styles.css';

const ProductDetails = () => {
  
  let product : Product;

  axios.get(BASE_URL + "/products/2")
    .then(response => {
      console.log(response.data)
    });

  
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="Nome do produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, tempore sit explicabo officiis at modi fugiat quia non
                totam voluptatibus tenetur magnam deleniti temporibus accusamus
                quam in quos, ducimus enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
