import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproductbyid, getallproducts } from '../Redux_toolkit/Features/Product'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Trash } from 'lucide-react'

const TopProducts = () => {
  const { products } = useSelector((state) => state.prod)
  const dispatch = useDispatch()

  const Featured_Card=products.filter((data)=>data.cardType=='featured')
    const limitOf3OnFeature = Featured_Card.slice(0, 3);
  // console.log(products)
  
  const catSale=products.filter((data)=>data.cardType=='sale')
  const limitOf3OnSale = catSale.slice(0, 3);

  const catPopular=products.filter((data)=>data.cardType=='popular')
  const limitOf3Onpopular = catPopular.slice(0, 3);
  
  const Side_img=products.find((data)=>data.cardType=='side-big')
  // console.log(Side_img)
  
  useEffect(() => {
    dispatch(getallproducts())
  }, [])

  const Featured_ids = limitOf3OnFeature
  const NewProducts_ids = limitOf3OnSale
  const Popular_ids = limitOf3Onpopular
  if (!products) {
    return <div>Loading...</div>
  }
  const { role } = useSelector((state) => state.auth)
    // console.log(role)
    const handleDelete = async (id) => {
      const confirm = window.confirm('Are you sure you want to delete this product?');
      if (!confirm) return;
  
      const result = await dispatch(deleteproductbyid(id));
  
      if (deleteproductbyid.fulfilled.match(result)) {
        toast.success('Product deleted');
        dispatch(getallproducts()); // refresh product list
      } else {
        toast.error(result.payload || 'Failed to delete');
      }
    };

  return (
    <div className='h-full  w-full flex-col md:flex-row items-center lg:container lg:px-0 md:px-5 mx-auto flex'>
      {/* Pop-cards */}
      <div className="TopProducts md:w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4  items-center">
        {/* Featured Products  */}
        <div className="featured-Product relative w-full py-2 pt-3 px-5">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>Featured Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            {Featured_ids.map((data, index) => (
                <Link key={data._id} to={`/product/${data._id}`} >
              <div  className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src={data.image} alt="" />

              </div>
            
              <div className="hoz-card-text mx-3 h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>{data.category}</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>{data.title}</h1>
                <h3 className='font-bold text-red-600'>Rs:{data.price} <span><del className='text-gray-500 font-semibold'>Rs :{data.discountedPrice}</del></span></h3>
              </div>
            </div>  </Link>
            ))}



          </div>
        </div>

        {/* New Products  */}
        <div className="featured-Product relative w-full py-2 pt-3 px-5 ">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>OnSale Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            {NewProducts_ids.map((data, index) => (
               <Link key={data._id} to={`/product/${data._id}`} >
              <div  className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src={data.image} alt="" />

              </div>
              <div className="hoz-card-text mx-3  h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>{data.category}</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>{data.title}</h1>
                <h3 className='font-bold text-red-600'>{data.price} <span><del className='text-gray-600 font-semibold'>{data.discountedPrice}</del></span></h3>
              </div>
            </div></Link>
            ))}

          </div>
        </div>

        {/* Popular Products  */}
        <div className="featured-Product relative w-full py-2 pt-3 px-5">
          <h1 className='after:border-b-amber-500 after:bg-amber-400 after:h-0.5 after:w-20 after:absolute after:inset-0 after:top-14 after:left-6 border border-b-gray-400 border-transparent text-xl py-2 font-semibold'>Popular Products</h1 >
          <div className='horizontal-card flex flex-col'>

            {/* 1st Card Real one*/}
            {Popular_ids.map((data, index) => (
               <Link key={data._id} to={`/product/${data._id}`} >
              <div  className="flex items-center my-1 justify-center hover:shadow-2xl transition-all duration-300 hover:border-gray-300 border rounded-xl p-1">
              <div className="hoz-img min-w-24 max-w-24  h-24 rounded-xl overflow-hidden">
                <img className='object-cover h-full' src={data.image} alt="" />

              </div>
              <div className="hoz-card-text mx-3 h-28 w-full flex-col justify-center flex ">
                <h5 className='text-sm text-gray-600'>{data.category}</h5>
                <h1 className='font-bold truncate line-clamp-2 text-wrap hover:text-amber-400 transition-all duration-300'>{data.title}</h1>
                <h3 className='font-bold text-red-600'>Rs: {data.price} <span><del className='text-gray-600 font-semibold'>Rs: {data.discountedPrice}</del></span></h3>
              </div>
            </div></Link>))}



          </div>
        </div>
        {/* Big-right Image  */}
     { Side_img &&  <Link to={`/product/${Side_img._id}`}>
        <div className="Big-1-Product relative  w-full p-3 flex items-center rounded-xl overflow-hidden">
          <div className="img-card rounded-xl  border overflow-hidden md:min-w-60 w-full h-96  hover:drop-shadow-2xl transition-all duration-300">
            <img src={Side_img.image} alt="" className='object-cover md:w-full sm:h-full lg:h-full' />
          </div>
        {role === 'admin' &&
        
                        <div className="dlt">
                          <button onClick={() => handleDelete(Side_img._id)} className="absolute bottom-5 right-5 p-2 rounded-lg bg-red-600 hover ">
                            <Trash className='size-5 text-white hover:text-amber-400 transition-all duration-300' />
                          </button>
                        </div>
                      }
        </div>
        </Link>}
      </div>
    </div>

  )
}

export default TopProducts
