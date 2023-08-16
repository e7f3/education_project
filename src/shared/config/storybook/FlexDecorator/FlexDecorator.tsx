import { Story } from '@storybook/react'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './FlexDecorator.module.scss'

export enum FlexDecoratorVariant {
  CENTERED = 'centered',
  DEFAULT = 'default',
}

export const FlexDecorator =
  (variant: FlexDecoratorVariant) => (StoryComponent: Story) =>
    (
      <div
        className={classNames(classes.FlexDecorator, {}, [classes[variant]])}
      >
        <StoryComponent />
      </div>
    )
