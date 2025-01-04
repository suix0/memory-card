function Header() {
  return (
    <header className="flex flex-col justify-center gap-20 text-yellow-300">
      <div className="flex flex-col items-center">
        <img
          src="../src/assets/PokemonLogo.png"
          alt="Pokemon Text Logo"
          className="w-[600px]"
        ></img>
        <p className="text-4xl">Remember Em` All !!</p>
        <p className="text-base">A Memory Card game by suix0</p>
      </div>
      <div className="flex justify-center mb-[250px] gap-36 text-2xl">
        <p className="text-center">
          Current score: <br></br>
          <span className="text-4xl">0</span>
        </p>
        <p className="text-center">
          Best score: <br></br>
          <span className="text-4xl">0</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
