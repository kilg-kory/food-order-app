import React, { FC, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import classes from './modal.module.css'

const Backdrop:FC<{onClick?: () => void}> = ({ onClick = () => {} }) => (
    <div className={classes.backdrop} onClick={onClick} />
)

const ModalOverlay:FC<{children?: JSX.Element | JSX.Element[] | false[] }> = ({ children }) => {
  return (
      <div className={classes.modal}>
        <div className={classes.content} >
            {children}
        </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal:FC<{children?: ReactElement | ReactElement[] | false[], onClose?: () => void}> = ({ children, onClose }) => {
  return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClose}/>, portalElement!)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!)}
        </>
  )
}

export default Modal
