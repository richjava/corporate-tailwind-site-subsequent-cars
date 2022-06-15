import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";
import { setupCrumbs } from "./../.theme";

function ThemeApp({ Component, pageProps }) {
  const router = useRouter();
  let [isSetUpCrumbs, setIsSetupCrumbs] = useState(false);

  useEffect(() => {
    // Display crumb (label with template name) when template is hovered over
    if(!isSetUpCrumbs){
      
      setIsSetupCrumbs(true);
    }
  }, [router]);

  return <Component {...pageProps} />
}

export default ThemeApp;
