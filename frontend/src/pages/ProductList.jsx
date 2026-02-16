import React, { useMemo, useState } from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

function ProductList() {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  const filteredProducts = useMemo(() => {
    let result = [... products];

    if(search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) 
      
      )
    }
    if ( category) {
      result = result.filter( p => p.category === category)
    }

    if ( sort === 'asc') {
      result.sort((a, b) => a.price - b.price)
    }
    if(sort === 'desc') {
      result.sort((a,b) => b.price - a.price)

    }
    return result;
  }, [search,category,sort]);

  
  return (
    <div className='bg-white p-6 rounded- xl shadow-md'>
      <h2 className='text-lg font-semibold mb-4'>Product List</h2>

      <div className='flex flex-wrap gap-4 mb-4'>
        <input type = 'text'
        placeholder='Search product'
        className='border p-3 rounded-lg'
        onChange={(e) => setSearch(e.target.value)}
        />

        <select className='border p-2 rounded-lg'
        onChange={(e) => setCategory(e.target.value)}>
          <option value = ""> All Categories</option>
          <option value = ""> Electronics</option>
          <option value = ""> Fashion</option>
          </select>

          <select className='border p-2 rounded-lg'
          onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="asc">Price Low → High</option>
            <option value="desc">Price High → Low </option>
            
            </select>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        {filteredProducts.map(product => (
          <ProductCard key = {product.id} product= {product} />
        ))
        }
      </div>
    </div>
  )
}

export default ProductList
