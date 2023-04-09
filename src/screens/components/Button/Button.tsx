import clsx from 'clsx'
import s from './Button.module.scss'

export enum ButtonStyle {
  Purple = 'purple',
  White = 'white',
}

type ButtonStyleType = {
  style: ButtonStyle
  title: string
  action: () => void
}

const Button = ({ style, title, action }: ButtonStyleType) => {
  switch (style) {
    case ButtonStyle.Purple:
      return (
        <button type="submit" className={clsx(s.btn, s['btn--purple'])}>
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
