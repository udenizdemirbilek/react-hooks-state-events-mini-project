import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  const renderCategoryOptions = categories.filter(e => e !== "All")
  .map((category, index) => {
    return (
      <option key={index} >{category}</option>
    )
  })

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: "Code"
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {renderCategoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
