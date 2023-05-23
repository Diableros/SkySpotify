import clsx from 'clsx'
import s from './Button.module.scss'

export enum ButtonStyle {
  Purple = 'purple',
  White = 'white',
}

type ButtonStyleType = {
  style: ButtonStyle
  title: string
  disabled?: boolean
  action?: () => void
}

const Button = ({
  style,
  title,
  disabled = false,
  action,
}: ButtonStyleType) => {
  switch (style) {
    case ButtonStyle.Purple:
      return (
        <button
          type="submit"
          className={clsx(
            s.btn,
            s['btn--purple'],
            disabled && s['btn--disabled']
          )}
          onClick={action}
        >
          {title}
        </button>
      )

    case ButtonStyle.White:
      return (
        <button
          type="button"
          className={clsx(s.btn, s['btn--white'])}
          onClick={action}
        >
          {title}
        </button>
      )

    default:
      return <div>Smth wrong...</div>
  }
}

export default Button
