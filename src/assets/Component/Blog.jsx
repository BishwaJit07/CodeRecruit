import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center mt-10 text-white text-2xl font-semibold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-4'>
          <p >  Question & Answer</p>
        </div>
            <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'> 
                <h2 className='font-bold text-2xl'>a. When should you use context API?</h2>
                 <p className='text-xl py-2'>The Context API is a way to pass data through the component tree without having to pass props down manually at every level. It can be useful when you have data that needs to be shared between multiple components at different levels of the tree. It's particularly useful for global settings, themes, and authenticated user data.</p>
           </div>

           <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
            <h2 className='font-bold text-2xl'>b. What is a custom hook?</h2>
            <p className='text-xl py-2'>A custom hook is a function that allows you to reuse stateful logic across multiple components in React. It's essentially a way to extract stateful logic from a component so that it can be shared and reused across multiple components. Custom hooks start with the word "use" and are generally created when you find yourself repeating the same logic in multiple components. </p>
           </div>

           <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
            <h2 className='font-bold text-2xl'>c. What is useRef?</h2>
            <p className='text-xl py-2'> useRef is a hook in React that returns a mutable ref object that can be used to keep a value around between renders. It's similar to creating an instance property on a class component that persists between renders, but useRef works with functional components as well. useRef can be used for a variety of things, such as storing a reference to a DOM element or storing the previous value of a state variable.</p>
           </div>

           <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
            <h2 className='font-bold text-2xl'>d. What is useMemo?</h2>
            <p className='text-xl py-2'>useMemo is a hook in React that allows you to memoize the result of a function call so that it only recomputes when the inputs have changed. This can be useful for expensive calculations or when you have a component that re-renders frequently due to a prop change. useMemo takes two arguments, a function to memoize and an array of dependencies. The function will only be re-executed when one of the dependencies has changed.
                               </p>
           </div>

        </div>
    );
};

export default Blog;