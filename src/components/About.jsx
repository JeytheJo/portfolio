import React from "react";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="section-label">
        <span>// Sobre</span>
      </div>

      <div className="about-grid">

        <div className="about-text">
          <h2 className="about-heading">
            Construindo na<br />
            <span className="about-heading-accent">interseção</span> entre<br />
            dev e segurança.
          </h2>
          <p>
            Sou estudante de Engenharia de Software, atualmente
            focado em desenvolvimento fullstack e segurança da informação.
            Gosto de construir ferramentas que resolvem problemas reais —
            desde apps mobile até sistemas web com banco de dados.
          </p>
          <p>
            Fora do código, estudo OSINT, pentest e privacidade digital.
            Meu objetivo é atuar profissionalmente com segurança ofensiva,
            bug bounty ou inteligência — sempre no lado certo da linha.
          </p>
          <p>
            Uso Linux como ambiente principal, prefiro aprender fazendo
            e acredito que um bom sistema começa por um bom design.
          </p>
        </div>

        <div className="about-info">

          <div className="about-info-block">
            <span className="about-info-label">Localização</span>
            <span className="about-info-value">Teresina, Piauí</span>
          </div>

          <div className="about-info-block">
            <span className="about-info-label">Formação</span>
            <span className="about-info-value">Eng. de Software · cursando</span>
          </div>

          <div className="about-info-block">
            <span className="about-info-label">Foco atual</span>
            <span className="about-info-value">Fullstack + Cybersecurity</span>
          </div>

          <div className="about-info-block">
            <span className="about-info-label">Ambiente</span>
            <span className="about-info-value">Fedora KDE Linux</span>
          </div>

          <div className="about-info-block">
            <span className="about-info-label">Disponível para</span>
            <span className="about-info-value about-info-accent">
              Estágio · Projetos
            </span>
          </div>

          <a
            href="https://github.com/JeytheJo"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost about-btn"
          >
            Ver GitHub
          </a>

        </div>

      </div>

    </section>
  )
}