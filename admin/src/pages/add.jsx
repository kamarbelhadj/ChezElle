import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import {toast} from 'react-toastify';

const Add = ({token}) => {
  const [sizestype, setSizesType] = useState('');
  const upperwearSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const lowerwearSizes = [36, 38, 40, 42, 44, 46];
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("women");
  const [subCategory, setSubCategory] = useState("robe");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const handlesizeChange = (e) => {
    setSizesType(e.target.value);
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter((s) => s !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();  
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(selectedSizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData,{headers:{token}});
     
      if (response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('');
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)  
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <p className='mb-2'>Télécharger les images</p>
      <div className='flex gap-2'>
        <label htmlFor="image1">
          <img className='w-20 cursor-pointer' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
          <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
        </label>
        <label htmlFor="image2">
          <img className='w-20 cursor-pointer' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
          <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
        </label>
        <label htmlFor="image3">
          <img className='w-20 cursor-pointer' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
          <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
        </label>
        <label htmlFor="image4">
          <img className='w-20 cursor-pointer' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
          <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
        </label>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Nom du produit :</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Description du produit :</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='write content here' />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Catégorie de produit :</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value="Men">Homme</option>
            <option value="Women">Femme</option>
            <option value="Kids">Enfants</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sous-catégorie de produit:</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2'>
            <option value="robe">robe</option>
            <option value="tops">tops</option>
            <option value="t_shirts">t_shirts</option>
            <option value="chemise">Chemise</option>
            <option value="pantalon">Pantalon</option>
            <option value="jeans">Jeans</option>
            <option value="gilet">Gilet</option>
            <option value="chaussure">Chaussure</option>
            <option value="pull">pull</option>
            <option value="sac">Sac</option>
            <option value="accesoire">Accesoire</option>
            <option value="ensemble">Ensemble</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Prix du Produit :</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
        </div>
      </div>

      <div>
        <p className="mb-2">Type de produit :  (Vêtements de haut  ou  Vêtements de bas):</p>
        <select className="w-full px-3 py-2" onChange={handlesizeChange}>
          <option value="lowerwear">Vêtements de bas</option>
          <option value="upperwear">Vêtements de haut</option>
        </select>
      </div>

      <p>Tailles de produits disponibles :</p>
      {sizestype === "upperwear" ? (
        <div className="flex gap-3">
          {upperwearSizes.map((size, index) => (
            <p
              key={index}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 cursor-pointer ${selectedSizes.includes(size) ? 'bg-blue-400 text-white' : 'bg-slate-200'}`}
            >
              {size}
            </p>
          ))}
        </div>
      ) : (
        <div className="flex gap-3">
          {lowerwearSizes.map((size, index) => (
            <p
              key={index}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 cursor-pointer ${selectedSizes.includes(size) ? 'bg-blue-400 text-white' : 'bg-slate-200'}`}
            >
              {size}
            </p>
          ))}
        </div>
      )}

      <div className='flex gp-2 mt-2'> 
        <input onChange={() => setBestseller(prev => !prev)} type="checkbox" id="bestseller" checked={bestseller} />
        <label className='cursor-pointer ' htmlFor="bestseller">Ajouter au best-seller</label>
      </div>

      <button type="submit" className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"  >Ajouter</button>
    </form>
  );
};

export default Add;
