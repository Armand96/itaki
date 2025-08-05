

"use client";
import faq_data from '@/data/faq-data'; 
import RightArrawIconFaq from '@/svg/RightArrawIconFaq';
import Image from 'next/image';
import { useEffect, useState } from 'react';


// images import  
import mynus_img from "@/assets/images/faq/mynus.svg";
import plas_img from "@/assets/images/faq/plas.svg";

export default function FaqArea() {
  const [activeQuestions, setActiveQuestions] = useState<Record<string, number | null>>(() => {
    // Initialize with first question of each section open
    const initialState: Record<string, number | null> = {};
    faq_data.forEach(section => {
      initialState[section.id] = section.questions[0]?.id || null;
    });
    return initialState;
  });

  const toggleQuestion = (sectionId: string, questionId: number) => {
    setActiveQuestions(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === questionId ? null : questionId
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust for header
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const links = document.querySelectorAll<HTMLAnchorElement>('#scroll-btn a.luminix-default-btn.faq-btn');

      sections.forEach(section => {
        const id = section.id;
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          links.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.scroll === id) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    const handleLinkClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');

      if (targetId) {
        const targetSection = document.querySelector<HTMLElement>(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });

          document.querySelectorAll('#scroll-btn a.luminix-default-btn.faq-btn').forEach(link => {
            link.classList.remove('active');
          });
          target.classList.add('active');
        }
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('#scroll-btn a.luminix-default-btn.faq-btn');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="luminix-padding-section">
      <div className="container">
        <div className="luminix-section-title center max-width-700">
          <h2>Answers to the most popular questions</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <nav id="scroll-btn" className="scroll-btn">
              <ul className="nav-menu">
                {faq_data.map((section, index) => (
                  <li key={section.id}>
                    <a
                      data-scroll={section.id}
                      href={`#${section.id}`}
                      className={`luminix-default-btn pill faq-btn ${index === 0 ? 'active' : ''}`}
                      aria-label={`Jump to ${section.title} section`}
                    >
                      {section.title}
                      
                      <RightArrawIconFaq />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-8">
            {faq_data.map((section) => (
              <section id={section.id} key={section.id} className="section" aria-labelledby={`${section.id}-heading`}>
                <div className="luminix-faq-wrap1" data-aos="fade-up" data-aos-duration="700">
                  {section.questions.map((item) => {
                    const isActive = activeQuestions[section.id] === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`luminix-faq-item ${isActive ? 'open' : ''}`}
                        aria-expanded={isActive}
                      >
                        <div
                          className="luminix-faq-header"
                          onClick={() => toggleQuestion(section.id, item.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && toggleQuestion(section.id, item.id)}
                          aria-controls={`faq-${section.id}-${item.id}`}
                        >
                          <h5>{item.id}. {item.question}</h5>

                          <div className="luminix-active-icon">
                            <Image width={24} height={24} className="plasicon" src={mynus_img} alt="here is theme image" />
                            <Image width={24} height={24} className="mynusicon" src={plas_img} alt="here is theme image" />
                          </div>


                        </div>
                        <div
                          id={`faq-${section.id}-${item.id}`}
                          className="luminix-faq-body"
                          style={{ display: isActive ? 'block' : 'none' }}
                        >
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}