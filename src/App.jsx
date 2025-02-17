import React from 'react';
import rocketdab from './assets/rocketdab.png'

const App = () => {
  return (
   <>
     <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">

         <header className="bg-teal-700 text-white sticky top-0 z-10">

          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className='text-3xl font-medium'> 
                  <a href="#hero">  🚀 Acme Rokects</a> 
                </h1>
                  <button id='mobile-open-button' className='text-3xl sm:hidden focus:outline-none'>
                    &#9776;
                  </button> 
               <nav className='hidden sm:block space-x-8 text-xl ' aria-label='main' >
                    <a href="#rokect" className='hover:opacity-90'> Our Rocket </a>
                    <a href="#textimonials" className='hover:opacity-90'>Textimonials</a>
                    <a href="#condact" className='hover:opacity-90'>Contact Us</a>
               </nav>

          </section>
         </header>


           <main className='max-w-4xl mx-auto'>

            <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12'> 
              
              <article className='sm:w-1/2' >
              <h2 className='max-w-md mx-auto text-4xl font-bold text-cnter sm:text-5xl sm:text-left text-salte-900 dark:text-white'>

                We Boldy  <span className='text-indigo-700 dark:text-indigo-300'> Go Where No Rocket Has</span> Gone Before...
              </h2>
               
               <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 '> We're building rockets for the next century today.  from the moon to Mars , Jubiter and byond.</p>
               <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 '>Think Aceme Rokets . </p>

              </article>

              <img className='w-1/2' src={rocketdab} alt="rocketdab" />
               </section>
              
               <hr className='mx-auto dark:bg-white w-1/2' />

               <section id='rockets' className='p-6 my-12 ' >
                 <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white'>
                  Our Rockets 
                  </h2> 
                </section>

                <hr className='mx-auto dark:bg-white w-1/2' />

               <section id='textimonials' className='p-6 my-12 ' >
                 <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white'>
                 Textimonials
                  </h2> 
                </section>

                <hr className='mx-auto dark:bg-white w-1/2' />
                
               <section id='contact' className='p-6 my-12 ' >
                 <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white'>
                  Contact Us
                  </h2> 
                </section>
           </main>

     </div>
        



   </>
  );
}

export default App;
