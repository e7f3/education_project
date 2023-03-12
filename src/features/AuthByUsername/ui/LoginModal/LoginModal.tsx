import { FC, memo, Suspense } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'

import classes from './LoginModal.module.scss'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

export interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = memo((props) => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      className={classNames(classes.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
})
