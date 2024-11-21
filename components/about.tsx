import Image from 'next/image'; // Assuming you're using Next.js for Image optimization

function About() {
    return (
        <div className="flex flex-wrap  gap-10">
            {/* First Product Card */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/th.jpg"
                        alt="Product One"
                        width={200}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Second Product Card */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/th.jpg"
                        alt="Product Two"
                        width={200}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Third Product Card */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/th.jpg"
                        alt="Product Three"
                        width={200}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

           
        
        </div>
    );
}

export default About;
