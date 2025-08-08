import React from 'react';
import './LeFestival.css';

const LeFestival = () => {
  return (
    <div className="festival-page">
      <section className="festival-content section">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <h1>FIIDI, c'est quoi concrètement ?</h1>
              
              <div className="content-block">
                <div className="text-content">
                  <p>FIIDI, c'est à la fois une application et un festival, réunis autour d'une même mission : connecter, valoriser et faire avancer les talents du cinéma indépendant.</p>
                  
                  <p>L'application permet aux pros et passionné-es du secteur de se rendre visibles, de collaborer et de créer des opportunités.</p>
                  
                  <p>Le festival, organisé chaque année à Marseille, met en lumière les nouvelles voix du cinéma, dans un esprit ouvert, festif et accessible à tou-tes.</p>
                </div>
                <div className="image-placeholder"></div>
              </div>

              <h2 className="yellow-bg section-title">FIIDI, le nouvel American Dream</h2>
              
              <div className="content-block reverse">
                <div className="image-placeholder"></div>
                <div className="text-content">
                  <p>FIIDI, c'est une nouvelle voie pour celles et ceux qui vivent de cinéma, mais ne savent pas toujours par où commencer.</p>
                  
                  <p>C'est un espace pensé pour révéler les conditions de cette industrie plus ouvertes, plus inclusives, plus dynamiques, loin des sentiers traditionnels mais sans renier la tradition.</p>
                  
                  <p>Nous croyons qu'un bon film peut naître n'importe où et venir d'n'importe qui, dans une dynamique de partage et de création collaborative, dans l'ère du temps, de rencontrer, d'apprendre sans attendre une validation ou la bienveillance d'un établissement. Nous permettons à chacun de créer, d'être visible, de rencontrer, d'apprendre sans attendre une validation ou la permission de qui que ce soit.</p>
                </div>
              </div>

              <h2 className="yellow-bg section-title">FIIDI, tous les métiers du cinéma, au même endroit</h2>
              
              <div className="jobs-grid">
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Acteurs / Actrices</h3>
                </div>
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Réalisateurs des & Réalisatrices</h3>
                </div>
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Producteurs/ Productrices</h3>
                </div>
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Scénaristes et</h3>
                </div>
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Techniciens & Techniciennes</h3>
                </div>
                <div className="job-card">
                  <div className="job-image"></div>
                  <h3>Techniciens & Techniciennes</h3>
                </div>
              </div>

              <h2 className="yellow-bg section-title">FIIDI MODE, nos valeurs</h2>
              
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">💡</div>
                  <h3>Créativité</h3>
                </div>
                <div className="value-card">
                  <div className="value-icon">📈</div>
                  <h3>Productivité</h3>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3>Collaboration</h3>
                </div>
                <div className="value-card">
                  <div className="value-icon">👥</div>
                  <h3>Diversité</h3>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌐</div>
                  <h3>Communauté</h3>
                </div>
              </div>

              <h2 className="yellow-bg section-title">FIIDI MODE, vos retours</h2>
              
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-author">Guillaume L.</div>
                  <div className="testimonial-role">Réalisateur</div>
                  <p>Une plateforme innovante qui nous permet enfin d'être visible dans notre profession. Une belle idée pour donner les outils pour faire du networking et découvrir de nouveaux talents.</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-author">Guillaume L.</div>
                  <div className="testimonial-role">Réalisateur</div>
                  <p>Après de plus longs mois de création, nous avons pu voir différents directeurs d'acteurs et de réalisateurs. Nous avons eu de bons films pour rentrer et nous sommes parvenus avec succès.</p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-author">Guillaume L.</div>
                  <div className="testimonial-role">Réalisateur</div>
                  <p>Une société à être rentrer très performante pour notre métier. Cela a été trop bien passé pour retirer et en plus elle permet d'être en conversation avec nos différents collègues du métier.</p>
                </div>
              </div>

              <h2 className="yellow-bg section-title">FIIDI MODE, nos missions</h2>
              
              <div className="missions-list">
                <div className="mission-item">
                  <span className="mission-icon">✓</span>
                  <span>Offrir un réseau social pour partager et découvrir l'actualité</span>
                </div>
                <div className="mission-item">
                  <span className="mission-icon">✓</span>
                  <span>Donner les clés pour concrétiser ses projets</span>
                </div>
                <div className="mission-item">
                  <span className="mission-icon">✓</span>
                  <span>Favoriser la communication dans le milieu</span>
                </div>
                <div className="mission-item">
                  <span className="mission-icon">✓</span>
                  <span>Valoriser la diversité à travers un écosystème inclusif</span>
                </div>
              </div>

              <div className="contact-section">
                <p>Nos missions, on ne construit avec vous. Et si vous nous disiez que pensez de FDI ?</p>
                <div className="contact-form">
                  <div className="form-row">
                    <input type="text" placeholder="E-mail *" />
                    <input type="text" placeholder="Prénom *" />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Nom *" />
                    <input type="text" placeholder="Prénom *" />
                  </div>
                  <div className="form-row">
                    <select>
                      <option>Quel est votre job dans le film de cinéma</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <button className="btn btn-primary">Envoyer mon message</button>
                </div>
                <p className="form-note">* ces informations sont primordiales</p>
              </div>

              <h2 className="yellow-bg section-title">Ils nous font confiance</h2>
              
              <div className="partners-grid">
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
                <div className="partner-logo"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeFestival;
