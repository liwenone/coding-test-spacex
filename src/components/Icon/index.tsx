import './index.scss'

export interface IconProps {
  type: string
}

export function Icon(props: IconProps) {
  const { type } = props

  return (<i className={`iconfont icon-${type}`}></i>)
}