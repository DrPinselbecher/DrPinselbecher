<p align="center">
  <picture>
    <source srcset="./assets/tech-stack-header.webp" type="image/webp" />
    <img
      width="100%"
      src="./assets/tech-stack-header.png"
      alt="René Theis – Full-Stack · Backend · Frontend · Deployment"
    />
  </picture>
</p>

<p align="center">
  <a href="https://rene-theis.de">
    <img src="https://img.shields.io/badge/Portfolio-rene--theis.de-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  <img src="https://img.shields.io/badge/Standort-Norderstedt-0F172A?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Standort Norderstedt" />
  <img src="https://img.shields.io/badge/Status-Offen%20f%C3%BCr%20neue%20Herausforderungen-16A34A?style=for-the-badge" alt="Offen für neue Herausforderungen" />
</p>

---

## Über mich

> **Ich entwickle Anwendungen nicht nur bis `localhost`.**

Ich bin Full-Stack-Entwickler mit Schwerpunkt auf **Python, Django und REST-APIs im Backend** sowie **Angular und TypeScript im Frontend**.

Dabei interessiert mich der komplette Weg einer Anwendung: von Benutzeroberfläche und API über Datenbank und Hintergrundprozesse bis zu **Docker, Linux, Nginx, HTTPS und produktivem Betrieb**.

Saubere Architektur, wartbarer Code und Lösungen mit echtem praktischem Nutzen stehen für mich im Vordergrund.

<table>
<tr>
<td width="25%" align="center"><strong>Backend</strong><br /><sub>Sichere REST-APIs und klare Domänenlogik</sub></td>
<td width="25%" align="center"><strong>Frontend</strong><br /><sub>Reaktive Oberflächen mit Angular und TypeScript</sub></td>
<td width="25%" align="center"><strong>Betrieb</strong><br /><sub>Docker, Linux, Nginx, HTTPS und Deployment</sub></td>
<td width="25%" align="center"><strong>Automatisierung</strong><br /><sub>Nachvollziehbare Workflows mit APIs und KI</sub></td>
</tr>
</table>

## Tech-Stack

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=python,django,angular,ts,js,postgres,redis,docker,git,github,linux,nginx,vscode&perline=7"
    alt="Tech-Stack"
  />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Django_REST_Framework-092E20?style=flat-square&logo=django&logoColor=white" alt="Django REST Framework" />
  <img src="https://img.shields.io/badge/FFmpeg-007808?style=flat-square&logo=ffmpeg&logoColor=white" alt="FFmpeg" />
  <img src="https://img.shields.io/badge/Gunicorn-499848?style=flat-square&logo=gunicorn&logoColor=white" alt="Gunicorn" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" alt="Postman" />
  <img src="https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white" alt="n8n" />
</p>

---

## Ausgewählte Projekte

Die folgenden Projekte zeigen vollständige technische Abläufe – von der Benutzeroberfläche über API und Datenverarbeitung bis zum produktiven Betrieb.

<table>
<tr>
<td width="50%" valign="top">

<a href="https://videoflix.rene-theis.de">
  <img width="100%" src="./assets/projects/videoflix.png" alt="Videoflix Landingpage" />
</a>

<h3 align="center">Videoflix</h3>

<p align="center"><strong>Sichere Streaming-Plattform mit automatisierter Video-Pipeline</strong></p>

Videos werden serverseitig verarbeitet und anschließend als geschützte adaptive HLS-Streams ausgeliefert.

<ul>
  <li><strong>Problem:</strong> Große Quelldateien sicher verarbeiten und in mehreren Qualitätsstufen bereitstellen.</li>
  <li><strong>Lösung:</strong> FFmpeg-Pipeline mit Redis, Django RQ und geschützter HLS-Auslieferung.</li>
  <li><strong>Ergebnis:</strong> Automatische 480p-, 720p- und 1080p-Varianten im produktiven Docker-Deployment.</li>
</ul>

<p align="center">
  <a href="https://github.com/DrPinselbecher/Videoflix_Backend">
    <img src="https://img.shields.io/badge/Backend-Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Videoflix Backend" />
  </a>
  <a href="https://github.com/DrPinselbecher/Videoflix_Frontend">
    <img src="https://img.shields.io/badge/Frontend-Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Videoflix Frontend" />
  </a>
  <a href="https://videoflix.rene-theis.de">
    <img src="https://img.shields.io/badge/Live-Demo-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Videoflix Live Demo" />
  </a>
</p>

</td>
<td width="50%" valign="top">

<a href="https://github.com/DrPinselbecher/Quizly_Frontend">
  <img width="100%" src="./assets/projects/quizly.png" alt="Quizly Landingpage" />
</a>

<h3 align="center">Quizly</h3>

<p align="center"><strong>KI-gestützte Quiz-Generierung aus YouTube-Inhalten</strong></p>

Aus einer YouTube-URL entsteht automatisch ein validiertes Quiz mit zehn Fragen und benutzerbezogener Verwaltung.

<ul>
  <li><strong>Problem:</strong> Lange Videoinhalte in interaktives Lernmaterial überführen.</li>
  <li><strong>Lösung:</strong> yt-dlp, Whisper-Transkription und strukturierte Generierung mit Gemini.</li>
  <li><strong>Ergebnis:</strong> Durchgängiger Ablauf von der URL bis zum gespeicherten und bearbeitbaren Quiz.</li>
</ul>

<p align="center">
  <a href="https://github.com/DrPinselbecher/Quizly_Backend">
    <img src="https://img.shields.io/badge/Backend-Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Quizly Backend" />
  </a>
  <a href="https://github.com/DrPinselbecher/Quizly_Frontend">
    <img src="https://img.shields.io/badge/Frontend-Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Quizly Frontend" />
  </a>
