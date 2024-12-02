
import Image from "next/image";

export default function SignOutPage() {
  return (
    <section className="bg-[url('/images/bg5.jpg')]  bg-cover bg-center bg-no-repeat xs:p-10 p-5 ">
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="xs:space-y-3 space-y-1">
          <h3 className="xs:text-lg text-[0.9rem] sm:pb-5 xs:pb-4 pb-2 text-center">Welcome to your new journey!</h3>
          <h1 className="sm:text-5xl xs:text-4xl text-[1.6rem] font-semibold pb-3 text-center">Code And Connect</h1>
          <p className="xs:text-xl text-[1rem]  text-center">
            We’re thrilled to have you with us. Your account is all set up!
          </p>
          <div className="md:hidden block  justify-items-center " >
          <Image
            src="/images/signoutbg.png"
            alt="signout-bg"
            width={500}
            height={500}
            className="w-full h-full object-cover"

          />
        </div>
          <p className="xs:pb-5 pb-2 xs:text-[1rem] text-[0.8rem] text-center">
            Dive in and explore all the amazing features we have for you.
          </p>
          <div className="btn  text-center">
            <button className="bg-slate-800 text-white py-2 px-5 rounded-md cursor-pointer xs:text-[1rem] text-[0.8rem]">
              {`Let’s`} Get Started!
            </button>
          </div>
        </div>
        <div className="md:block hidden" >
          <Image
            src="/images/signoutbg.png"
            alt="signout-bg"
            width={500}
            height={500}
            className="w-[35rem] h-[25rem] object-cover"

          />
        </div>
      </div>
    </section>
  );
}
