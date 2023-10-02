import Image from 'next/image';

const PersonalInfo = () => {
    return (
        
<div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-800 ">
    <Image width={600} height={200} alt="profil" src="/assets/img/1.jpg" className="w-full mb-4 rounded-t-lg h-28"/>
    <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" className="relative block">
            <Image width={150} height={150} alt="profil" src="/assets/img/2.jpg" className="mx-auto object-cover rounded-full h-16 w-16 "/>
        </a>
        <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
            Charlie
        </p>
        
        <p className="text-xs text-gray-400">
            FullStack dev
        </p>
     <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                <p className="flex flex-col">
                    Articles
                    <span className="font-bold text-black dark:text-white">
                        34
                    </span>
                </p>
                <p className="flex flex-col">
                    Followers
                    <span className="font-bold text-black dark:text-white">
                        455
                    </span>
                </p>
                <p className="flex flex-col">
                    Rating
                    <span className="font-bold text-black dark:text-white">
                        9.3
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>

    );
};

export default PersonalInfo;