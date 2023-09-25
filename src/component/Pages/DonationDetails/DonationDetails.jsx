/* eslint-disable react/no-unescaped-entities */
const DonationDetails = () => {
  return (
    <>
      <div className="lg:h-[650px] md:h-[400px] h-[200px] rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-full flex items-end"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          }}
        >
          <div className="bg-[#0b0b0b80] w-full py-7 pl-7">
            <button className="bg-[#FF444A] md:px-5 md:py-3 px-4 py-2 text-[#fff] font-semibold  rounded">
              Donate $290
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-[#000] font-bold text-5xl">Good Education</h2>
        <p className="mt-5 text-secondaryTextColor text-base">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their children's education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
    </>
  );
};

export default DonationDetails;
