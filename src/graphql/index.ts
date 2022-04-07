import { gql } from "@apollo/client"
import { DEFAULT_PAGE_SIZE } from "../constant/app"

export const LAUNCHES_PAST_QUERY = gql`
  query GetLaunchesPastList($limit: Int = ${DEFAULT_PAGE_SIZE}, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`

export const LAUNCHES_NEXT_QUERY = gql`
  query GetLaunchNext {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`
