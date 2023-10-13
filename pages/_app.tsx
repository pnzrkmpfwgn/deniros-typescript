import '../styles/globals.css'
import Layout from '../components/layout/layout';
import LanguageProvider from '../components/Menu/LanguageContext';

interface Props{
  Component:any,
  pageProps:any,
  router:any
}

const MyApp:React.FC<Props> =({Component,pageProps,router})=>{
  return (
    <>
      <LanguageProvider>
         <Layout>
               <Component {...pageProps} key={router.route} />
         </Layout>
      </LanguageProvider>
    </>
  );
}


export default MyApp
