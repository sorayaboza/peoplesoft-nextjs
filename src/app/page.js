"use client"
// src/app/page.js


import { useState, useEffect } from 'react';


export default function Home() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState([]);


  // Fetch the data when the component mounts
  const fetchData = async () => {
    try {
      const res = await fetch('/api/course_list');
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };


  useEffect(() => {
    fetchData(); // Fetch the data when the component mounts
  }, []);


  // Function to handle form submission for adding items
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await fetch('/api/course_list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, category }),
      });


      if (res.ok) {
        fetchData(); // Refresh the data after adding a new item
        setDescription('');
        setCategory('');
      } else {
        console.error('Failed to add item');
      }
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };


  // Function to handle item deletion
  const handleDelete = async (id) => {
    try {
      // Send DELETE request to API with item ID
      const res = await fetch('/api/course_list', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
 
      // Refresh data if deletion was successful
      if (res.ok) fetchData();
    } catch (err) {
      // Log error if something goes wrong
      console.error('Delete error:', err);
    }
  };
 


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-4">My Main Page</h1>


      {/* Form to add new items */}
      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </form>


      <div className="w-full max-w-md">
        {/* Display the fetched data */}
        {data.map((item) => (
          <div key={item.id} className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">ID: {item.id}</h2>
              <p>Description: {item.description}</p>
              <p>Category: {item.category}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}