import { useEffect, useState } from 'react';
import styles from './App.css';

const PRODUCTS_MOCK = [
    { id: '001', name: 'Телевизор', price: 39900 },
    { id: '002', name: 'Смартфон', price: 18900 },
    { id: '003', name: 'Фен', price: 1749 },
];

export const App = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ json: () => PRODUCTS_MOCK });
            }, 2500);
        })
            .then((loadedData) => loadedData.json())
            .then((loadedProducts) => {
                setProducts(loadedProducts);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className={styles.app}>
            {isLoading
                ? <div className="loader"></div>
                : products.map(({ id, name, price }) => (
                    <div key={id}>
                        {name} - {price} руб
                    </div>
                ))
            }
        </div>
    );
};

export default App;
