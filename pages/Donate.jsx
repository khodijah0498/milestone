import React from 'react'

const Donate = () => {
  return (
    <div className="py-10 px-6 md:px-mid">
      <div className="flex justify-center items-center">
        <div className="md:w-[754px] p-[32px] flex gap-10 flex-col  border-2 border-green">
          <h1 className="text-4xl font-bold text-secondary">Donation Form</h1>
          <div className="flex flex-col gap-4">
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="Name" className="hover:text-secondary">
                FullName
              </label>
              <input
                type="text"
                name="FullName"
                placeholder='fullname'
                className="border rounded-lg w-full outline-none p-1"
              />
            </form>
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="Email address" className="hover:text-secondary">
                Email address
              </label>
              <input
                type="email"
                name="Email address"
                placeholder='myname@eample.com'
                className="border  rounded-md w-full outline-none p-1"
              />
            </form>
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="number" className="hover:text-secondary">
                Phone Number
              </label>
              <input
                type=""
                name="Phone Number"
                placeholder='+(000) 000 000'
                className="border rounded-md w-full outline-none p-1"
              />
            </form>
            <form
              className="flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="comment" className="hover:text-secondary">
                Comments
              </label>
              <textarea className="border rounded-md w-full p-1 outline-none "></textarea>
            </form>
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="amount" className="hover:text-secondary">
                Donation Amount
              </label>
              <input
                type=""
                name="Donate Amount"
                placeholder='please enter your donation amount'
                className="border rounded-md w-full outline-none p-1"
              />
            </form>
            <div className="flex justify-center ">
              <button className="h-[50px] w-[170px] flex rounded-[8px] py-[13px]  px-16 mb-48 bg-primary hover:bg-secondary text-white">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate