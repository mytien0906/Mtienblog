import React from 'react';
import CategoryItem from './CategoryItem';

export default function Categories() {
  return (
    <div className="container">
      <div className="row">
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        {/* <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="categories__item set-bg"
            style={{ backgroundImage: 'url(/img/categories/cat-2.jpg)' }}
          >
            <div className="categories__hover__text">
              <h5>Dinner</h5>
              <p>28 articles</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="categories__item set-bg"
            style={{ backgroundImage: 'url(/img/categories/cat-3.jpg)' }}
          >
            <div className="categories__hover__text">
              <h5>Dinner</h5>
              <p>28 articles</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="categories__item set-bg"
            style={{ backgroundImage: 'url(/img/categories/cat-4.jpg)' }}
          >
            <div className="categories__hover__text">
              <h5>Dinner</h5>
              <p>28 articles</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
