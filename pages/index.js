import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
Olá, me chamo Tony! Tenho uma combinação sólida de visão sistêmica, 
pensamento estratégico e habilidades técnicas que me permitem liderar 
equipes em desenvolvimento de software. Com foco em organização, clareza de 
requisitos e escalabilidade, priorizando a entrega de 
soluções eficientes e sustentáveis. Minha experiência transita entre 
planejamento, execução e integração de tecnologias.
</p><br/>`;

const missao = `<p>
Transformar ideias em soluções concretas, convertendo necessidades em requisitos claros, 
e requisitos em projetos bem estruturados. Busco aplicar tecnologias emergentes e promover 
melhorias contínuas nos processos, sempre com o compromisso de colaborar de forma significativa 
e integrada, fazendo parte do todo e contribuindo para resultados reais e duradouros.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-2-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile">
          <div
            className="slide"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg)", filter: "grayscale(60%)" }}
          />
          <div className="image">
            <img src="images/perfil.png" alt="" />
          </div>
          <div className="title">Tony Galvão</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tonygalvao/">
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/5561991573976">
              <span className="fa fa-whatsapp" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/tonygalvao">
              <span className="fa fa-github" />
            </a>
            {/* <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a> */}
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Entre em Contato</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          {/* <Pricing /> */}
          
          {/* <Clients />
          <Quote /> */}
          <div className="content about">
              {/* title */}
              <div className="title">Objetivo
              </div>
              {/* content */}
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div
                    className="text-box"
                    dangerouslySetInnerHTML={{ __html: missao }}
                  ></div>
                </div>
                <div className="clear" />
              </div>
            </div>
            <FunFact />
        </About>
        {/* <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume> */}
        <Work>
          <RecentWorks user="software_engineer"/>
        </Work>
        {/* <Blog>
          <BlogSection />
        </Blog> */}
        {/* <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact> */}
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
