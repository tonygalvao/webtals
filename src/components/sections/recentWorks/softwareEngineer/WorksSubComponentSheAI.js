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
    heading: "Concepção e Arquitetura do Zero",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Definição da Stack —</strong> Selecionei o <T>FastAPI</T> (
          <T>Python</T>) pela alta performance em <T>REST APIs</T>, utilizando{" "}
          <T>Pydantic</T> para validação e <T>MongoDB</T> para o armazenamento
          <T>multi-tenant</T> de resultados.
        </li>
        <li>
          <strong>Isolamento de Dependências —</strong> Desenhei um sistema de
          processamento via subprocessos em ambientes virtuais (<T>venvs</T>)
          isolados por módulo, permitindo que tecnologias como <T>TensorFlow</T>{" "}
          e <T>PyTorch</T> coexistam sem conflitos de dependências.
        </li>
        <li>
          <strong>Scaffolding e Produtividade —</strong> Idealizei o{" "}
          <T>SheDS (CLI)</T>, ferramenta de linha de comando inspirada no{" "}
          <T>Artisan</T> do <T>Laravel</T>, que automatiza a criação de módulos
          de IA garantindo aderência aos padrões{" "}
          <T>BaseController</T>, <T>BaseService</T> e <T>BaseRepository</T>.
        </li>
      </ul>
    ),
  },
  {
    heading: "Módulos de Inteligência Artificial Implementados",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>FEX (Facial Expression) —</strong> Análise frame a frame de
          emoções em vídeos utilizando <T>OpenCV</T> e redes neurais (
          <T>CNN</T>).
        </li>
        <li>
          <strong>STT (Speech-to-Text) —</strong> Transcrição avançada com
          diarização (identificação de falantes) via <T>OpenAI Whisper</T> e{" "}
          <T>PyAnnote</T>, incluindo análise de sentimentos e nuvem de palavras.
        </li>
        <li>
          <strong>GenHI (Generative Human Intelligence) —</strong> Orquestração
          de <T>LLMs</T> via <T>LangChain</T>, suportando desde modelos locais
          via <T>Ollama</T> até APIs externas.
          .
        </li>
      </ul>
    ),
  },
  {
    heading: "Governança e Gestão Técnica",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Gestão de Liderança —</strong> Gerenciei diretamente o líder
          técnico de codificação, orientando decisões de implementação e
          assegurando aderência aos padrões{" "}
          <T>Repository Pattern</T> e <T>Abstract Base Classes</T>.
        </li>
        <li>
          <strong>Infraestrutura &amp; DevOps —</strong> Defini o ambiente de
          execução em <T>Docker</T> com suporte a GPU <T>NVIDIA</T> e projetei
          o fluxo de <T>CI/CD</T> no <T>Azure Pipelines</T>.
        </li>
        <li>
          <strong>Integração por Callback —</strong> Estabeleci um padrão de
          comunicação assíncrona onde a SheAI processa os dados e devolve os
          resultados via <T>callback POST</T> para o ecossistema Hiplade,
          garantindo escalabilidade.
        </li>
        <li>
          <strong>Scrum e Estratégia —</strong> Atuei na priorização do{" "}
          <T>backlog</T> e na definição do <T>roadmap</T> tecnológico, alinhando
          a evolução da IA com as necessidades de negócio da HealthTech.
        </li>
      </ul>
    ),
  },
  {
    heading: "Stack Tecnológica",
    content: (
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", lineHeight: "2" }}
      >
        {[
          "Python",
          "FastAPI",
          "Gunicorn",
          "TensorFlow",
          "Keras",
          "OpenAI Whisper",
          "LangChain",
          "Ollama",
          "OpenCV",
          "PyAnnote",
          "MongoDB",
          "Redis",
          "Docker",
          "Nginx",
          "Azure Pipelines",
          "CI/CD",
        ].map((tech) => (
          <T key={tech}>{tech}</T>
        ))}
      </div>
    ),
  },
];

const WorksSubComponentSheAI = () => {
  return (
    <Fragment>
      <div className="content about">
        {/* cabeçalho */}
        <div className="title">
          SheAI
          <br />
          <small className="first-word">
            Smart Hiplade Environment of Artificial Intelligence
          </small>
        </div>

        {/* meta + resumo */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Cargo</strong> Idealizador &amp; Arquiteto Principal
                </li>
                <li>
                  <strong>Setor</strong> HealthTech &amp; AI
                </li>
                <li>
                  <strong>Duração</strong> 2 anos
                </li>
                <li>
                  <strong>Repositório</strong> Privado
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>

        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <br />
            <div className="title">Jornada</div>
            <div className="text-box">
              <p>
                O projeto SheAI nasceu como um <strong>spin-off estratégico</strong>{" "}
                da plataforma Hiplade, evoluindo das fases avançadas de inovação
                para tornar-se uma plataforma independente de APIs
                de <strong>Inteligência Artificial</strong>. Atuei como
                idealizador e arquiteto principal, gerenciando o líder técnico
                responsável pela execução e garantindo alta performance e
                modularidade.
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

export default WorksSubComponentSheAI;
