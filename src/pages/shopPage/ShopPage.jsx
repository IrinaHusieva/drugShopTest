
import React, { useEffect, useState } from 'react';
import css from './Shop.module.css';
import { fetchData } from 'api/api';
import { useCart } from '../../cartContext';
import Loader from '../../components/loader/Loader';

const ShopPage = () => {
  const { addToCart } = useCart(); 
  const [loading, setLoading] = useState(true);

  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);

  useEffect(() => {
    const loadShops = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setShops(data);
          setCurrentShop(data[0]); 
        }
      } catch (error) {
        console.error('Error loading shops:', error);
      } finally {
        setLoading(false); 
      }
    };
    loadShops();
  }, []);

  const handleShopClick = (shop) => {
    setCurrentShop(shop); 
  };

  return (
    <div className={css.container}>
      {loading ? ( 
        <Loader/>
      ) : (
        <>
          <div className={css.shops}>
            <h3>SHOPS:</h3>
            <ul className={css.shopList}>
              {shops.map((shop, i) => (
                <li key={i} className={css.shopItem}>
                  <button type='button' className={css.shopBtn} onClick={() => handleShopClick(shop)}>{shop.title}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.drugs}>
            <ul className={css.drugsList}>
              {currentShop && currentShop.drugs.map((drug, i) => (
                <li key={i} className={css.drugItem}>
                  <img src={drug.url} alt='drug' className={css.drugImage} />
                  <h3 className={css.title}>{drug.name}</h3>
                  <button className={css.drugBtn} onClick={() => addToCart(drug)}>Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
