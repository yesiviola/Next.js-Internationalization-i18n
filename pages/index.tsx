import { NextPage } from 'next';
import React from 'react';
import {useRouter } from "next/router";
import en from "./en"
import es from "./es"
import Link from 'next/link';
import Selector from './components/Selector';

const Home: NextPage = () => {
  const {asPath, locale, locales} = useRouter();
  const t = locale === "en" ? en : es;
  
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', backgroundColor: '#ffc0cb'}}>
      <nav >
      <Link href="/">{t.about.nav1}</Link>
      <Link href="/about">{t.about.nav2}</Link>
      <Selector />
    </nav>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 >{t.home.title}</h1>
      <h3> {t.home.subTitle}  {locale}</h3>
    </div>
    </main>
  );
}

export default Home;