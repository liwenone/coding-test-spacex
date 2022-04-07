import { useQuery } from "@apollo/client"
import LaunchItem from "../LaunchItem"
import { LAUNCHES_NEXT_QUERY } from "../../../graphql"
import Empty from "../../../components/Empty"
import Card from "../../../components/Card"
import LoadingStatus from "../../../components/LoadingStatus"
import './index.scss'


export default function LauncheNext() {
  const { loading, error, data } = useQuery(LAUNCHES_NEXT_QUERY)

  return (
    <Card className="launch-next" title="Next Launch">
      { !loading && !error && (
        data.launchNext ? <LaunchItem data={data.launchNext} /> : <Empty /> )
      }

      <LoadingStatus loading={loading} error={error} />
    </Card>
  )
}