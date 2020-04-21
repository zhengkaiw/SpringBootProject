import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
 
  useEffect(() => {
    retrieveProducts();
  }, []);

  const functionConstructor = (funcName) => {
    switch(funcName) {
      case "Author":
        return ProductService.getSortByAuthor();
      case "Title":
        return ProductService.getSortByTitle();
      case "BookRating":
        return ProductService.getSortByBookRating();
      case "TopSellers":
        return ProductService.getSortByTopSellers();
      case "ReleaseDate":
        return ProductService.getSortByTopSellers();
      case "Price":
        return ProductService.getSortByPrice();
    }
  }

  const retrieveProducts = () => {
    let url = window.location.pathname.substring(16);
    functionConstructor(url)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveProducts();
    setCurrentProduct(null);
    setCurrentIndex(-1);
  }

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  }

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Book List</h4>

        <ul className="list-group">
          {products &&
            products.map((product, index) => (
              <li 
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveProduct(product, index)}
                key={index}
              >
                {product.productName}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-md-6">
        {currentProduct ? (
          <div>
            <h4>Book</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentProduct.productName}
            </div>
            <div>
              <label>
                <strong>Author:</strong>
              </label>{" "}
              {currentProduct.productAuthor}
            </div>
            <div>
              <label>
                <strong>Category:</strong>
              </label>{" "}
              {currentProduct.productCategory}
            </div>
            <div>
              <label>
                <strong>Condition:</strong>
              </label>{" "}
              {currentProduct.productCondition}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentProduct.productDescription}
            </div>
            <div>
              <label>
                <strong>Price:</strong>
              </label>{" "}
              {currentProduct.productPrice}
            </div>
            <div>
              <label>
                <strong>Publisher</strong>
              </label>{" "}
              {currentProduct.productPublisher}
            </div>
            <div>
              <label>
                <strong>ReleaseDate:</strong>
              </label>{" "}
              {currentProduct.productReleaseDate}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentProduct.productStatus}
            </div>
            <div>
              <label>
                <strong>TopSellerStatus:</strong>
              </label>{" "}
              {currentProduct.topSellerStatus}
            </div>
            <div>
              <label>
                <strong>In Stock:</strong>
              </label>{" "}
              {currentProduct.unitInStock}
            </div>
            <div>
              <label>
                <strong>Num of Rating:</strong>
              </label>{" "}
              {currentProduct.numRating}
            </div>
            <div>
              <label>
                <strong>Rating:</strong>
              </label>{" "}
              {currentProduct.rating}
            </div>
            <div>
              <label>
                <strong>Total Rating:</strong>
              </label>{" "}
              {currentProduct.totalRating}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a book</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;