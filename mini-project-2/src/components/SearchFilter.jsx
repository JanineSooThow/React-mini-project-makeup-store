import React, { useState } from 'react';
import useSWR from 'swr';

function SearchFilter({ brand }) {
  const [query, setQuery] = useState('');

  // Our search filter function
  const searchBrand = (array) => {
    return array.filter(
      (el) =>
        el.brand &&
        el.brand.toLowerCase().includes(query.toLowerCase())
    );
  };

  const fetcher = (url) => fetch(url).then((res) => res.json()); // Define the fetcher function

  const { error, data, isLoading } = useSWR('/api/apidata.json', fetcher); // Use useSWR hook

  // Applying our search filter function to our brand
  const filtered = brand ? searchBrand(brand) : [];

  // Handling the input on our search bar
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='w-11/12 m-auto md:grid mt-10 gap-10 md:grid-cols-4 flex flex-col'>
      <div>
        {/* Search bar */}
        <input
          type='text'
          placeholder='Search by brand...'
          value={query}
          onChange={handleChange}
        />
      </div>
      <div>
        {/* Displaying filtered products */}
        {filtered.map((product) => (
          <div key={product.name}>
            <img src={product.image_link} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>
              {product.price_sign} {product.price} {product.currency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;
