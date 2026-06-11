# 🛰️ OrbitWatch — Space Debris Monitoring Platform

> Plataforma de monitoramento de detritos espaciais com alerta de colisão em tempo real para operadoras de satélite e agências espaciais.

[![FIAP](https://img.shields.io/badge/FIAP-Global%20Solution%202026-red?style=for-the-badge)](https://www.fiap.com.br/graduacao/global-solution/)
[![Space Connect](https://img.shields.io/badge/Space%20Connect-Tecnologia%20Espacial-000?style=for-the-badge)]()
[![ODS 9](https://img.shields.io/badge/ODS%209-Indústria%20e%20Inovação-F36D25?style=flat-square)]()
[![ODS 13](https://img.shields.io/badge/ODS%2013-Ação%20Climática-3F7E44?style=flat-square)]()

---

## 🌍 O Problema

Existem mais de **30 mil pedaços de lixo orbital catalogados** girando ao redor da Terra a **28 mil km/h**. Parafusos, restos de foguete, satélites mortos, fragmentos de colisões antigas.

Cada nova colisão gera milhares de fragmentos — é o **Efeito Kessler**: se a órbita baixa entrar em cascata, a humanidade perde GPS, internet por satélite, comunicação e previsão do tempo.

## 🚀 A Solução

O **OrbitWatch** é uma plataforma que:

1. **Rastreia** detritos orbitais usando dados catalogados (NASA/Space-Track)
2. **Calcula** posição orbital de cada objeto usando trigonometria esférica
3. **Cruza** trajetórias com satélites ativos (Starlink, ISS, Amazônia-1)
4. **Alerta** operadoras quando o risco de colisão ultrapassa o limite seguro
5. **Informa** o operador via dashboard para comandar manobra evasiva

## 🎯 Público-alvo

Operadoras de satélite, agências espaciais (NASA, ESA, AEB) e toda infraestrutura global que depende de órbita baixa.

## 🏗️ Arquitetura do Sistema

```
[Dados de Detritos] → [Cálculo Orbital (Python)] → [Análise de Risco]
                                                          ↓
[Dashboard (Frontend)] ← [Alertas em Tempo Real] ← [Motor de Colisão]
                                                          ↓
                                                   [Sensores Edge (Arduino)]
```

## 📁 Estrutura do Projeto

## 📁 Estrutura do Projeto

| Pasta | Disciplinas | Professor(a) | Conteúdo |
|-------|-----------|--------------|----------|
| `python/` | Computational Thinking + Problem Solving | Francisco Elanio Bezerra / Fernando Pizzo Ribeiro | Cálculos orbitais, alertas, simulação, documentação matemática |
| `edge-computing/` | Edge Computing & Computer Systems | Paulo Marcotti | Arduino/Wokwi, sensores, simulação IoT |
| `fullstack-web/` | Front-end Design + Web Development | Julia Assunção Silva | Dashboard HTML/CSS/JS com backend JavaScript |
| `design/` | Software & Total Experience + Storytelling | Gabriela R. S

## 🛠️ Tecnologias

- **Python** — Cálculo orbital, lógica de alerta, análise de risco
- **Arduino/C++** — Sensores edge computing (Wokwi)
- **HTML/CSS** — Dashboard de monitoramento
- **Node.js / JavaScript** — Backend do dashboard web


## 🏆 Contexto Acadêmico

Projeto desenvolvido para a **Global Solution 2026** da FIAP — avaliação integradora do 1º semestre que representa **60% da nota do semestre** e **40% da média anual**.

**Tema:** *Space Connect — Tecnologia Espacial Aplicada a Desafios Reais*

### Parceiros do programa:
- **Oracle** — Parceiro tecnológico
- **Visiona Tecnologia Espacial** — Empresa estratégica brasileira de satélites
- **Bizu Space** — Startup espacial
- **Safe on Orbit** — Segurança orbital
- **NASA** — Referência em dados e pesquisa espacial

### Palestrantes do Kick-off:
- **Leka Hattori** — Representante NASA na Space Apps
- **Victor Filho** — Diretor Sênior de Contas Estratégicas na Oracle
- **Guilherme Marcos Neves** — CTO e Cofundador na Safe on Orbit
- **Arthur Durrigan Falcão Bahdur** — CEO na Bizu Space
- **Mariana Rodrigues** — Coordenadora de Controle na Visiona

## 📚 Referências

- [NASA](https://www.nasa.gov/) — Dados de detritos e missões espaciais
- [Space-Track](https://www.space-track.org/) — Catálogo de objetos orbitais
- [ESA Space Debris Office](https://www.esa.int/Space_Safety/Space_Debris) — Monitoramento europeu
- [INPE](https://www.gov.br/inpe/pt-br) — Instituto Nacional de Pesquisas Espaciais
- [Agência Espacial Brasileira](https://www.gov.br/aeb/pt-br) — Programas espaciais nacionais

## 👥 Equipe

| Nome | RM |
|------|-----|
| João Victor Pereira Gimenes | 571662 |
| Juan Duarte Moura | 570331 |
| Julio Cesar da Silva Cocco | 569463 |
| Rafael Boletini de Oliveira | 570219 |
| Victor Rossi Sales Zanandre | 573844 |

---

> *"Ideias com propósito geram impacto dentro e fora da Terra."* — FIAP Global Solution 2026