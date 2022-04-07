import './index.scss'

export interface EmptyProps {
  text?: string
}

export default function Empty(props: EmptyProps) {
  const { text = 'No Data!' } = props

  return (
    <div className='empty'>{text}</div>
  )
}