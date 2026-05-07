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
    heading: "Tecnologias e Camadas da Aplicação",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Orquestração de Fluxo —</strong> <T>n8n</T> atua como o
          "cérebro" da automação, conectando todos os nós e gerenciando a lógica
          de decisão.
          <hr className="separator" />
        </li>
        <li>
          <strong>Interface de Mensageria —</strong> <T>Evolution API</T> atua
          como a ponte de comunicação, permitindo recebimento de{" "}
          <T>webhooks</T> e envio de mensagens de texto e mídia via{" "}
          <T>WhatsApp</T>.
          <hr className="separator" />
        </li>
        <li>
          <strong>Modelos de Inteligência Artificial —</strong>{" "}
          <T>Google Gemini</T> como motor principal de
          raciocínio; <T>OpenAI GPT</T> para a tarefa de{" "}
          <em>Expert em Memória</em>; <T>Groq Whisper</T> para
          transcrição de áudio ultrarrápida (<T>Speech-to-Text</T>).
          <hr className="separator" />
        </li>
        <li>
          <strong>Persistência e Memória —</strong> <T>Redis</T> para memória
          de curto prazo (sessões) e sistema de trava anti-duplicatas;{" "}
          <T>MySQL</T> para memória de longo prazo com histórico estruturado por
          usuário.
        </li>
      </ul>
    ),
  },
  {
    heading: "Técnicas Aplicadas no Fluxo",
    content: (
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "2" }}>
        <li>
          <strong>Processamento Multimodal —</strong> Identificação
          se a entrada é texto (<em>conversation</em>) ou áudio (
          <em>audioMessage</em>). Atuação identica para cada tipo de mensagem
          evitando degradação da comunicação entre usuário e agente.
          <hr className="separator" />
        </li>
        <li>
          <strong>Buffer de Mensagens —</strong> <T>Redis</T> agrupa entradas
          consecutivas e atua como buffer, garantindo que o
          agente responda ao contexto completo em vez de fragmentos.
          <hr className="separator" />
        </li>
        <li>
          <strong>RAG e Memória de Longo Prazo —</strong> O agente dispõe de
          uma ferramenta de <em>Memória Permanente</em>: ao identificar
          informações cruciais, aciona um sub-fluxo que consulta o{" "}
          <T>MySQL</T>, utiliza uma <T>LLM</T> para atualizar o resumo do
          cliente e salva a nova versão.
          <hr className="separator" />
        </li>
        <li>
          <strong>MCP (Model Context Protocol) —</strong> Implementação de{" "}
          <T>MCP Client</T> e <T>MCP Server Trigger</T> para execução de
          ferramentas externas padronizadas, como geração de QR Codes e criação
          de documentos dinâmicos baseados em templates.
          <hr className="separator" />
        </li>
        <li>
          <strong>Sistema de Bloqueio (Anti-Loop) —</strong> Lógica de{" "}
          <T>Chave Block</T> no <T>Redis</T> evita que mensagens enviadas pelo
          próprio agente ou respostas automáticas entrem em loop infinito de
          processamento.
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
          "n8n",
          "Evolution API",
          "WhatsApp",
          "Google Gemini",
          "OpenAI GPT-4o",
          "Groq Whisper",
          "Speech-to-Text",
          "Redis",
          "MySQL",
          "LangChain",
          "MCP",
          "webhooks",
          "REST APIs",
          "JavaScript",
          "Python",
        ].map((tech) => (
          <T key={tech}>{tech}</T>
        ))}
      </div>
    ),
  },
];

const WorksSubComponentWaiflow = () => {
  return (
    <Fragment>
      <div className="content about">
        {/* cabeçalho */}
        <div className="title">
          Waiflow
          <br />
          <small className="first-word">
            Agente de Atendimento Autônomo via WhatsApp
          </small>
        </div>

        {/* meta */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Cargo</strong> Arquiteto de Soluções de IA
                </li>
                <li>
                  <strong>Setor</strong> Automação &amp; IA Conversacional
                </li>
                <li>
                  <strong>Repositório</strong> Privado
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
                O Waiflow representa uma jornada de engenharia completa, onde a
                automação de baixo nível se encontra com a{" "}
                <strong>inteligência artificial generativa</strong> para criar
                um agente de atendimento autônomo e altamente contextualizado.
                A atuação abrange desde o design da experiência do usuário (
                <T>UX</T>) no <T>WhatsApp</T> até a gestão de infraestrutura de
                dados e orquestração de <T>LLMs</T>.
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

export default WorksSubComponentWaiflow;
