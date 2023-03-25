import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
    const {
        element = document.body,
        children,
    } = props;
    return createPortal(children, element);
};

export default Portal;
