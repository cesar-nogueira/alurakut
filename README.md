# Alurakut Base

Seja bem vindo ao projeto base do Alurakut !!! Passos fundamentais:
- Marque esse projeto com uma estrela
- Siga as instruções das aulas e conteúdo extra da Imersão React Next.js
- Faça o deploy na Vercel e compartilhe

![Capa do Projeto](https://gerador-de-imagens-omariosouto-alura-challenges.vercel.app/api/image-generator?url=https://alurakut-eta.vercel.app/&v=2)

## Como colocar o meu projeto na vitrine da imersão?
- Vá na aba "Sobre" ou "About" do seu projeto no menu lateral que fica na esquerda dentro do repositório no GitHub
- Adicione a tag "alurakut" e a tag "imersao-react"
- E pronto!

## Onde está o Layout base?
- [Link](https://www.figma.com/file/xHF0n0qxiE2rqjqAILiBUB/Alurakut?node-id=58%3A0)


### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
