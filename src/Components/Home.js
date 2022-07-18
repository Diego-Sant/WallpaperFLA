import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
      <Head title="Fotos" description="Home WallpaperFLA" />
    </section>
  );
};

export default Home;
