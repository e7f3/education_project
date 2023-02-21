import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'

import classes from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

export interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      className={classNames(classes.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
