import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Lang = 'ru' | 'en';

type Content = {
  nav: {
    clients: string;
    about: string;
    cases: string;
    blog: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    actions: {
      request: string;
      resume: string;
    };
    stats: Array<{ value: string; label: string }>;
  };
  heroCard: {
    chips: string[];
    title: string;
    body: string;
    points: Array<{ title: string; body: string }>;
  };
  clients: {
    eyebrow: string;
    title: string;
    list: string[];
  };
  positions: {
    eyebrow: string;
    title: string;
    list: Array<{ title: string; body: string }>;
  };
  team: {
    eyebrow: string;
    title: string;
    list: Array<{ name: string; role: string }>;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
  };
  cases: {
    eyebrow: string;
    title: string;
    list: Array<{ title: string; body: string; metric: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    list: Array<{ quote: string; author: string }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    plans: Array<{ name: string; summary: string; price: string; items: string[]; highlight?: boolean }>;
  };
  blog: {
    eyebrow: string;
    title: string;
    list: Array<{ title: string; body: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    form: {
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      roles: string;
      rolesPlaceholder: string;
      submit: string;
    };
  };
  footer: {
    about: string;
    email: string;
    phone: string;
    locations: string;
    copyright: string;
  };
  buttons: {
    find: string;
  };
};

const CONTENT: Record<Lang, Content> = {
  ru: {
    nav: {
      clients: 'Клиенты',
      about: 'О нас',
      cases: 'Кейсы',
      blog: 'Блог'
    },
    hero: {
      eyebrow: 'RecruitTech — кадровое агентство нового поколения',
      title: 'Собираем команды, которые неизбежно побеждают.',
      lead:
        'Полный цикл подбора для product, engineering и leadership ролей. Мы объединяем человеческую интуицию и data-driven поиск, чтобы вы нанимали быстрее и точнее.',
      actions: {
        request: 'Подобрать специалиста',
        resume: 'Отправить резюме'
      },
      stats: [
        { value: '12 дней', label: 'среднее время до short-list' },
        { value: '80%+', label: 'принятие оффера' },
        { value: '400+', label: 'закрытых позиций' }
      ]
    },
    heroCard: {
      chips: ['Live search', 'AI mapping', 'Human vetting'],
      title: 'Talent radar 360°',
      body:
        'Ежедневный скрининг рынка, готовые пайплайны и калибровка soft skills под каждую роль. Вы видите только проверенные совпадения — без «может быть».',
      points: [
        { title: 'Signal mix', body: 'Данные о результативности, портфолио и культурный fit.' },
        { title: 'Experience design', body: 'Кандидатский путь как премиальный продукт.' }
      ]
    },
    clients: {
      eyebrow: 'Нам доверяют',
      title: 'Команды, которые выбирают RecruitTech',
      list: ['NovaBank', 'WaveTech', 'Orbit Labs', 'Helix AI', 'Zenith Cloud', 'Pulse Health']
    },
    positions: {
      eyebrow: 'Сильные направления',
      title: 'Сферы, где мы закрываем ключевые роли',
      list: [
        { title: 'Fintech', body: 'Digital banking, платежные платформы, риск-аналитика.' },
        { title: 'HealthTech', body: 'Digital health, клинические продукты, R&D команды.' },
        { title: 'SaaS & B2B', body: 'Enterprise платформы, revops и customer success.' },
        { title: 'AI & Data', body: 'ML-инженеры, data scientists, AI product.' },
        { title: 'Cybersecurity', body: 'Security architects, SOC, cloud security.' },
        { title: 'E-commerce', body: 'Marketplace лиды, growth, performance.' },
        { title: 'PropTech', body: 'Smart real estate, digital construction.' },
        { title: 'Logistics', body: 'Supply chain, last-mile, ops leadership.' },
        { title: 'Gaming', body: 'Game design, live ops, monetization.' },
        { title: 'EdTech', body: 'Learning platforms, instructional design.' },
        { title: 'HRTech', body: 'People analytics, ATS, workforce planning.' },
        { title: 'Energy', body: 'GreenTech, renewables, grid innovation.' },
        { title: 'Media', body: 'Streaming, content ops, creative leadership.' },
        { title: 'Biotech', body: 'Bioinformatics, лабораторные продукты.' },
        { title: 'Web3', body: 'Blockchain, tokenomics, compliance.' }
      ]
    },
    team: {
      eyebrow: 'Наша команда',
      title: 'Люди, которые создают hiring-эффект',
      list: [
        { name: 'Mila K.', role: 'Managing Partner · Executive Search' },
        { name: 'Artem V.', role: 'Head of Engineering Recruitment' },
        { name: 'Nora P.', role: 'Global Talent Partner' },
        { name: 'Jin S.', role: 'Data & Insights Lead' }
      ]
    },
    mission: {
      eyebrow: 'Миссия',
      title: 'Делаем найм движком роста.',
      body:
        'RecruitTech соединяет амбициозные компании с людьми, которые создают импульс. Наша цель — строить устойчивые команды, способные масштабироваться глобально, не теряя культуру.'
    },
    cases: {
      eyebrow: 'Кейсы',
      title: 'Результаты, которые можно измерить',
      list: [
        {
          title: 'Fintech scale-up',
          body: 'Собрали product и data-команду из 18 человек за 10 недель в 3 странах.',
          metric: 'Time-to-hire ↓ 42%'
        },
        {
          title: 'HealthTech launch',
          body: 'Закрыли executive роли до Series B и усилили employer brand.',
          metric: 'Offer acceptance ↑ 18%'
        },
        {
          title: 'SaaS enterprise',
          body: 'Перестроили engineering org через staff-уровень и новое лидерство.',
          metric: 'Retention ↑ 30%'
        },
        {
          title: 'AI studio',
          body: 'Собрали core ML-команду и Research Ops за 6 недель.',
          metric: 'Pipeline readiness ↑ 55%'
        },
        {
          title: 'Marketplace',
          body: 'Закрыли коммерческий блок и head of growth до запуска.',
          metric: 'Revenue impact ↑ 24%'
        },
        {
          title: 'Logistics scale',
          body: 'Найм operations-лидеров в 4 хабах.',
          metric: 'Ops efficiency ↑ 19%'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Отзывы',
      title: 'Что говорят фаундеры',
      list: [
        {
          quote: '«RecruitTech превратил найм в запуск продукта. Мы доверяли каждому hire.»',
          author: 'CEO, Orbit Labs'
        },
        {
          quote: '«Скорость без потери культуры. Мы закрыли roadmap без выгорания.»',
          author: 'COO, WaveTech'
        },
        {
          quote: '«Самый сильный пайплайн. Кандидаты приходили уже готовыми.»',
          author: 'HR Lead, NovaBank'
        },
        {
          quote: '«Сделали executive search тихо и без шума, но с точным попаданием.»',
          author: 'Founder, Helix AI'
        },
        {
          quote: '«Они собирают команды, которые масштабируются и не ломаются.»',
          author: 'VP People, Zenith Cloud'
        }
      ]
    },
    pricing: {
      eyebrow: 'Тарифы',
      title: 'Гибкие модели сотрудничества',
      plans: [
        {
          name: 'Growth',
          summary: 'Для команд, которые растут резко.',
          price: '18% от годового дохода',
          items: ['Выделенная команда рекрутеров', 'Еженедельные hiring-спринты', 'Усиление бренда работодателя']
        },
        {
          name: 'Executive',
          summary: 'Лидерские и конфиденциальные поиски.',
          price: 'Fixed + success fee',
          items: ['Глобальный talent mapping', 'Board-level advisory', 'Candidate concierge'],
          highlight: true
        },
        {
          name: 'Embedded',
          summary: 'RecruitTech внутри вашей команды.',
          price: 'Ежемесячный retainer',
          items: ['Редизайн hiring-процесса', 'Analytics dashboard', 'Обучение hiring-менеджеров']
        }
      ]
    },
    blog: {
      eyebrow: 'Инсайты',
      title: 'RecruitTech journal',
      list: [
        { title: 'Hiring playbook 2026', body: 'Как AI, доверие и скорость меняют рекрутинг.' },
        { title: 'Опыт кандидата', body: 'Touchpoints, которые заставляют сказать «да».' },
        { title: 'Глобальный найм', body: 'Кросс-культурные практики для senior ролей.' }
      ]
    },
    contact: {
      eyebrow: 'На связи',
      title: 'Готовы собрать команду мечты?',
      body: 'Расскажите о целях найма — мы ответим в течение 24 часов.',
      form: {
        company: 'Компания',
        companyPlaceholder: 'RecruitTech',
        email: 'Email',
        emailPlaceholder: 'hello@recruittech.com',
        roles: 'Какие роли вы ищете?',
        rolesPlaceholder: 'Product, Engineering, Leadership',
        submit: 'Отправить запрос'
      }
    },
    footer: {
      about: 'High-impact recruitment для амбициозных компаний.',
      email: 'hello@recruittech.com',
      phone: '+49 555 120 2040',
      locations: 'Berlin · Dubai · São Paulo',
      copyright: '© 2026 RecruitTech'
    },
    buttons: {
      find: 'Подобрать специалиста'
    }
  },
  en: {
    nav: {
      clients: 'Clients',
      about: 'About',
      cases: 'Cases',
      blog: 'Blog'
    },
    hero: {
      eyebrow: 'RecruitTech — next-generation talent agency',
      title: 'We build teams that feel inevitable.',
      lead:
        'Full-cycle recruitment for product, engineering, and leadership roles. We blend human intuition with data-driven discovery so you hire faster and stay ahead.',
      actions: {
        request: 'Request a specialist',
        resume: 'Send a resume'
      },
      stats: [
        { value: '12 days', label: 'average time-to-shortlist' },
        { value: '80%+', label: 'offer acceptance rate' },
        { value: '400+', label: 'closed roles' }
      ]
    },
    heroCard: {
      chips: ['Live search', 'AI mapping', 'Human vetting'],
      title: 'Talent radar 360°',
      body:
        'Daily market scans, curated talent pipelines, and soft-skill calibration for every role. You see only verified matches — not a list of maybes.',
      points: [
        { title: 'Signal mix', body: 'Performance data, portfolio, and cultural fit.' },
        { title: 'Experience design', body: 'Candidate journeys that feel like a premium product.' }
      ]
    },
    clients: {
      eyebrow: 'Trusted by',
      title: 'Teams that trust RecruitTech',
      list: ['NovaBank', 'WaveTech', 'Orbit Labs', 'Helix AI', 'Zenith Cloud', 'Pulse Health']
    },
    positions: {
      eyebrow: 'Where we lead',
      title: 'Industries where we close critical roles',
      list: [
        { title: 'Fintech', body: 'Digital banking, payments, risk analytics.' },
        { title: 'HealthTech', body: 'Digital health, clinical products, R&D teams.' },
        { title: 'SaaS & B2B', body: 'Enterprise platforms, revops, customer success.' },
        { title: 'AI & Data', body: 'ML engineers, data scientists, AI product.' },
        { title: 'Cybersecurity', body: 'Security architects, SOC, cloud security.' },
        { title: 'E-commerce', body: 'Marketplace leadership, growth, performance.' },
        { title: 'PropTech', body: 'Smart real estate, digital construction.' },
        { title: 'Logistics', body: 'Supply chain, last-mile, ops leadership.' },
        { title: 'Gaming', body: 'Game design, live ops, monetization.' },
        { title: 'EdTech', body: 'Learning platforms, instructional design.' },
        { title: 'HRTech', body: 'People analytics, ATS, workforce planning.' },
        { title: 'Energy', body: 'GreenTech, renewables, grid innovation.' },
        { title: 'Media', body: 'Streaming, content ops, creative leadership.' },
        { title: 'Biotech', body: 'Bioinformatics, lab products.' },
        { title: 'Web3', body: 'Blockchain, tokenomics, compliance.' }
      ]
    },
    team: {
      eyebrow: 'Our team',
      title: 'Humans behind the hiring edge',
      list: [
        { name: 'Mila K.', role: 'Managing Partner · Executive Search' },
        { name: 'Artem V.', role: 'Head of Engineering Recruitment' },
        { name: 'Nora P.', role: 'Global Talent Partner' },
        { name: 'Jin S.', role: 'Data & Insights Lead' }
      ]
    },
    mission: {
      eyebrow: 'Mission',
      title: 'We design hiring as a growth engine.',
      body:
        'RecruitTech connects ambitious companies with people who drive momentum. Our mission is to build diverse, resilient teams that scale globally without losing culture.'
    },
    cases: {
      eyebrow: 'Cases',
      title: 'Wins that feel measurable',
      list: [
        {
          title: 'Fintech scale-up',
          body: 'Built a product & data team of 18 in 10 weeks across 3 countries.',
          metric: 'Time-to-hire ↓ 42%'
        },
        {
          title: 'HealthTech launch',
          body: 'Closed key executive roles before Series B while improving employer brand.',
          metric: 'Offer acceptance ↑ 18%'
        },
        {
          title: 'SaaS enterprise',
          body: 'Rebuilt engineering org with staff-level hires and new lead structure.',
          metric: 'Retention ↑ 30%'
        },
        {
          title: 'AI studio',
          body: 'Built core ML and Research Ops teams in 6 weeks.',
          metric: 'Pipeline readiness ↑ 55%'
        },
        {
          title: 'Marketplace',
          body: 'Hired commercial leadership and growth before launch.',
          metric: 'Revenue impact ↑ 24%'
        },
        {
          title: 'Logistics scale',
          body: 'Hired operations leaders across 4 hubs.',
          metric: 'Ops efficiency ↑ 19%'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Reviews',
      title: 'What founders say',
      list: [
        {
          quote: '“RecruitTech made hiring feel like a product launch. We trusted every hire.”',
          author: 'CEO, Orbit Labs'
        },
        {
          quote: '“They matched our culture with speed. We hit our roadmap without burnout.”',
          author: 'COO, WaveTech'
        },
        {
          quote: '“The strongest pipeline we’ve seen. Candidates arrived pre-sold.”',
          author: 'HR Lead, NovaBank'
        },
        {
          quote: '“Quiet executive search with precise results.”',
          author: 'Founder, Helix AI'
        },
        {
          quote: '“They build teams that scale without breaking.”',
          author: 'VP People, Zenith Cloud'
        }
      ]
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Flexible engagement models',
      plans: [
        {
          name: 'Growth',
          summary: 'Best for hyper-growth teams.',
          price: '18% of annual salary',
          items: ['Dedicated recruiter squad', 'Weekly hiring sprints', 'Employer brand boost']
        },
        {
          name: 'Executive',
          summary: 'Leadership & confidential search.',
          price: 'Fixed + success fee',
          items: ['Global talent mapping', 'Board-level advisory', 'Candidate concierge'],
          highlight: true
        },
        {
          name: 'Embedded',
          summary: 'RecruitTech inside your team.',
          price: 'Monthly retainer',
          items: ['Hiring process redesign', 'Analytics dashboard', 'Training for hiring leads']
        }
      ]
    },
    blog: {
      eyebrow: 'Insights',
      title: 'RecruitTech journal',
      list: [
        { title: '2026 hiring playbook', body: 'How AI, trust, and speed redefine recruitment.' },
        { title: 'Designing candidate experience', body: 'Touchpoints that make top talent say yes.' },
        { title: 'Global hiring etiquette', body: 'Cross-cultural tips for closing senior roles.' }
      ]
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Ready to build your dream team?',
      body: 'Share your hiring goals and we’ll reply within 24 hours.',
      form: {
        company: 'Company',
        companyPlaceholder: 'RecruitTech',
        email: 'Email',
        emailPlaceholder: 'hello@recruittech.com',
        roles: 'What roles are you hiring?',
        rolesPlaceholder: 'Product, Engineering, Leadership',
        submit: 'Send request'
      }
    },
    footer: {
      about: 'High-impact recruitment for ambitious companies.',
      email: 'hello@recruittech.com',
      phone: '+49 555 120 2040',
      locations: 'Berlin · Dubai · São Paulo',
      copyright: '© 2026 RecruitTech'
    },
    buttons: {
      find: 'Find a specialist'
    }
  }
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang: Lang = 'ru';
  content = CONTENT;

  get t(): Content {
    return this.content[this.lang];
  }

  get roleMarquee(): Content['positions']['list'] {
    return this.repeat(this.t.positions.list);
  }

  get caseMarquee(): Content['cases']['list'] {
    return this.repeat(this.t.cases.list);
  }

  get testimonialMarquee(): Content['testimonials']['list'] {
    return this.repeat(this.t.testimonials.list);
  }

  setLang(lang: Lang): void {
    this.lang = lang;
  }

  private repeat<T>(items: T[]): T[] {
    return [...items, ...items];
  }
}
