import React from 'react';
import ReactDOM from 'react-dom/client'; 


// CSS

import './index.css'

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

const books =[
{
   img:'./images/book-1.jpg',
   title:'I love You to the Moon and Back',
   author:'Amelia Hepworth', 
   id:1,  
   },
{
   img:'./images/book-2.webp',
   title:'Verify Paperback - October 26.',
   author:'Cooleen Hoover',  
   id:2, 
   }
];

// const names = ['john', 'peter', 'julie'];
// const newNames = names.map((name) =>{
// console.log(name);
// return <h1>{name}</h1>
// });
// console.log(newNames);

function BookList(){
  return (
     <section className="booklist">
      <EventExamples />
       {books.map((book)=>{
         return (
         <Book {...book} key={book.id} />
         );
       })}
      </section>
   );
}

{/* EventExamples */}

const EventExamples = () => {
//    const handleFormInput = (e) => {
//       console.log(e.target);
//       console.log(e.target.name);
//       console.log(e.target.value);
//    };

//    const handleButtonClick = () => {
//       alert('handle button click');
//    };
//    const handleFormSubmission = (e) => {
//       e.preventDefault();
//       console.log('form submission');
//    };

   return (
   <section>
      <form>
         <h2>Typical Form</h2>
         <input 
         type='text'
         name='example'
         onChange={(e)=>console.log(e.target.value)} 
         style={{margin:'1rem 0'}} />
         <button type='submit'>submit</button>
         <div>
            <button onClick={()=>console.log('click me')} type='button'>
               click me
            </button>
         </div>
      </form>
   </section>
   );
};


const Book = (props) => {
   const {img, title, author} = props;
   // console.log(props);
   return (
   <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4 >{author}</h4>
      
   </article>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />);