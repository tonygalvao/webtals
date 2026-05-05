import { Fragment } from "react";
const bio_ = ` <p>
<strong>Ola!.</strong>
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">Sobre</span> Mim
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Idade</strong> 41
                </li>
                <li>
                  <strong>Residência</strong> Brasil
                </li>
                <li>
                  <strong>Freelance</strong> Disponível
                </li>
                <li>
                  <strong>Endereço</strong> Goiás, Valparaíso
                </li>
                <li>
                  <strong>Formação</strong> Análise e Desenvolvimento de Sistemas
                </li>                
                <li>
                  <strong>Certificações</strong> ITIL OSA, ISO 27001, Scrum Foundation
                </li>
                <li>
                  <strong>Especialização</strong> Desenvolvimento de Aplicações de Inteligência Artificial Generativa 
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">Sobre Mim</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
              I am Ryan Adlard, web designer from USA, California. I have rich
              experience in web site design and building and customization, also
              I am good at wordpress. I love to talk with you about our unique.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 24
              </li>
              <li>
                <strong>Residence . . . . .</strong> USA
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
              <li>
                <strong>Address . . . . .</strong> California, USA
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
