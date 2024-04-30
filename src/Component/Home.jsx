import React from 'react';

function Home() {
    return (
        <section className="relative h-screen overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
        <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Find balance and healing through our mental health therapy AI CHATBOT.</h2>
            <p className="mt-4 text-base text-gray-200">Empowering Minds, Nurturing Well-being: Your Journey to Mental Wellness Starts Here.</p>

            {/* <div className="mt-8 lg:mt-12">
                <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                    <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div> */}
        </div>
    </div>
</section>

    );
}

export default Home;
