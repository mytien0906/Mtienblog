import React from 'react';

export default function CategoriesPostItem() {
  return (
    <div className="categories__post__item">
      <div
        className="categories__post__item__pic small__item set-bg"
        style={{ backgroundImage: 'url(/img/categories/categories-post/cp-2.jpg)' }}
      >
        <div className="post__meta">
          <h4>08</h4>
          <span>Aug</span>
        </div>
      </div>
      <div className="categories__post__item__text">
        <span className="post__label">Recipe</span>
        <h3>
          <a href="##">The Best Weeknight Baked Potatoes, 3 Creative Ways</a>
        </h3>
        <ul className="post__widget">
          <li>
            by <span>Admin</span>
          </li>
          <li>3 min read</li>
          <li>20 Comment</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
        </p>
      </div>
    </div>
  );
}
