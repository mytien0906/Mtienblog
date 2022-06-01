import React from 'react';

export default function CategoryItem() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div
        className="categories__item set-bg"
        style={{ backgroundImage: 'url(/img/categories/cat-1.jpg)' }}
      >
        <div className="categories__hover__text">
          <h5>Dinner</h5>
          <p>28 articles</p>
        </div>
      </div>
    </div>
  );
}
