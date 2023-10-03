import classnames from 'classnames';
import { PropsWithChildren } from 'react';

import './CandyShape.scss';

interface CandyShapeProps {
  borderClass?: string;
  contentClass?: string;
}

function CandyShape({ children, borderClass, contentClass }: PropsWithChildren<CandyShapeProps>) {
  return (
    <div className="candy-shape">
      <div className={classnames('candy-shape__line', borderClass)} />
      <div className={classnames('candy-shape__border', borderClass)}>
        <div className={classnames('candy-shape__content', contentClass)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CandyShape;
