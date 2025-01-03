function Header() {
  return (
    <header className="flex flex-col items-center justify-between h-[100svh] gap-2">
      <div className="flex flex-col items-center">
        <img
          src="../src/assets/PokemonLogo.png"
          alt="Pokemon Text Logo"
          className="w-[500px]"
        ></img>
        <p className="text-4xl">Remember Em` All !!</p>
        <p className="text-base">A Memory Card game by suix0</p>
      </div>
      <div className="flex justify-center mb-[480px] gap-36 text-2xl">
        <p>Current score: </p>
        <p>Best score: </p>
      </div>
    </header>
  );
}

export default Header;
