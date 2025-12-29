# 요구사항 명세서 

## 1. 프로젝트 개요

* **목적**: 개인의 전문성과 신뢰도를 효과적으로 전달하는 모던한 1페이지 포트폴리오 웹사이트 구축
* **타겟 사용자**: 채용 담당자, 협업 파트너, 고객
* **컨셉**: 미니멀 · 모던 · 전문적 · 가독성 중심
* **형태**: Single Page Application(SPA) 또는 One-page Scroll

---

## 2. 기술 스택 (가이드)

* **Frontend**: HTML5, CSS3, JavaScript (또는 React / Vue 중 택1)
* **Styling**: CSS Module, SCSS, TailwindCSS 중 택1
* **반응형**: Desktop / Tablet / Mobile 대응 필수
* **배포**: 정적 호스팅 기준 (Vercel, Netlify 등)

---

## 3. 전체 구조 (Section 구성)

1. Header / Navigation
2. Hero Section (Intro)
3. About Me
4. Skills
5. Experience / Projects
6. Portfolio
7. Contact
8. Footer

---

## 4. 기능 명세 (Section별)

### 4.1 Header / Navigation

* 고정형(Header Sticky)
* 로고 또는 이름 텍스트 표시
* 섹션 앵커 기반 네비게이션
* 스크롤 위치에 따른 Active 메뉴 표시
* Mobile: 햄버거 메뉴 제공

---

### 4.2 Hero Section (Intro)

* 메인 타이틀 (이름 + 직무)
* 한 줄 핵심 메시지(Tagline)
* CTA 버튼 (예: Contact / Portfolio 이동)
* 부드러운 Fade-in 또는 Slide 애니메이션

---

### 4.3 About Me

* 간단한 자기소개 텍스트
* 프로필 이미지 (원형 또는 카드형)
* 주요 경력 요약 (숫자 기반 강조 가능)

---

### 4.4 Skills

* 기술 스택 목록 (아이콘 또는 텍스트)
* 숙련도 표현 (Progress Bar 또는 Level 표시)
* Frontend / Backend / Tools 등 그룹화

---

### 4.5 Experience / Projects

* 경력 또는 프로젝트 리스트
* 항목 구성:

  * 기간
  * 역할
  * 핵심 성과 요약
* 타임라인 UI 또는 카드형 레이아웃

---

### 4.6 Portfolio

* 프로젝트 카드 리스트
* 카드 구성 요소:

  * 썸네일 이미지
  * 프로젝트명
  * 간단 설명
* Hover 시 상세 정보 표시
* 클릭 시:

  * 외부 링크 이동 또는
  * 모달 팝업 상세 보기

---

### 4.7 Contact

* 연락 수단 표시:

  * Email
  * GitHub / LinkedIn 등
* 간단한 Contact Form (선택):

  * 이름 / 이메일 / 메시지
  * Form Submit 시 Validation

---

### 4.8 Footer

* Copyright
* 소셜 링크 아이콘
* Back to Top 버튼

---

## 5. 공통 기능 및 UX 요구사항

* 부드러운 스크롤(Scroll Behavior)
* Section 진입 시 애니메이션
* 접근성 고려 (Semantic Tag, Alt 속성)
* SEO 기본 대응 (Meta Tag)
* Lighthouse 기준 성능 80점 이상

---

## 6. 비기능 요구사항

* 크로스 브라우징: Chrome / Safari / Edge 최신 버전
* 이미지 및 리소스 Lazy Loading
* 코드 가독성 및 컴포넌트 분리

---

## 7. 산출물

* 소스 코드 Repository
* 빌드 결과물
* README (구동 방법 및 구조 설명)
