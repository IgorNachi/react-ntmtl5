import React, { useState } from 'react';
import './style.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('pagina');

  const selectPage = (page) => {
    setSelectedPage(page);
  };

  const scheduleList = [
    {
      day: 'Segunda-feira',
      time: '18:00 - 19:00',
      modality: 'Zumba',
      professor: 'Joana',
    },
    {
      day: 'Terça-feira',
      time: '09:00 - 10:00',
      modality: 'Musculação',
      professor: 'Carlos',
    },
    {
      day: 'Quarta-feira',
      time: '17:30 - 18:30',
      modality: 'Yoga',
      professor: 'Ana',
    },
    {
      day: 'Quinta-feira',
      time: '19:00 - 20:00',
      modality: 'Pilates',
      professor: 'Maria',
    },
    {
      day: 'Sexta-feira',
      time: '20:30 - 21:30',
      modality: 'Spinning',
      professor: 'Pedro',
    },
  ];

  return (
    <div>
      <div className="header">
        <h1>Academia de Sistemas</h1>
        <p>Venha se tornar um Ninja também</p>
      </div>

      <div className="topnav">
        <div className="nav-item">
          <button
            onClick={() => selectPage('agenda')}
            className={`button ${selectedPage === 'agenda' ? 'active' : ''}`}
          >
            Agenda Semanal de Aulas
          </button>
        </div>
        <div className="nav-item">
          <button
            onClick={() => selectPage('professores')}
            className={`button ${
              selectedPage === 'professores' ? 'active' : ''
            }`}
          >
            Nossos Profissionais
          </button>
        </div>
        <div className="nav-item">
          <button
            onClick={() => selectPage('metodos')}
            className={`button ${selectedPage === 'metodos' ? 'active' : ''}`}
          >
            Metodologia
          </button>
        </div>
        <div className="nav-item">
          <button
            onClick={() => selectPage('redes-sociais')}
            className={`button ${
              selectedPage === 'redes-sociais' ? 'active' : ''
            }`}
          >
            Redes Sociais
          </button>
        </div>
        <div className="nav-item" style={{ float: 'right' }}>
          <button
            onClick={() => selectPage('pagina')}
            className={`button ${selectedPage === 'pagina' ? 'active' : ''}`}
          >
            Voltar ao início
          </button>
        </div>
      </div>

      <div className="content">
        {selectedPage === 'agenda' && (
          <div>
            <h2>Horários de Aulas</h2>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário</th>
                  <th>Modalidade</th>
                  <th>Professor</th>
                </tr>
              </thead>
              <tbody>
                {scheduleList.map((schedule, index) => (
                  <tr key={index}>
                    <td>{schedule.day}</td>
                    <td>{schedule.time}</td>
                    <td>{schedule.modality}</td>
                    <td>{schedule.professor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedPage === 'professores' && (
          <div>
            <h2>Nossos Profissionais</h2>
            <p>
              Conheça nossa equipe de profissionais altamente qualificados e
              dedicados a ajudar você a alcançar seus objetivos. Cada um deles
              traz consigo uma vasta experiência e conhecimento nas áreas de
              condicionamento físico, nutrição e bem-estar. Estamos prontos para
              oferecer orientação personalizada e apoio contínuo em sua jornada
              de transformação.
            </p>
            <ul>
              <li>Nome do Professor 1</li>
              <li>Nome do Professor 2</li>
              <li>Nome do Professor 3</li>
              {/* Adicione mais professores aqui */}
            </ul>
          </div>
        )}
        {selectedPage === 'metodos' && (
          <div>
            <h2>Metodologia de Ensino</h2>
            <p>
              Na nossa academia, aplicamos uma abordagem única e eficaz para
              garantir que nossos alunos alcancem seus objetivos de forma
              saudável e consistente.
            </p>
            <p>Nossa metodologia se baseia em três pilares fundamentais:</p>
            <ol>
              <li>
                Treinamento Funcional: Nossos treinos são voltados para o
                fortalecimento e desenvolvimento de habilidades funcionais,
                visando melhorar o desempenho nas atividades do dia a dia.
              </li>
              <li>
                Variedade de Modalidades: Oferecemos uma ampla variedade de
                modalidades de exercícios, desde musculação tradicional até
                aulas de dança e artes marciais. Dessa forma, garantimos que os
                alunos encontrem a atividade que mais se adequa às suas
                preferências e objetivos.
              </li>
              <li>
                Acompanhamento Personalizado: Nossos instrutores altamente
                qualificados fornecem um acompanhamento individualizado para
                cada aluno, ajustando os treinos de acordo com suas necessidades
                e oferecendo orientações e suporte constantes.
              </li>
            </ol>
            <p>
              Acreditamos que essa combinação de treinamento funcional,
              variedade de modalidades e acompanhamento personalizado é a chave
              para alcançar resultados duradouros e uma vida mais saudável.
            </p>
          </div>
        )}
        {selectedPage === 'redes-sociais' && (
          <div>
            <h2>Redes Sociais</h2>
            <p>
              Siga-nos em nossas redes sociais para ficar por dentro das últimas
              novidades, dicas de treinamento e eventos especiais:
            </p>
            <ul>
              <li>Instagram: @academiadesistemas</li>
              <li>Facebook: Academia de Sistemas</li>
              <li>Twitter: @academia_sistemas</li>
              <li>YouTube: Academia de Sistemas</li>
              {/* Adicione mais redes sociais aqui */}
            </ul>
          </div>
        )}
        {selectedPage === 'pagina' && (
          <div className="intro">
            <p className="p">
              Bem-vindo à nossa academia! Aqui, estamos comprometidos em ajudar
              você a alcançar seus objetivos de condicionamento físico e saúde
              de maneira eficaz e saudável. Nossa equipe de profissionais
              altamente qualificados e experientes está pronta para guiá-lo em
              sua jornada de transformação.
            </p>
          </div>
        )}
      </div>

      <footer>
        <q>ESSE É O MEU JEITO NINJA! Uzumaki, Naruto</q>
      </footer>
    </div>
  );
}

export default App;
