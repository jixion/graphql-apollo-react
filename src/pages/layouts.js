import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="Website to showcase graphql skills as well as reusable components skills"
                />
                <title>Imperion Systems Modules + Blog Demo</title>
            </Head>
            <nav>
                <div className="nav-wrapper">
                    <Link href="/">
                        <a>Home</a>
                    </Link>{` | `}
                    <Link href="/cards">
                        <a>Cards</a>
                    </Link>{` | `}
                    <Link href="/neos">
                        <a>NEOS</a>
                    </Link>{` | `}
                    <Link href="/iss">
                        <a>ISS</a>
                    </Link>{` | `}
                    <Link href="/apod">
                        <a>APOD</a>
                    </Link>
                </div>
            </nav>
            {children}
        </div>
    );
}
