import { Fragment } from "react";

const T = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "4px",
      padding: "0 6px",
      fontSize: "0.82em",
      fontWeight: "600",
      letterSpacing: "0.04em",
      color: "var(--theme-color, #f9f871)",
      verticalAlign: "middle",
      lineHeight: "1.7",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

const sections = [
  {
    heading: "Jornada de Implementação: Do Local à Nuvem",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Fase de Estabilização (on-premise) —</strong> Implementação do
          estágio <T>on-premise</T> em máquina física com <T>Linux</T> com distribuição <T>Ubuntu</T> como
          "heartbeat" do desenvolvimento. Sempre que um{" "}
          <T>Pull Request</T> é aceito em alguma <T>branch</T>, o ambiente{" "}
          específico reflete o código mais recente, reduzindo o atrito de
          integração e permitindo validações rápidas.
          <hr className="separator" />
        </li>
        <li>
          <strong>Fase de Expansão (Controle de Ambientes) —</strong> Criação de
          pipelines <T>develop</T>, <T>beta</T> e <T>homolog</T>, estabelecendo ambientes de homologação
          isolados para que diferentes stakeholders testem funcionalidades sem
          interferir na linha principal de produção.
          <hr className="separator" />
        </li>
        <li>
          <strong>Fase de Maturidade e Escala (GCP) —</strong> Transição para o{" "}
          <T>Google Cloud Platform</T> com <T>Compute Engine</T> e{" "}
          <T>Cloud SQL</T>, marcando a entrada em produção com foco em <T>alta disponibilidade</T>,
          <T>resiliência</T> e <T>persistência profissional de dados</T> em infraestrutura
          gerenciada e elástica.
        </li>
      </ul>
    ),
  },
  {
    heading: "Padrões e Técnicas Identificadas",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>CD Estratificado (Entrega Gerenciada) —</strong> Separação clara entre{" "}
          <T>Frontend</T> e <T>Backend</T> (ex:{" "}
          <T>INSTANCIA-backend-x.x</T> e <T>INSTANCIA-frontend-x.x</T>),
          permitindo deploys independentes e correções rápidas por camada.
          <hr className="separator" />
        </li>
        <li>
          <strong>Triggers Baseados em Eventos —</strong> Uso de{" "}
          <T>Individual CI</T> para branches de <T>release</T> (ex:{" "}
          <em>release/x.x</em>), garantindo que cada commit seja validado
          automaticamente e mantendo a integridade do build.
          <hr className="separator" />
        </li>
        <li>
          <strong>Ambientes Híbridos —</strong> Desenvolvimento em
          infraestrutura <T>On-premise</T> e produção na{" "}
          <T>Google Cloud Platform</T> (GCP): escolha estratégica para otimização de recursos e
          latência de desenvolvimento.
        </li>
        {/* <li>
          <strong>Externalized Configuration —</strong> Variáveis de ambiente
          injetadas durante o processo de build (ex:{" "}
          <T>REACT_APP_ENABLE_WEBSOCKETS</T>), desacoplando o código da
          infraestrutura e garantindo configuração segura por ambiente.
        </li> */}
      </ul>
    ),
  },
  {
    heading: "Stack de Deploy",
    content: (
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", lineHeight: "2" }}
      >
        {[
          "Azure Devops",
          "Python",
          "YAML",
          "Linux Ubuntu",
          "Google Cloud Platform",
          "Laravel",
          "ReactJS",
          "CI/CD",
          "Shell Script",          
          "Docker",
          "Nginx",
        ].map((tech) => (
          <T key={tech}>{tech}</T>
        ))}
      </div>
    ),
  },
];

const WorksSubComponentDevOps = () => {
  return (
    <Fragment>
      <div className="content about">
        {/* cabeçalho */}
        <div className="title">
          DevOps
          <br />
          <small className="first-word">
            CI/CD — Do Ambiente Local à Nuvem
          </small>
        </div>

        {/* meta */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            {/* <img src="/images/devops-01.png" alt="DevOps" style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} /> */}
            <div className="info-list">
              <ul>
                <li>
                  <strong>Cargo</strong> Tech Lead
                </li>
                <li>
                  <strong>Projetos</strong> Hiplade &amp; SheAI
                </li>
                <li>
                  <strong>Orquestração</strong> Azure DevOps
                </li>
                <li>
                  <strong>Produção</strong> Google Cloud Platform
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>

        {/* resumo */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <br />
            <div className="title">Jornada</div>
            <div className="text-box">
              <p>
                A implementação da esteira de{" "}
                <strong>
                  <T>CI</T>/<T>CD</T>
                </strong>{" "}
                para os projetos Hiplade e SheAI revela uma jornada de
                amadurecimento técnico: de um modelo de desenvolvimento local
                para uma arquitetura de nuvem escalável. Como{" "}
                <strong>Tech Lead</strong>, a estratégia foi
                de equilibrar custos operacionais com alta disponibilidade.
              </p>
            </div>
          </div>
        </div>

        {/* seções de conteúdo */}
        {sections.map(({ heading, content }) => (
          <div className="row" key={heading} style={{ marginTop: "24px" }}>
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="text-box">
                <h5
                  style={{
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: "0.78em",
                    opacity: 0.6,
                  }}
                >
                  {heading}
                </h5>
                <div>{content}</div>
              </div>
            </div>
            <div className="clear" />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default WorksSubComponentDevOps;
