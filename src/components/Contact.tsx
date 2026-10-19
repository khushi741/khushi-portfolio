import React, { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const emailSubject = encodeURIComponent(
      `[AI Portfolio Inquiry] ${subject || 'Collaboration'} - from ${name || 'Colleague'}`
    );
    const emailBody = encodeURIComponent(
      `Hello Khushi,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${personal.email}?subject=${emailSubject}&body=${emailBody}`;
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="editorial-section contact-section-wrap">
      <div className="section-container-inner">
        <div className="contact-split-layout">
          {/* Left Column: Editorial Invitation & Direct Beacons */}
          <div className="contact-text-col">
            <span className="contact-script-sub">Initiate Dialogue</span>
            <h2 className="contact-headline-serif">
              Let's Build Something<br />Intelligent.
            </h2>
            <p className="contact-invitation-body">
              Whether you have an autonomous agent system to architect, a machine learning challenge to discuss, or an engineering role to explore — I would love to connect.
            </p>

            <div className="contact-direct-beacons">
              {/* Email Beacon */}
              <div className="beacon-item">
                <div className="beacon-icon-bubble">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="beacon-label">Electronic Mail</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <a href={`mailto:${personal.email}`} className="beacon-value-link">
                      {personal.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-burgundy)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={13} color="green" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* LinkedIn Beacon */}
              <div className="beacon-item">
                <div className="beacon-icon-bubble">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <span className="beacon-label">Professional Guild</span>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="beacon-value-link"
                  >
                    linkedin.com/in/khushi-nayak
                  </a>
                </div>
              </div>

              {/* GitHub Beacon */}
              <div className="beacon-item">
                <div className="beacon-icon-bubble">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <span className="beacon-label">Repository Vault</span>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="beacon-value-link"
                  >
                    github.com/khushi741
                  </a>
                </div>
              </div>

              {/* Location & Telephone */}
              <div className="beacon-item">
                <div className="beacon-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="beacon-label">Location</span>
                  <span className="beacon-value-link" style={{ textDecoration: 'none' }}>
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contrasting Warm Ivory Card with Working Form */}
          <div className="contact-form-card">
            <h3 className="form-header-line">Send an Editorial Inquiry</h3>
            <p className="form-subline">
              Fill in your details below to dispatch a message directly to my inbox.
            </p>

            <form onSubmit={handleSubmitForm} className="editorial-form">
              <div className="form-field-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Lead Recruiter / Engineering Manager"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="editorial-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="editorial-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. Senior AI Engineer Opportunity"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="editorial-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Describe your inquiry, project scope, or technical challenge..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="editorial-textarea"
                />
              </div>

              <button type="submit" className="form-submit-pill">
                <span>{submitted ? 'Opening Mail Client...' : 'Dispatch Inquiry'}</span>
                <Send size={15} />
              </button>

              {submitted && (
                <div className="toast-message-pill">
                  <Check size={16} />
                  <span>Preparing your email client with this pre-formatted inquiry...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
