import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
    const {
        element = document.querySelector('#root > .app') as Element,
        children,
    } = props;
    return createPortal(children, element);
};

export default Portal;
