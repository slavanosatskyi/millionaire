import { PropsWithChildren } from 'react';
import classnames from 'classnames';
import Button from '../Button/Button';

import './Info.scss';

interface InfoProps {
  buttonText: string;
  className?: string;
}

function Info({ children, buttonText, className }: PropsWithChildren<InfoProps>) {
  return (
    <div className={classnames('info', className)}>
      <div className="info__image" />
      <div className="info__content">{children}</div>
      <div className="info__button"><Button text={buttonText} /></div>
    </div>
  );
}

export default Info;
