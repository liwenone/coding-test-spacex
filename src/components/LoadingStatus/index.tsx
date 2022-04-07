import { ApolloError } from '@apollo/client/errors'
import './index.scss'

export interface LoadingStatusProps {
  loading?: boolean,
  error?: ApolloError,
  loadingText?: string
  errorText?: string
}

export default function LoadingStatus(props: LoadingStatusProps) {
  const {
    loading,
    error,
    loadingText = 'Loading...',
    errorText = 'Error!'
  } = props

  if (!loading && !error) {
    return null
  }

  return (
    <div className='loading-status'>
      {loading ? loadingText : ''}
      {!loading && error ? errorText : ''}
    </div>
  )
}