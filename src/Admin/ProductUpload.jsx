import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadproduct } from '../Redux_toolkit/Features/Product'
import toast from 'react-hot-toast'

const ProductUpload = () => {
  const [ImagePreview, setImagePreview] = useState('')

  const [title, setTitle] = useState('');
  const [price, setprice] = useState();
  const [discountedPrice, setdiscountedPrice] = useState('');
  const [cardType, setCardstype] = useState('slider');
  const [category, setcategory] = useState('clothes');
  const [timer, settimer] = useState('');
  const [description, setdescription] = useState('');
  const [youtubeLink, setyoutubeLink] = useState('');
  const [sold, setSold] = useState('');
  const [available, setAvailable] = useState('');
  const [image, setImage] = useState('null');
  // const productdata={title,price,description,image}
  const dispatch = useDispatch()

  const titlehandler = (e) => {
    setTitle(e.target.value)
  }
  const pricehandler = (e) => {
    setprice(e.target.value)
  }
  const discpricehandler = (e) => {
    setdiscountedPrice(e.target.value)
  }
  const cardTypeHandler = (e) => {
    setCardstype(e.target.value);

  }
  const categoryHandler = (e) => {
    setcategory(e.target.value)
  }
  const timerHandler = (e) => {
    settimer(e.target.value);
  }
  const Descriptionhandler = (e) => {
    setdescription(e.target.value);
  }
  const YotubeLinkHandler = (e) => {
    setyoutubeLink(e.target.value);
  }
  const soldHandler = (e) => {
    setSold(e.target.value);
  }
  const availableHandler = (e) => {
    setAvailable(e.target.value);
  }

  const imagehandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

      // if (!allowedTypes.includes(selectedFile.type)) {
      //   toast.error("Only JPG, PNG, and JPEG images are allowed.");
      //   return;
      // }

      setImage(selectedFile); // for upload later
      setImagePreview(URL.createObjectURL(selectedFile)); // for showing image preview
    }
  };

  const formhandler = async (e) => {
    e.preventDefault();
// if(title===''){
//   toast.error('Please enter title')
// }else if(price==''){
//   toast.error('Please enter Price')
// }else if(description==''){
//   toast.error('Please enter Description')

// }
    const formData = new FormData(); // Crucial: Create FormData
    formData.append('title', title);
    formData.append('price', price);
    if (discountedPrice) {
      formData.append('discountedPrice', discountedPrice);
    }
    if (timer) {
      formData.append('timerEndsAt', timer);
    }
    if (sold) {
      formData.append('sold', sold);
    }
    if (available) {
      formData.append('available', available);
    }
    formData.append('cardType', cardType);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('image', image); // Append the file object
    formData.append('youtubeLink', youtubeLink); // Append the file object

    try {
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}:`, value);
      // }
      const response = await dispatch(uploadproduct(formData)); // Send FormData
      console.log(response)

      // console.log(response)
      if (uploadproduct.fulfilled.match(response)) {
        console.log("Uploaded:", response.payload);
        toast.success('Product posted successfully');
        setTitle('');
        setdescription('');
        setprice('');
        setdiscountedPrice('');
        setCardstype('slider');
        setcategory('clothes');
        settimer('');
        setImage(null);
        setImagePreview('')
        setSold('')
        setAvailable('')
        // dispatch(fetchallproducts()); // Update the product list
      } else {
        toast.error(response.payload.message);
        console.error("Upload failed:", response);
      }
    } catch (error) {
      console.error("Error posting product:", error);
      toast.error("An error occurred.", error);
    }
  }

  const formReset = (e) => {
    e.preventDefault();
    setTitle('');
    setdescription('');
    setprice('');
    setdiscountedPrice('');
    setCardstype('');
    setcategory('');
    settimer('');
    setImage(null);
    setSold('')
        setAvailable('')
  }
  const inputStyle='block w-full text-base text-gray-900 outline-1 -outline-offset-1 border-gray-200 focus:outline-2 focus:-outline-offset-0 focus:outline-[#12B1D1] sm:text-sm/6  bg-white border-1 py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#cff0ff] focus:border-none transform-all duration-200 ease-in-out placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-x-[2px]'
  return (
    <form className='bg-[#f0f0f0] md:mx-10 px-10 my-10 rounded-xl border-[1px] border-white shadow-[rgba(133,189,215,0.88)_0px_30px_30px_-10px]   w-full' onSubmit={formhandler}>
      <div className="space-y-12 ">

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="col-span-full">
            <h2 className="text-base/7 font-semibold text-gray-900">Product Upload</h2>
            <p className="mt-1 mb-5 text-sm/6 text-gray-600">Fill in the Form and Upload Your Product</p>
            <label htmlFor="cover-photo " className="block text-sm/6 font-medium text-gray-900">
              Product photo
            </label>
            <div className=" w-full text-base text-gray-900 outline-1 -outline-offset-1 border-gray-200 focus:outline-2 focus:-outline-offset-0 focus:outline-[#12B1D1] sm:text-sm/6  bg-white border-1   rounded-[20px]  shadow-[0_10px_10px_-5px_#cff0ff] focus:border-none transform-all duration-200 ease-in-out placeholder:text-[rgb(170,170,170)] focus:outline-none focus:border-x-[2px] mt-2 flex justify-center  border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                {image && ImagePreview ? (<img src={ImagePreview} alt="img" />) : (<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />)}
                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    {image && ImagePreview ? (<span>file Selected</span>) : (<span>Upload a file</span>)}
                    <input id="file-upload" name="file-upload" required onChange={imagehandler} type="file" className="sr-only " />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="Product-name" className="block text-sm/6 font-medium text-gray-900">
              Product Title
            </label>
            <div className="mt-2">
              <input
                id="Product-name"
                name="Product-name"
                type="text"
                autoComplete="given-name"
                value={title}
                placeholder='Green Ladies Handmade Handbag,Covered with leather and made with love'
                onChange={titlehandler}
                required
                className={inputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="Product-Price" className="block text-sm/6 font-medium text-gray-900">
              Product Price After Discount (in Rs)
            </label>
            <div className="mt-2">
              <input
                id="Product-Price"
                name="Product-Price"
                type="number"
                value={price}
                placeholder='700'
                onChange={pricehandler}
                required
                className={inputStyle}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="Discounted-Price" className="block text-sm/6 font-medium text-gray-900">
              Total Price(in Rs) <span className='text-gray-500'>optional</span>
            </label>
            <div className="mt-2">
              <input
                id="Discounted-Price"
                name="Discounted-Price"
                type="number"
                value={discountedPrice}
                placeholder='600'
                onChange={discpricehandler}
                className={inputStyle}
              />
            </div>
          </div>



          <div className="sm:col-span-4">
            <label htmlFor="components" className="block text-sm/6 font-medium text-gray-900">
              Select Copmonent
            </label>
            <div className=" grid grid-cols-1">
              <select
                onChange={
                  cardTypeHandler
                }
                id="components"
                name="components"
                value={cardType}
                className={inputStyle}
              >
                <option value={'slider'}>Slider</option>
                <option value={'slidermobile'}>Mobile Slider</option>
                <option value={'youtube'}>youtube</option>
                <option value={'timer'}>Timer</option>
                <option value={'featured'}>Featured</option>
                <option value={'popular'}>Popular</option>
                <option value={'sale'}>Sale</option>
                <option value={'cards'}>Cards</option>
                <option value={'center-big'}>Center-Big Image</option>
                <option value={'side-big'}>Side-Big Image</option>
              </select>
              {/* <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              /> */}
            </div>
          </div>
          {cardType == 'timer' &&
            <div className="sm:col-span-3">
              <label htmlFor="TimerExpireDate" className="block text-sm/6 font-medium text-gray-900">
                Timer Expire At
              </label>
              <div className="mt-2">
                <input
                  id="TimerExpireDate"
                  name="TimerExpireDate"
                  type="date"
                  onChange={timerHandler}
                  value={timer}
                  className={inputStyle}
                />
              </div>
            </div>}
          {cardType == 'youtube' &&
            <div className="sm:col-span-3">
              <label htmlFor="TimerExpireDate" className="block text-sm/6 font-medium text-gray-900">
                Yotube Link
              </label>
              <div className="mt-2">
                <input
                  id="TimerExpireDate"
                  name="TimerExpireDate"
                  type="text"
                  onChange={YotubeLinkHandler}
                  value={youtubeLink}
                  placeholder='Paste Youtube Link'
                  className={inputStyle}
                />
              </div>
            </div>}
          {cardType == 'timer' &&
            <div className="sm:col-span-3">
              <label htmlFor="sold" className="block text-sm/6 font-medium text-gray-900">
                Product Sold
              </label>
              <div className="mt-2">
                <input
                  id="sold"
                  name="sold"
                  placeholder='30'
                  value={sold}
                  type="number"
                  onChange={soldHandler}
                  // placeholder='Paste Youtube Link'
                  className={inputStyle}
                />
              </div>
            </div>}
          {cardType == 'timer' &&
            <div className="sm:col-span-3">
              <label htmlFor="available" className="block text-sm/6 font-medium text-gray-900">
                Remaining Products
              </label>
              <div className="mt-2">
                <input
                  id="available"
                  name="available"
                  placeholder='100'
                  value={available}
                  type="number"
                  onChange={availableHandler}
                  // placeholder='Paste Youtube Link'
                  className={inputStyle}
                />
              </div>
            </div>}


          <div className="sm:col-span-3">
            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
              Category
            </label>
            <div className=" grid grid-cols-1">
              <select
                id="category"
                name="category"
                onChange={categoryHandler}
                value={category}
                className={inputStyle}
              >
                <option value={'clothes'}>Clothes</option>
                <option value={'kitchen'}>Kitchen Essentials</option> 
                <option value={'gadgets'}>Gadgets</option>
                <option value={'tech'}>Tech</option>
                <option value={'cosmetics'}>Cosmetics</option>
                <option value={'kids'}>Kids</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
              Product Description
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                onChange={Descriptionhandler}
                value={description}
                placeholder='Enter product description'
                rows={3}
                required
                className={inputStyle}
              // defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about Product</p>
          </div>
        </div>
      </div>




      <div className="my-1 flex items-center justify-end gap-x-6">
        <button onClick={formReset} type="button" className="rounded-2xl hover:border-[#1089d3] border px-3 text-sm font-semibold text-black shadow-xs py-[15px] my-[10px] shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px]  transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10">
          Cancel
        </button>
        <button
          type="submit"
          className="w-20 font-bold bg-gradient-to-r from-[#1089d3] to-[rgb(18,177,209)] text-white py-[15px] my-[10px] rounded-[20px] shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] border-none transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px] bg-amber-400"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ProductUpload