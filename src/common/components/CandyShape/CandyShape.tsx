import classnames from 'classnames';
import { PropsWithChildren } from 'react';

import './CandyShape.scss';

interface CandyShapeProps {
  onClick?: () => void;
  borderClass?: string;
  contentClass?: string;
}

function CandyShape({
  children, borderClass, contentClass, onClick,
}: PropsWithChildren<CandyShapeProps>) {
  return (
    <div className="candy-shape">
      <button
        className={classnames('candy-shape__border', borderClass)}
        onClick={onClick}
        type="button"
      >
        <div className={classnames('candy-shape__content', contentClass)}>
          {children}
        </div>
      </button>
      <div className={classnames('candy-shape__line', borderClass)} />
    </div>
  );
}

export default CandyShape;
