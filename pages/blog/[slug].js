import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import NavBar from '../../components/navbar'
import link from 'next/link';

const Post = ({ blog, profile }) => {
  const router = useRouter()

  return <><>
    <Head>
      <meta charset="utf-8" />

      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

      <title>{blog.title}</title>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <a rel="canonical" href="//post" />

      <meta property="og:url" content="//post" />

      <meta name="description"
        content="This is the blog part of my Website." />

      <a rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link crossOrigin="crossOrigin" href="https://fonts.gstatic.com" rel="preconnect" />

      {/* <link as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet" /> */}

      <a href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

      {/* <link crossOrigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" /> */}

      <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />



    </Head>
    <NavBar profile={profile} />

    <div>
      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1
              className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blog.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              <div>
               <img src="/assets/img/blog-author1.png"
                  className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image" />
              </div>
              <div className="pl-5">
                <span className="block font-body text-xl font-bold text-grey-10">By CodeWithAbdur</span>
                <span className="block pt-1 font-body text-xl font-bold text-grey-30">July 01 2002,
                  2022</span>
              </div>
            </div>
          </div>
          <div className="prose max-w-none pt-8">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="myjzyy1q"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

          </div>
          <div className="mt-10 flex justify-between border-t border-lila py-12">
            <a href="" className="flex items-center">
              <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
              <span
                className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous
                Post</span>
            </a>
            <a href="" className="flex items-center">
              <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next
                Post</span>
              <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
            </a>
          </div>
          <div
            classNameName="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
            <div classNameName="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
             <img src="/assets/img/blog-author.png" className="rounded-full shadow" alt="author image" />
            </div>
            <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                CODEWITHABDUR
              </h3>
              <p
                className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                If you read this then it means you must intrested in my site if you want to make your site please
                Contact me through Contact form given in homepage.

              </p>
              <div className="flex items-center justify-center pt-5 md:justify-start">
                <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank" rel="noreferrer">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://twitter.com/CodeWithAbdur" target="_blank" rel="noreferrer" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.youtube.com/c/lucygamer01" target="_blank" rel="noreferrer" className="pl-4">
                  <i className="bx bxl-youtube text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" rel="noreferrer" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/codewithabdur/" target="_blank" rel="noreferrer" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, CODEWITHABDUR.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://twitter.com/CodeWithAbdur" target="_blank" rel="noreferrer" className="pl-4">
            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.youtube.com/c/lucygamer01" target="_blank" rel="noreferrer" className="pl-4">
            <i className="bx bxl-youtube text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" rel="noreferrer" className="pl-4">
            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.instagram.com/codewithabdur/" target="_blank" rel="noreferrer" className="pl-4">
            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
          </a>
        </div>
      </div>
    </div>

  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    "projectId": "myjzyy1q",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  }
}