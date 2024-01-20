import {useRouter } from "next/router";
import en from "./en"
import es from "./es"
import Link from "next/link";



interface Translation {
    home: {
        title: string;
        nav1: string;
        nav2: string;
    };
    about: {
        title: string;
        nav1: string;
        nav2: string;
    };
}
const About = () => {
    const { asPath, locale, locales} = useRouter();
    const t: Translation = locale === "en" ? en : es;
  return (
    <div style={{backgroundColor: '#d3d3d3', height: '100vh'}}>
    <nav>
        <Link href="/">{t.about.nav1}</Link>
        <Link href="/about">{t.about.nav2}</Link>
    <ul>
        { locales && locales.map((loc) => (
        <li key={loc}>
            <Link href={asPath} locale={loc}>
                    {loc}
            </Link>
        </li>
      ))}
    </ul>
    <h1>{t.about.title}</h1>
    </nav>
    </div>

  )
}

export default About;
