# VitePress 오프라인 데모

초보자를 위한 VitePress 튜토리얼 및 데모 사이트입니다.

## 특징

- 📚 **한국어 문서**: 모든 내용이 한국어로 작성
- 🚀 **완전한 데모**: VitePress의 모든 기능을 포함한 예제
- 📦 **오프라인 지원**: node_modules 포함으로 인터넷 없이도 실행 가능
- 🎨 **Mermaid 다이어그램**: 다양한 다이어그램 예제 포함
- ⚡ **Vue 컴포넌트**: 인터랙티브한 예제들

## 빠른 시작

### 1. 개발 서버 실행
```bash
npm run docs:dev
```

### 2. 빌드
```bash
npm run docs:build
```

### 3. 프로덕션 미리보기
```bash
npm run docs:preview
```

## 프로젝트 구조

```
vitepress-offline/
├── docs/                      # 문서 소스
│   ├── .vitepress/            # VitePress 설정
│   │   └── config.js          # 사이트 설정
│   ├── guide/                 # 가이드 섹션
│   │   ├── getting-started.md # 시작하기
│   │   ├── installation.md    # 설치 가이드
│   │   └── configuration.md   # 설정 가이드
│   ├── examples/              # 예제 섹션
│   │   ├── basic.md          # 기본 마크다운
│   │   ├── advanced.md       # 고급 기능
│   │   ├── components.md     # Vue 컴포넌트
│   │   └── mermaid.md        # Mermaid 다이어그램
│   ├── api/                  # API 문서
│   │   ├── introduction.md   # API 소개
│   │   └── config.md         # 설정 옵션
│   └── index.md              # 홈페이지
├── package.json              # 프로젝트 설정
├── .gitignore               # Git 무시 파일
├── CLAUDE.md                # Claude Code 가이드
└── README.md                # 이 파일
```

## 포함된 내용

### 📖 가이드 문서
- VitePress 소개 및 기본 사용법
- 설치 및 초기 설정 방법
- 고급 설정 및 커스터마이징

### 🎯 실용적인 예제
- **기본 마크다운**: 제목, 목록, 링크, 이미지 등
- **고급 기능**: 수학 공식, 코드 그룹, 커스텀 컨테이너
- **Vue 컴포넌트**: 인터랙티브한 카운터, 동적 리스트 등
- **Mermaid 다이어그램**: 플로우차트, 시퀀스, 간트 차트 등

### 🛠 개발 도구
- ESM 모듈 지원
- Mermaid 플러그인 통합
- 다크/라이트 모드 지원
- 검색 기능 (로컬)

## 기술 스택

- **VitePress** `^1.6.4`: 정적 사이트 생성기
- **Mermaid** `^11.10.1`: 다이어그램 라이브러리
- **vitepress-plugin-mermaid** `^2.0.17`: Mermaid 플러그인

## 오프라인 사용

이 프로젝트는 오프라인 환경에서의 사용을 고려하여 다음과 같이 설정되었습니다:

- `node_modules` 디렉토리가 git에 포함됨
- 모든 의존성이 사전에 설치됨
- 인터넷 연결 없이도 개발 서버 실행 가능

## 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge

## 라이선스

ISC License

## 기여

버그 리포트나 기능 제안이 있으시면 GitHub Issues를 통해 알려주세요.

---

**VitePress로 만든 오프라인 지원 데모 사이트** 🚀