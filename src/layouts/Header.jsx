function Header({ currentScore, bestScore }) {
  return (
    <header className="flex flex-col md:justify-center sm:justify-start gap-20 text-yellow-300">
      <div className="flex flex-col items-center">
        <img
          src="../src/assets/PokemonLogo.png"
          alt="Pokemon Text Logo"
          className="md:w-[600px] sm:w-[300px] xs:w-[250px]"
        ></img>
        <p className="text-4xl">Remember Em` All !!</p>
        <p className="text-base">A Memory Card game by suix0</p>
      </div>
      <div className="flex justify-center lg:mb-[200px] gap-36 text-2xl xs:text-base xs:mb-12">
        <p className="text-center">
          Current score: <br></br>
          <span className="text-4xl">{currentScore}</span>
        </p>
        <p className="text-center">
          Best score: <br></br>
          <span className="text-4xl">{bestScore}</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
