import { FieldErrors } from 'react-hook-form/dist/types'
import sb from './SnackBox.module.scss'
import s from './Snack.module.scss'

type SnackPropsType = {
  type: keyof typeof s
  data: FieldErrors<LoginFieldsType>
}

const Snack = ({ type, data }: SnackPropsType) => {
  return (
    <div className={sb.snackBox}>
      {Object.keys(data).map((key) => (
        <div key={key} className={s[type]}>
          {`Поле "
					${(data[key as keyof LoginFieldsType]?.ref as HTMLInputElement).placeholder}
					" обязательное!
					${data[key as keyof LoginFieldsType]?.message}`}
        </div>
      ))}
    </div>
  )
}

export default Snack
