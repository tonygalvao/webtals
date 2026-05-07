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
    heading: "O Desafio Inicial",
    content: (
      <>
        O projeto originou-se como uma iniciativa de inovação acadêmica focada
        no planejamento, <em>debriefing</em> e avaliação de simulações práticas
        na área da saúde. A arquitetura legada era baseada em{" "}
        <T>AWS</T> com backend em <T>Strapi</T> (<T>Node.js</T>) e frontend{" "}
        <T>React</T>. A missão foi liderar a evolução dessa infraestrutura para
        suportar funcionalidades avançadas de inteligência artificial e
        streaming em larga escala.
      </>
    ),
  },
  {
    heading: "Atuação Estratégica e Liderança",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Arquitetura e Padronização —</strong> Determinei os padrões
          de codificação (<T>Design Patterns</T>) e a arquitetura de software para sustentar o
          crescimento do produto. Responsável direto pelo desenvolvimento das
          features de maior complexidade técnica, garantindo a integridade do
          sistema.
          <hr className="separator" />
        </li>
        <li>
          <strong>Gestão Ágil e Processos —</strong> Implementei e coordenei o
          framework <T>Scrum</T>, facilitando rituais, removendo impedimentos e
          garantindo a aderência cronológica das entregas. Responsável pela elaboração das{" "}
          <T>Release Notes</T> de cada versão, assegurando comunicação clara
          das funcionalidades para os stakeholders.
          <hr className="separator" />
        </li>
        <li>
          <strong>Desenvolvimento de Talentos —</strong> Estabeleci uma cultura
          de excelência através de revisões de código (<T>Code Review</T>)
          rigorosas e ciclos de <T>feedback 1:1</T>, focando no crescimento
          técnico e profissional dos membros do time.
        </li>
      </ul>      
    ),
  },
  {
    heading: "Evolução e Modernização Tecnológica",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Refatoração da Stack —</strong> Migração do core para{" "}
          <T>Laravel</T> (<T>PHP</T>) no backend e <T>ReactJS</T> com{" "}
          <T>Material UI</T> no frontend, com <T>REST APIs</T> e autenticação
          via <T>JWT</T>.
          <hr className="separator" />
        </li>
        <li>
          <strong>Migração de Cloud —</strong> Transição do ambiente <T>AWS</T>{" "}
          para o <T>Google Cloud Platform</T> (<T>GCP</T>), otimizando
          integração com serviços de dados e escalabilidade.
          <hr className="separator" />
        </li>
        <li>
          <strong>Engenharia de Streaming —</strong> Implementação de sistema
          proprietário de <T>Streaming</T> e <T>Cloud Recording</T>, essencial
          para sessões de debriefing em tempo real.
          <hr className="separator" />
        </li>
        <li>
          <strong>Cultura DevOps —</strong> Estruturação de pipelines de{" "}
          <T>CI/CD</T> com <T>Azure DevOps</T> em conjunto com o <T>GCP</T>,
          garantindo deploys contínuos e alta disponibilidade via{" "}
          <T>Docker</T>.
        </li>
      </ul>
    ),
  },
  {
    heading: "Marcos e Resultados Alcançados",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Maturidade TRL 7 —</strong> Elevamos a plataforma ao nível de
          prontidão tecnológica 7 (<T>TRL 7</T>) (protótipo demonstrado em ambiente
          operacional).
          <hr className="separator" />
        </li>
        <li>
          <strong>Ecossistema Digital —</strong> Lançamento do site{" "}
          <a
            href="https://hiplade.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            hiplade.com.br
          </a>{" "}
          e do ambiente de demonstração{" "}
          <a
            href="https://vitrine.hiplade.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            vitrine.hiplade.com.br
          </a>
          .
          <hr className="separator" />
        </li>
        <li>
          <strong>Spin-off SheAI —</strong> As funcionalidades de{" "}
          <T>Inteligência Artificial</T> para identificação facial, linguagem
          corporal e transcrição de áudio evoluíram para o produto{" "}
          <strong>SheAI</strong>, do qual me tornei o idealizador e responsável técnico.
          <hr className="separator" />
        </li>
        <li>
          <strong>Módulos Entregues —</strong> Agendamento de simulações,
          marcações em tempo real (<em>snapshots</em>) e feedback avaliativo
          personalizado.
        </li>
      </ul>
    ),
  },
  {
    heading: "Stack Tecnológica Atual",
    content: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", lineHeight: "2" }}>
        {[
          "Laravel",
          "PHP",
          "MySQL",
          "ReactJS",
          "TypeScript",
          "Material UI",
          "Google Cloud Platform",
          "Azure DevOps",
          "Docker",
          "Streaming de Vídeo",
          "Cloud Recording",
          "Integrações com IA",
          "JWT",
          "REST APIs",
          "CI/CD",
        ].map((tech) => (
          <T key={tech}>{tech}</T>
        ))}
      </div>
    ),
  },
];

const WorksSubComponentHiplade = () => {
  return (
    <Fragment>
      <div className="content about">
        {/* cabeçalho */}
        <div className="title">
          Hiplade
          <br />
          <small className="first-word">
            Hipocampus Platform for Debriefing and Evaluation
          </small>
        </div>

        {/* meta + resumo */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Cargo</strong> Tech Lead
                </li>
                <li>
                  <strong>Setor</strong> EdTech &amp; HealthTech
                </li>
                <li>
                  <strong>Duração</strong> 3 anos
                </li>
                <li>
                  <strong>Repositório</strong> Privado
                </li>
                <li>
                  <strong>Site</strong>{" "}
                  <a
                    href="https://hiplade.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hiplade.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>          
          <div className="clear" />
        </div>

        <div className="row">        
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <br />
            <div className="title">
                Jornada
            </div>
            <div className="text-box">
              <p>
                Assumi o papel de <strong>Tech Lead</strong> do projeto Hiplade
                em um momento estratégico de transição, transformando uma{" "}
                <em>Prova de Conceito</em> (PoC) acadêmica em uma plataforma
                robusta, escalável e pronta para o mercado global — combinando
                simulação clínica, avaliação por vídeo e inteligência
                artificial.
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

export default WorksSubComponentHiplade;
