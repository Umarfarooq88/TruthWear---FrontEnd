'use client'
import React, { useEffect, useState } from "react"
import { CarouselTransition } from "@/components/tailwind/CarouselTransition";
import HorizontalCategories from "@/components/User/HorizontalCategories";
import { HomeProductCard } from "@/components/tailwind/HomeProductCard";
import api from "@/logic/api";
import { EcommerceCard } from "@/components/tailwind/EcommerceCard";

const Page = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  api.defaults.responseType = "json";

  const fetchCategories = async () => {
    try {
      const response = await api.get(`/product-categories`)
      const data = await response.data;
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async (url) => {
    try {
      setLoading(true);
      const response = await api.get(url)

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.data;
      console.log(data)
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  const onClearFilter = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    const url = selectedCategory
      ? `/products/category/${selectedCategory}`
      : `/products`;
    fetchProducts(url);
    fetchCategories();
  }, [selectedCategory])

  return (
    <>
      <div className=''>
        <CarouselTransition />
        <div className="flex flex-col  items-center">
          <p className='font-bold text-3xl mt-5 p-5'>Shop By Category</p>
          <HorizontalCategories onSelectCategory={handleCategorySelect} onClearFilter={onClearFilter} categories={categories} />
          <EcommerceCard products={products} />
          {/* <HomeProductCard products={products} /> */}
        </div>
      </div>
    </>
  )
}
export default Page