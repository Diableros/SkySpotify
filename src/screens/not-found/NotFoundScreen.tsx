import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonStyle } from '@/screens/shared/button/Button';
import s from './NotFoundScreen.module.scss';
import smileCrying from '@/img/smileCrying.png';

const NotFoundScreen = () => {
  const navigate = useNavigate();

  return (
    <main className={s.notFound}>
      <h1 className={s.notFoundTitle}>404</h1>
      <h2 className={s.notFoundSubTitle}>
        Страница не найдена <img src={smileCrying} alt="Crying smile" />
      </h2>
      <p className={s.notFoundText}>
        Возможно, она была удалена или перенесена на другой адрес
      </p>
      <Button
        style={ButtonStyle.Purple}
        title="Вернуться на главную"
        action={() => navigate('/')}
      />
    </main>
  );
};

export default NotFoundScreen;
