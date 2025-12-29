'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  // 스크롤 이벤트로 active section 추적
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              className="text-lg sm:text-xl font-bold tracking-tight hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
            >
              Your<span className="text-blue-600">Name</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm lg:text-base font-medium transition-colors hover:text-blue-600 py-2 ${
                      activeSection === item.id
                        ? 'text-blue-600'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium transition-colors hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16 sm:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center min-h-screen py-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 fade-in leading-tight">
                안녕하세요,
                <br />
              Test Automation Engineer <span className="text-blue-800 dark:text-blue-700"><br/>띵똥띵</span>입니다
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 max-w-2xl px-4 fade-in leading-relaxed">
                사용자 경험을 최우선으로 생각하며, 
                <br className="hidden sm:block" />
                깔끔하고 효율적인 코드를 작성합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 fade-in">
                <a
                  href="#portfolio"
                  className="px-20 py-15 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors text-center shadow-lg shadow-blue-500/30 text-base sm:text-lg"
                >
                  프로젝트 보기
                </a>
                <a
                  href="#contact"
                  className="px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors text-center text-base sm:text-lg"
                >
                  연락하기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">About Me</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 px-4">
                제 소개를 간단히 말씀드립니다
              </p>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Profile Image Placeholder */}
                <div className="order-2 md:order-1 px-4 sm:px-0">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl">
                    YN
                  </div>
                </div>

                {/* About Text */}
                <div className="order-1 md:order-2 space-y-5 sm:space-y-6 px-4 sm:px-0">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    안녕하세요! 저는 <strong className="text-gray-900 dark:text-gray-100">5년 경력</strong>의 풀스택 개발자입니다. 
                    사용자 중심의 웹 애플리케이션을 설계하고 구현하는 것을 즐깁니다.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    새로운 기술을 배우는 것을 좋아하며, 팀과 협업하여 
                    최고의 결과물을 만들어내는 것에 열정이 있습니다.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">5+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">30+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">15+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Skills</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 px-4">
                제가 다루는 기술 스택입니다
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Frontend */}
                <div className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-gray-900 dark:text-gray-100">Frontend</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {['React / Next.js', 'TypeScript', 'TailwindCSS', 'Redux / Zustand'].map(skill => (
                      <li key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backend */}
                <div className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-gray-900 dark:text-gray-100">Backend</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {['Node.js / Express', 'Python / Django', 'PostgreSQL', 'MongoDB'].map(skill => (
                      <li key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-gray-900 dark:text-gray-100">Tools</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {['Git / GitHub', 'Docker', 'AWS / Vercel', 'Figma'].map(skill => (
                      <li key={skill} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Experience</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 px-4">
                주요 경력 및 프로젝트 경험
              </p>

              <div className="space-y-10 sm:space-y-12">
                {/* Experience Item 1 */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-gray-50 dark:ring-gray-900"></div>
                  <div className="mb-2 text-xs sm:text-sm text-blue-600 font-semibold">2021 - Present</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Senior Frontend Developer</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">Tech Company Inc.</p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>• React 기반 대규모 B2B SaaS 플랫폼 개발 및 유지보수</li>
                    <li>• 성능 최적화로 초기 로딩 시간 40% 단축</li>
                    <li>• 5명 규모 프론트엔드 팀 리드 및 코드 리뷰</li>
                  </ul>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-gray-50 dark:ring-gray-900"></div>
                  <div className="mb-2 text-xs sm:text-sm text-blue-600 font-semibold">2019 - 2021</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Full Stack Developer</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">Startup Co.</p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>• 전자상거래 플랫폼 MVP 개발 (React + Node.js)</li>
                    <li>• RESTful API 설계 및 구현</li>
                    <li>• AWS 인프라 구축 및 CI/CD 파이프라인 구성</li>
                  </ul>
                </div>

                {/* Experience Item 3 */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-300 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 ring-4 ring-gray-50 dark:ring-gray-900"></div>
                  <div className="mb-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-semibold">2018 - 2019</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Junior Developer</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">Web Agency</p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    <li>• 기업 홈페이지 및 랜딩 페이지 개발</li>
                    <li>• WordPress 커스터마이징 및 플러그인 개발</li>
                    <li>• 반응형 웹 디자인 구현</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Portfolio</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 px-4">
                제가 작업한 주요 프로젝트입니다
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Portfolio Item 1 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P1</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    React, Node.js, PostgreSQL을 활용한 온라인 쇼핑몰 플랫폼
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'PostgreSQL'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Item 2 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P2</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    Task Management Tool
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    팀 협업을 위한 프로젝트 관리 SaaS 애플리케이션
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'MongoDB'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Item 3 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-green-500 to-teal-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P3</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    Real-time Chat App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    WebSocket 기반 실시간 채팅 애플리케이션
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Socket.io', 'Redis'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Item 4 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P4</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    데이터 시각화 및 분석을 위한 대시보드
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Vue.js', 'D3.js', 'Python'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Item 5 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P5</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    Mobile Banking App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    React Native로 구현한 모바일 뱅킹 애플리케이션
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Firebase', 'Redux'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Item 6 */}
                <div className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden shadow-lg">
                    <div className="transition-transform group-hover:scale-110 duration-300">P6</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900 dark:text-gray-100">
                    AI Content Generator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                    AI 기반 콘텐츠 생성 도구
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'OpenAI', 'Tailwind'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Contact</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center mb-12 sm:mb-16 px-4">
                프로젝트 문의나 협업 제안은 언제든 환영합니다
              </p>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Info */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">Get in Touch</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                      새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 
                      언제든지 연락 주세요. 24시간 내에 답변 드리겠습니다.
                    </p>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <a href="mailto:your.email@example.com" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-blue-700 transition-colors shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold mb-1 text-sm sm:text-base text-gray-900 dark:text-gray-100">Email</div>
                        <div className="text-blue-600 hover:underline text-sm sm:text-base break-all">
                          your.email@example.com
                        </div>
                      </div>
                    </a>

                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold mb-1 text-sm sm:text-base text-gray-900 dark:text-gray-100">GitHub</div>
                        <div className="text-blue-600 hover:underline text-sm sm:text-base break-all">
                          github.com/yourusername
                        </div>
                      </div>
                    </a>

                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-700 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-blue-800 transition-colors shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold mb-1 text-sm sm:text-base text-gray-900 dark:text-gray-100">LinkedIn</div>
                        <div className="text-blue-600 hover:underline text-sm sm:text-base break-all">
                          linkedin.com/in/yourusername
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 shadow-xl">
                  <form className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-base"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        메시지
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all text-base"
                        placeholder="프로젝트나 협업에 대해 이야기해주세요..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg shadow-blue-500/30 text-base sm:text-lg"
                    >
                      메시지 보내기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="text-center md:text-left">
                <div className="text-white text-lg sm:text-xl font-bold mb-2">
                  Your<span className="text-blue-600">Name</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  © 2024 All rights reserved.
                </p>
              </div>

              <div className="flex items-center gap-5 sm:gap-6">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <a
                href="#hero"
                className="px-5 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 active:bg-gray-600 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
