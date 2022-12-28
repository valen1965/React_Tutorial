import React from 'react';
import ReactDOM from 'react-dom/client'; 


// CSS

import './index.css'
import { books } from './books';
import { Book } from './book';

// stateless functional component
// always return JSX

// JSX rules
// return single element
// div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

// nested components, React Tools

// Events - Fundamentals


// setup vars



// const names = ['john', 'peter', 'julie'];
// const newNames = names.map((name) =>{
// console.log(name);
// return <h1>{name}</h1>
// });
// console.log(newNames);

const BookList = () => {
    return (
      <>
         <h1>amazon best sellers</h1>
         <section className="booklist">
            {books.map((book, index)=>{
               return (
                  <Book {...book} key={book.id} number ={index} />
                  );
                  })}
         </section>
      </>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />);