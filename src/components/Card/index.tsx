import classnames from 'classnames'
import { ReactNode } from 'react'
import './index.scss'

export interface CardProps {
  className?: string,
  title: string,
  children: ReactNode | ReactNode[] | null
}

export default function Card(props: CardProps) {
  const {className, title, children } = props

  return (
    <div className={classnames('card', className)}>
      <header className="card__header">{title}</header>
      <div className="card__container">{children}</div>
    </div>
  )
}