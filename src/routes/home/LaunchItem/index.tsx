import dayjs from 'dayjs'
import { Icon } from '../../../components/Icon'
import './index.scss'


export default function LaunchItem(props: any) {
  const { data } = props

  return (
    <div className='launch-item'>
      { data.launch_success !== null && (
         data.launch_success ? 
          <div className='launch-item__status success'>SUCCESS</div> :
          <div className='launch-item__status failure'>FAILURE</div>
        )
      }

      <div className='launch-item__base-info'>
        <div className='launch-item__mission-name'>{data.mission_name}</div>
        <div className='launch-item__launch-date'>
          <Icon type="time"/>{dayjs(data.launch_date_local).format('YYYY-MM-DD hh:mm')}
        </div>
        <div className='launch-item__launch-site'>
          <Icon type="address"/>{data.launch_site.site_name_long}
        </div>

        <div className='launch-item__links'>
          {data.links.article_link && (
            <a href={ data.links.article_link} target="_blank" rel="noreferrer">Article</a>
          )}
          {data.links.video_link && (
            <a href={ data.links.video_link} target="_blank" rel="noreferrer">Video</a>
          )}
        </div>
      </div>

      <div className='launch-item__rocket-info'>
        <div className='launch-item__rocket-name'>
          <span>Rocket Name: </span>{data.rocket.rocket_name}
        </div>
        <div className='launch-item__rocket-type'>
          <span>Rocket Type: </span>{data.rocket.rocket_type}
        </div>
      </div>

      <div className='launch-item__detail'>{data.details || '-'}</div>
    </div>
  )
}