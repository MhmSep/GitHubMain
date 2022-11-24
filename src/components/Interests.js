import React from "react";
import Interest from "./Interest";

//Image
import wallpaper from "../assets/wallpaper.jpg";
import shoppingCart from "../assets/ShoppingCart.png"
import loginPage from "../assets/LoginPage.png"
import crypto from "../assets/CryptoProject.png"
import loginForm from "../assets/LoginForm.png"
import gitHubMain from "../assets/GitHubmain.png";

const Interests = () => {
  const interests = [
    {
      title: "MhmSep/ShoppingCart",
      image: shoppingCart,
      description: "Html,Css,JavaScript,React",
      link: "https://shoppingcart-omega.vercel.app/products",
    },
    {
      title: "MhmSep/LoginPage",
      description: "Html,Css,JavaScript,React",
      image: loginPage,
      link: "https://login-page-mhmsep.vercel.app/",
    },
    {
      title: "MhmSep/CryptoProject",
      image: crypto,
      description: "Html,Css,JavaScript,React",
      link: "https://cryptoproject-kappa.vercel.app/",
    },
    {
      title: "MhmSep/LoginForm",
      image: loginForm,
      description: "Html,Css,JavaScript,React",
      link: "https://loginform-rho.vercel.app/signup",
    },
    {
      title: "MhmSep/Githubmain",
      image: gitHubMain,
      description: "Html,Tailwind,JavaScript,React",
      link: "",
    },
  ];
  return (
    <div className="space-y-8 mb-6 w-full sm:h-[25rem]">
      {interests.map((interest) => (
        <Interest
          title={interest.title}
          image={interest.image}
          description={interest.description}
          link={interest.link}
          key={interest.title}
        />
      ))}
    </div>
  );
};

export default Interests;
