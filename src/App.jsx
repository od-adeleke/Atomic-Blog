import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import {PostProvider} from './PostProvider'
import Button from './components/Button'
import Header from './components/Header'
import Main from './components/Main'
import Archive from './components/Archive'
import Footer from './components/Footer'

function App() {

  const [isFakeDark, setIsFakeDark] = useState(false);

  function handleFakeDark() {
    setIsFakeDark((isFakeDark) => !isFakeDark)
  }
  
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <PostProvider>
      <section>
        <Button onFakeDark={handleFakeDark} isFakeDark={isFakeDark} />
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
