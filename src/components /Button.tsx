import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonPrpos {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonPrpos) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
