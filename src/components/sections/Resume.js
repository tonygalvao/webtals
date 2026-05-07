import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2013 - Present</div>
                <div className="name">Art Director</div>
                <div className="company">Facebook Inc.</div>
                <p>
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-end Developer</div>
                <div className="company">Google Inc.</div>
                <p>
                  Monitored technical aspects of the front-end delivery for
                  several projects.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer</div>
                <div className="company">Abc Inc.</div>
                <p>Optimize website performance using latest technology.</p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2006 - 2008</div>
                <div className="name">Art University</div>
                <div className="company">New York</div>
                <p>
                  {`Bachelor's`} Degree in Computer Science ABC Technical
                  Institute, Jefferson, Missouri
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2005 - 2006</div>
                <div className="name">Programming Course</div>
                <div className="company">Paris</div>
                <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
              </div>
              <div className="resume-item">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course</div>
                <div className="company">London</div>
                <p>
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

export const ResumeSectionFitness = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">
        <div className="first-letter">Resume</div>
      </div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Fitness Trainer</div>
              <div className="company">Gym Club</div>
              <p>
                Inspired clients to push their hardest and do their very best.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Cardio Trainer</div>
              <div className="company">High-Intensity Complex</div>
              <p>
                Dynamic sculpting exercises for the perfect balance of cardio
                and strength training.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">Pace University</div>
              <div className="company">New York</div>
              <p>
                Pace University is a private university with its main campus in
                New York City.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Fitness Course</div>
              <div className="company">London</div>
              <p>Personal trainer and fitness instructor courses in London.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionLawyer = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Law Director</div>
              <div className="company">Facebook Inc.</div>
              <p>
                Head of the Law Department which represents and advises the City
                in all civil.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Lawyer Leader</div>
              <div className="company">Google Inc.</div>
              <p>
                Was part of a client focused organisation that makes a
                difference.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2009 - 2010</div>
              <div className="name">Junior Lawyer</div>
              <div className="company">ABC Inc.</div>
              <p>
                A fast-growing international pharmaceutical services company.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">Law University</div>
              <div className="company">London</div>
              <p>
                {`Gray's`} Inn, 4 {`Gray's`} Inn Place, Warwick Ct
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Law Schools</div>
              <div className="company">London</div>
              <p>
                The Law School of English has over 50 years experience teaching
                general.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2004 - 2005</div>
              <div className="name">London School</div>
              <div className="company">London</div>
              <p>
                The London School of English has over 100 years experience
                teaching general.
              </p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionWritter = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Writer Director</div>
              <div className="company">DBBooks</div>
              <p>
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Team Leader</div>
              <div className="company">ABC Inc.</div>
              <p>
                A team leader is responsible for guiding a group of employees as
                they complete a project.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2009 - 2010</div>
              <div className="name">Business Writer</div>
              <div className="company">Writer Corporation.</div>
              <p>Corporate writing is writing for business purposes.</p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">New York University</div>
              <div className="company">New York</div>
              <p>
                New York University offers 2 Creative Writing Degree programs.
                {`It's`} a large private university in a large city.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Writing Course</div>
              <div className="company">London</div>
              <p>
                Creative writing short courses is taught at City, University of
                London. Develop writing skills with professional and published
                authors.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2004 - 2005</div>
              <div className="name">New York School</div>
              <div className="company">Brooklyn, NY, United States</div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const ResumeSectionMusician = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2018 - Present</div>
              <div className="name">Schenectady Symphony Orchestra</div>
              <div className="company">New York</div>
              <p>Third chair, first violin section.</p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2016 - 2018</div>
              <div className="name">Utica Symphony Orchestra</div>
              <div className="company">New York</div>
              <p>
                First violin section; orchestra is currently without contract.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2014 - 2016</div>
              <div className="name">Frequent freelance</div>
              <div className="company">New York</div>
              <p>
                Work in: New York Capital Region for Cohoes Music Hall, Hubbard
                Hall Opera Theater.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2014</div>
              <div className="name">Peabody Institute</div>
              <div className="company">Baltimore</div>
              <p>
                M.M. in Performance, Peabody Institute {`–`} Baltimore, MD 2015.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2008 - 2011</div>
              <div className="name">American University</div>
              <div className="company">Washington</div>
              <p>
                B.A. in Music, American University {`–`} Washington, D.C. 2012.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2000 - 2008</div>
              <div className="name">New York School of Music</div>
              <div className="company">New York</div>
              <p>Great school! The teachers really care about the students.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export const ResumeSectionClassic = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Resume</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="ion ion-briefcase" />
            </div>
            <div className="name">Experience</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2013 - Present</div>
              <div className="name">Art Director</div>
              <div className="company">Facebook Inc.</div>
              <p>
                Collaborate with creative and development teams on the execution
                of ideas.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2011 - 2012</div>
              <div className="name">Front-end Developer</div>
              <div className="company">Google Inc.</div>
              <p>
                Monitored technical aspects of the front-end delivery for
                several projects.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2009 - 2010</div>
              <div className="name">Senior Developer</div>
              <div className="company">Abc Inc.</div>
              <p>Optimize website performance using latest technology.</p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="ion ion-university" />
            </div>
            <div className="name">Education</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">2006 - 2008</div>
              <div className="name">Art University</div>
              <div className="company">New York</div>
              <p>
                {`Bachelor's`} Degree in Computer Science ABC Technical
                Institute, Jefferson, Missouri
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2005 - 2006</div>
              <div className="name">Programming Course</div>
              <div className="company">Paris</div>
              <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
            </div>
            <div className="resume-item">
              <div className="date">2004 - 2005</div>
              <div className="name">Web Design Course</div>
              <div className="company">London</div>
              <p>
                Converted Photoshop layouts to web pages using HTML, CSS, and
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export const ResumeSectionTony = () => {
  return (
    <div className="content resume">
      {/* title */}
      <div className="title">Currículo</div>
      {/* content */}
      <div className="row">
        {/* experience */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-briefcase" />
            </div>
            <div className="name">Experiência</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h active">
              <div className="date">2024</div>
              <div className="name">Desenvolvedor de Soluções IA</div>
              <div className="company">Cast · Remoto</div>
              <p>
                Desenvolvimento de soluções de inteligência artificial, 
                incluindo integração de modelos de linguagem, automação de processos e
                implementação de agentes inteligentes. Integração de ferramentas IA com 
                sistemas existentes.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2022 - 2025</div>
              <div className="name">Coordenador de Tecnologia</div>
              <div className="company">Hipocampus Edtech · Remoto</div>
              <p>
                Liderança técnica de equipes de desenvolvimento, definição de
                arquitetura de soluções e alinhamento entre tecnologia e
                objetivos pedagógicos da plataforma.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2021 - 2022</div>
              <div className="name">Desenvolvedor Full Stack</div>
              <div className="company">Basis Tecnologia · Remoto</div>
              <p>
                Desenvolvimento de aplicações web com Laravel no back-end e
                ReactJS no front-end, com foco em integrações e entrega de
                features em ambiente ágil.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2018 - 2022</div>
              <div className="name">Consultor de Tecnologia Sênior</div>
              <div className="company">Midnal · Híbrido</div>
              <p>
                Consultoria em projetos de transformação digital, levantamento
                de requisitos, definição de soluções técnicas e suporte à
                tomada de decisão estratégica em TI.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">2016 - 2018</div>
              <div className="name">Desenvolvedor PHP</div>
              <div className="company">N2OTI · Brasília</div>
              <p>
                Desenvolvimento e manutenção de sistemas web em PHP, atuando em
                todo o ciclo de vida do software, do levantamento de requisitos
                à entrega em produção.
              </p>
            </div>
            <div className="resume-item">
              <div className="date">2012 - 2016</div>
              <div className="name">Analista</div>
              <div className="company">Central IT - Governança Corporativa</div>
              <p>
                Análise de processos, suporte técnico e desenvolvimento de
                soluções de governança corporativa para clientes dos setores
                público e privado.
              </p>
            </div>
          </div>
        </div>
        {/* education */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="resume-title border-line-h">
            <div className="icon">
              <i className="fa fa-certificate" />
            </div>
            <div className="name">Aprimoramento</div>
          </div>
          <div className="resume-items">
            <div className="resume-item border-line-h">
              <div className="date">Out. 2024</div>
              <div className="name">Domine LLMs com LangChain</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Construção de aplicações com modelos de linguagem de grande
                escala utilizando o framework LangChain.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Jun. 2024</div>
              <div className="name">Machine Learning com Python</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Fundamentos e aplicações práticas de Machine Learning com
                Python, incluindo algoritmos supervisionados e não supervisionados.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Set. 2022</div>
              <div className="name">Azure DevOps - CI/CD</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Integração e entrega contínua com Azure DevOps, pipelines
                automatizados, controle de versão e gestão de releases.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Abr. 2022</div>
              <div className="name">Deep Learning com Python</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Redes neurais profundas com TensorFlow e Keras, aplicadas a
                problemas reais de classificação e previsão.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Jan. 2021</div>
              <div className="name">Livewire na Prática</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Desenvolvimento de interfaces dinâmicas com Livewire integrado
                ao ecossistema Laravel.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Ago. 2019</div>
              <div className="name">Laravel Backpack</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Criação de painéis administrativos completos com o pacote
                Laravel Backpack para aplicações empresariais.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Jul. 2019</div>
              <div className="name">Laravel em Produção - Deploy</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Boas práticas de deploy de aplicações Laravel em servidores de
                produção, incluindo configuração de ambiente e CI/CD.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Nov. 2018</div>
              <div className="name">Laravel com ACL</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Implementação de controle de acesso em aplicações Laravel, com
                gerenciamento de papéis e permissões de usuários.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Nov. 2018</div>
              <div className="name">Laravel 5.8 Completo</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Curso completo do framework Laravel, cobrindo desde fundamentos
                até recursos avançados do ecossistema PHP.
              </p>
            </div>
            <div className="resume-item border-line-h">
              <div className="date">Mai. 2018</div>
              <div className="name">Laravel com Vue JS</div>
              <div className="company">Curso de Curta Duração</div>
              <p>
                Integração de Laravel com Vue.js para construção de SPAs e
                interfaces reativas em projetos full stack.
              </p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
