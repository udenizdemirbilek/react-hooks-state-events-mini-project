import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  const categoryButtons = categories.map((category, index) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button 
      className={className}
      key={index}
      onClick={() => onSelectedCategory(category)}
      >
      {category}
      </button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