</p>

</td>
</tr>
</table>

<details>
<summary><strong>Videoflix-Architektur anzeigen</strong></summary>

```mermaid
flowchart LR
    A["Angular Frontend"] -->|"HTTPS + Cookies"| B["Django REST API"]
    B --> C["PostgreSQL"]
    B --> D["Redis Queue"]
    D --> E["RQ Worker"]
    E --> F["FFmpeg"]
    F --> G["Geschützte HLS-Dateien"]
    G -->|"480p · 720p · 1080p"| A
```

</details>

<details>
<summary><strong>Quizly-Generierungsablauf anzeigen</strong></summary>

```mermaid
flowchart LR
    A["YouTube-URL"] --> B["yt-dlp"]
    B --> C["Whisper"]
    C --> D["Transkript"]
    D --> E["Gemini"]
    E --> F["Validierte Quizdaten"]
    F --> G["Django API + Datenbank"]
    G --> H["Persönliche Quiz-Bibliothek"]
```

</details>

### Weitere Projekte

| Projekt | Technischer Schwerpunkt | Code |
| --- | --- | --- |
| **Coderr** | Rollenbasierter Service-Marktplatz mit Angeboten, Bestellungen, Bewertungen, Suche und Pagination | [Backend](https://github.com/DrPinselbecher/Coderr_Backend) · [Frontend](https://github.com/DrPinselbecher/Coderr_Frontend) |
| **KanMind** | Board- und Aufgabenverwaltung mit Owner-, Member-, Assignee- und Reviewer-Berechtigungen | [Backend](https://github.com/DrPinselbecher/KanMind_Backend_first_backend) · [Frontend](https://github.com/DrPinselbecher/KanMind_Frontend) |
| **DABubble** | Realtime-Kommunikation mit Angular, Firebase, Channels, Direktnachrichten und Threads | [Repository](https://github.com/DrPinselbecher/DABubble) |
| **Portfolio 2.0** | Angular-Portfolio mit interaktiver Projekt-Helix und produktivem Deployment | [Repository](https://github.com/DrPinselbecher/portfolio_2.0) · [Live](https://rene-theis.de) |

---

## Automatisierung & KI

Ich entwickle mit **n8n, APIs und KI-Modellen** nachvollziehbare Automatisierungen – unter anderem für E-Mail-Klassifizierung und intelligente Antwortvorbereitung. Kritische Entscheidungen bleiben dabei kontrollierbar und enden bewusst in einer menschlichen Prüfung.

```mermaid
flowchart LR
    A["Eingang"] --> B["Datenaufbereitung"]
    B --> C["Klassifizierung"]
    C --> D{"Regelbasierte Entscheidung"}
    D --> E["Antwortentwurf"]
    E --> F["Menschliche Prüfung"]
```

---

## Technik trifft Praxiserfahrung

Vor meinem Einstieg in die Softwareentwicklung habe ich in operativen Positionen mit Führungsverantwortung gearbeitet. Diese Erfahrung prägt meine technische Arbeit: **Abläufe verstehen, Anforderungen strukturieren, Verantwortung übernehmen und Lösungen entwickeln, die im Alltag funktionieren.**

---

## Engineering-Qualität

<table>
<tr>
<td width="25%" align="center"><strong>Sicherheit</strong><br /><sub>HttpOnly-Cookies, Token-Blacklists und präzise Berechtigungen</sub></td>
<td width="25%" align="center"><strong>Testbarkeit</strong><br /><sub>Automatisierte Tests und klare Validierung</sub></td>
<td width="25%" align="center"><strong>Wartbarkeit</strong><br /><sub>Definierte API-Verträge und getrennte Verantwortlichkeiten</sub></td>
<td width="25%" align="center"><strong>Betrieb</strong><br /><sub>Docker, Gunicorn, Nginx und HTTPS</sub></td>
</tr>
</table>

Mein aktueller Entwicklungsschwerpunkt verbindet **Full-Stack-Engineering, DevOps und schrittweise DevSecOps-Praktiken**.

---

## GitHub-Aktivität

<p align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://raw.githubusercontent.com/DrPinselbecher/DrPinselbecher/output/github-contribution-grid-snake-dark.svg"
    />
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://raw.githubusercontent.com/DrPinselbecher/DrPinselbecher/output/github-contribution-grid-snake.svg"
    />
    <img
      alt="Animierte GitHub-Contributions"
      src="https://raw.githubusercontent.com/DrPinselbecher/DrPinselbecher/output/github-contribution-grid-snake.svg"
    />
  </picture>
</p>

---

## Kontakt

<p align="center">
  <strong>Interesse an Full-Stack-, Backend- oder Softwareentwicklungsprojekten?</strong><br />
  Schreib mir direkt oder sieh dir weitere Arbeiten in meinem Portfolio an.
</p>

<p align="center">
  <a href="mailto:contact@rene-theis.de">
    <img src="https://img.shields.io/badge/E--Mail-contact%40rene--theis.de-0F172A?style=for-the-badge&logo=minutemailer&logoColor=white" alt="E-Mail an René Theis" />
  </a>
  <a href="https://www.linkedin.com/in/ren%C3%A9-theis">
    <img src="https://img.shields.io/badge/LinkedIn-Ren%C3%A9%20Theis-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="René Theis auf LinkedIn" />
  </a>
  <a href="https://rene-theis.de">
    <img src="https://img.shields.io/badge/Portfolio-rene--theis.de-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio von René Theis" />
  </a>
</p>

<p align="center">
  <img
    width="100%"
    src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,45:1D4ED8,100:06B6D4&height=110&section=footer"
    alt=""
  />
</p>
