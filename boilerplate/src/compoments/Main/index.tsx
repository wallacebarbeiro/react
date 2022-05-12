import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/icon-192.png" alt="Imagem de um átomo" />
    <S.Title>React Avançado</S.Title>
    <S.description>
      TypeScript, React.js, Next.js e Styled Components
    </S.description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para a tela com o código"
    />
  </S.Wrapper>
)

export default Main
