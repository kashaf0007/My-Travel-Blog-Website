
'use client'
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment: Comment = {
      id: comments.length + 1,
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <section  className="px-3 ml-20 mr-20 mt-6 bg-gray-100  rounded-md border border-black h-48 w-40%">
    <div className='l-5 mt-30 px-4 md:px-8 max-w-6xl mx-auto' >
      <h2 className='text-2xl font-extrabold mt-3 mb-6 text-start text-black'>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
        className='w-full h-14 bg-blue-100 text-black rounded-md'
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder=" provide your opinion"
        />
        <button type="submit" className='mt-5 w-20 h-10 border rounded-md bg-green-600 text-xl font-bold text-white'>Send</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
    </section>
  )}
export default Comments
