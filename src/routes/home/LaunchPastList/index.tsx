import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { LAUNCHES_PAST_QUERY } from "../../../graphql"
import Empty from "../../../components/Empty"
import { DEFAULT_PAGE_SIZE } from "../../../constant/app"
import { useReachBottom } from "../../../utils/hooks"
import Card from "../../../components/Card"
import LoadingStatus from "../../../components/LoadingStatus"
import LaunchItem from "../LaunchItem"
import './index.scss'


export default function LaunchPastList() {
  const [offset, setOffset] = useState(0)

  const { loading, error, data, fetchMore } = useQuery(LAUNCHES_PAST_QUERY, {
    variables: {
      offset,
    }
  })

  useEffect(() => {
    if (offset === 0) {
      return
    }

    fetchMore({
      variables: {
        offset,
      }
    })
  }, [fetchMore, offset])

  useReachBottom(() => {
    if (loading) {
      return
    }
    setOffset(offset + DEFAULT_PAGE_SIZE)
  })

  return (
    <Card title="Past Launch">
      { !loading && !error && (
         data.launchesPast?.length > 0 ? (
          data.launchesPast.map((item: any) => <LaunchItem key={item.id} data={item} />)
         ) : <Empty />
      )}

      <LoadingStatus loading={loading} error={error} />
    </Card>
  )
}

