import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: 'VitePress 데모',
  description: '초보자를 위한 VitePress 튜토리얼',
  
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '시작하기', link: '/guide/getting-started' },
      { text: '예제', 
        items: [
          { text: '기본 예제', link: '/examples/basic' },
          { text: '고급 예제', link: '/examples/advanced' },
          { text: '컴포넌트', link: '/examples/components' },
          { text: 'Mermaid 다이어그램', link: '/examples/mermaid' }
        ]
      },
      { text: 'API', link: '/api/introduction' }
    ],

    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '소개', link: '/guide/getting-started' },
          { text: '설치', link: '/guide/installation' },
          { text: '기본 설정', link: '/guide/configuration' }
        ]
      },
      {
        text: '예제',
        items: [
          { text: '기본 예제', link: '/examples/basic' },
          { text: '고급 예제', link: '/examples/advanced' },
          { text: '컴포넌트', link: '/examples/components' },
          { text: 'Mermaid 다이어그램', link: '/examples/mermaid' }
        ]
      },
      {
        text: 'API 참조',
        items: [
          { text: '소개', link: '/api/introduction' },
          { text: '설정 옵션', link: '/api/config' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'VitePress로 만든 데모 사이트입니다.',
      copyright: 'Copyright © 2024'
    }
  }
})