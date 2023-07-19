import { FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Skeleton.module.scss'

export enum SkeletonPurpose {
  'ARTICLE' = 'article',
}

interface SkeletonProps {
  purpose?: SkeletonPurpose
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { purpose = SkeletonPurpose.ARTICLE } = props

  switch (purpose) {
    case SkeletonPurpose.ARTICLE:
      return (
        <div className={classes.Skeleton}>
          <div className={classes.SkeletonHeader}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonHeaderImage,
              ])}
            />
            <div className={classes.SkeletonHeaderInfo}>
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderTitle,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderSubtitle,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderViews,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderDate,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderTags,
                ])}
              />
            </div>
          </div>
          <div className={classes.SkeletonBody}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />
          </div>
        </div>
      )
    default:
      return null
  }
})
