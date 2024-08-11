import React from 'react';

export default async function getUser(id: unknown) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}
