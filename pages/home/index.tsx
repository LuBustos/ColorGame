import router from 'next/router'

const Home = () => {
    const toPlayGame = () => router.push('/guessTheHex');
  return (
    <div>
      <h1>Color game!</h1>
      <div>
          <p>Color game is a imitation of Guess the Hex!
              this game is developed in Next.js
          </p>
      </div>
      <div>
          <h4>difficult</h4>
          <p>Select your difficult!</p>
      </div>
      <div>
          <button onClick={toPlayGame}>Play!</button>
      </div>
    </div>
  );
};

export default Home;
