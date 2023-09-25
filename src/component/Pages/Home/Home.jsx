const Home = () => {
  return (
    <div className="py-12">
      <div className="card card-compact w-96 bg-[#0052FFFF] ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
