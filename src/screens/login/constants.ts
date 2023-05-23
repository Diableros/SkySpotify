export enum PlaceholderText {
  Email = 'e-mail',
  Password = 'Пароль',
  PasswordConfirm = 'Повторите пароль',
}

export enum FieldLength {
  EmailMinLength = '6',
  EmailMaxLength = '30',

  PasswordMinLength = '8',
  PasswordMaxLength = '20',
}

export enum ErrorText {
  ShortEmail = 'Слишком короткий адрес',
  LongEmail = 'Слишком длинный адрес',

  ShortPassword = 'Слишком короткий пароль',
  LongPassword = 'Слишком длинный пароль',

  MismatchPasswords = 'Пароли не совпадают',

  Required = 'Поле обязательно для заполнения',

  UserNotFound = 'Не верный пользователь или пароль',

  UnknownError = 'Неизвесная ошибка',
  SignUpFiled = 'Регистрация не пройдена',
}

export enum ButtonTitle {
  SignUpLoader = 'Отправка данных...',
  SignUpTitle = 'Зарегистрироваться',

  LoginLoader = 'Логинимся',
  LoginTitle = 'Войти',
}
