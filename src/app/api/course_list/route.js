import { NextResponse } from 'next/server';
import { pool } from '@/app/data/db';


export async function GET() {
  try {
    // Run the SQL query to get all rows from 'course_list'
    const result = await pool.query('SELECT * FROM course_list');
    // Return the result as a JSON response
    return NextResponse.json(result.rows);
  } catch (err) {
    // Log any errors and return error response
    console.error('Fetch error:', err);
    return NextResponse.error();
  }
}


export async function POST(req) {
  // Accessing and using the data from POST request
  const { description, category } = await req.json();
  try {
    // Insert item into the database and get the inserted row
    const { rows } = await pool.query(
      'INSERT INTO course_list (description, category) VALUES ($1, $2) RETURNING *',
      [description, category]
    );
    return NextResponse.json(rows[0]); // Return the new item as JSON
  } catch (err) {
    console.error(err); // Log any errors
    return NextResponse.error(); // Return a generic error response
  }
}

// Handle DELETE request
export async function DELETE(req) {
  const { id } = await req.json(); // Extract item ID from request body


  try {
    await pool.query('DELETE FROM course_list WHERE id = $1', [id]); // Delete item from database
    return NextResponse.json({ message: 'Item deleted' }); // Respond with success message
  } catch {
    return NextResponse.error(); // Respond with error if something goes wrong
  }
}
