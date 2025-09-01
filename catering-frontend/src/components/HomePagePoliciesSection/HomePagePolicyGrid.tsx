import React from 'react';
import './HomePagePolicyGrid.css';
import slaveryPdf from '../../public/policies/modern-slavery.pdf';
import animalWelfarePdf from '../../public/policies/animal-welfare.pdf';
import carbonReductionPdf from '../../public/policies/carbon-reduction.pdf';
export interface PolicyItem {
  title: string;
  description?: string;
  pdfUrl: string;
  fileSize?: string;
  iconClass?: string;
}

export interface HomePagePolicyGridProps {
  policies?: PolicyItem[];
}

const defaultPolicies: PolicyItem[] = [
  {
    title: 'Modern Slavery Statement',
    description: 'Our commitment to preventing modern slavery in our operations.',
    pdfUrl: slaveryPdf,
    fileSize: '41KB',
    iconClass: 'fa-solid fa-user-shield',
  },
  {
    title: 'Net Zero Carbon Roadmap',
    description: 'Steps we are taking to reduce our emissions by 2030.',
    pdfUrl: carbonReductionPdf,
    fileSize: '67KB',
    iconClass: 'fa-solid fa-leaf',
  },
  {
    title: 'Animal Welfare Policy',
    description: 'How we ensure high standards of animal welfare in our supply chain.',
    pdfUrl: animalWelfarePdf,
    fileSize: '101KB',
    iconClass: 'fa-solid fa-users',
  },
];

const HomePagePolicyGrid: React.FC<HomePagePolicyGridProps> = ({ policies = defaultPolicies }) => {
  return (
    <section className="policy-grid-section">
      <h2 className="policy-grid-title">Our Policies & Statements</h2>
      <div className="policy-grid">
        {policies.map((p) => (
          <div className="policy-card" key={p.title}>
            {p.iconClass && (
              <div className="policy-icon">
                <i className={p.iconClass} aria-hidden="true" />
              </div>
            )}
            <h3 className="policy-title">{p.title}</h3>
            {p.description && <p className="policy-description">{p.description}</p>}
            <a
              className="policy-link"
              href={p.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF{p.fileSize ? ` (${p.fileSize})` : ''}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePagePolicyGrid;