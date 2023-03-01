import Link from 'node_modules/next/link';

const MenuFooter = ({children}) => {
    return (
      <div className="w-100 flex flex-col justify-center items-center mt-10 mb-0">
        <Link
          href="/menu"
          className="font-rubik font-medium text-[14px] text-[#ffffff] bg-[#eb0029] transition ease-in-out duration-500 hover:bg-[#010f1c] py-4 px-12 rounded-full uppercase"
        >
          {children}
        </Link>
      </div>
    );
};

export default MenuFooter;