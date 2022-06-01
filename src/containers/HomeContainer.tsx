import React, { useEffect, useState } from 'react';
import Layout from '../base/Layout';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Posts from '../components/Posts';
import SearchModel from '../components/SearchModel';
import Slider from '../components/Slider';

export default function HomeContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      <Header />
      <Slider />
      <section className="categories spad">
        <Categories />
        <Posts/>
      </section>
      <SearchModel/>
    </Layout>
  );
}
