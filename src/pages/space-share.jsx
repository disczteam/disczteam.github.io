import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const GET_USER_SPACE = gql`
  query {
    user {
      id
      user_name
      profile_picture_url
      profile {
        space {
          preview_url
          title
        }
      }
    }
  }
`

export const SpaceSharePage = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_USER_SPACE)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  const user = data.user
  console.log(data.user)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        <img
          src={user.profile.space.preview_url}
          alt="space preview"
          className="w-[400px] rounded-md"
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col 
        items-center justify-between pt-2 pb-4 shadow-2xl shadow-indigo-500/50"
        >
          <div>
            <div className="bg-dz-neutral-900 rounded-full text-center">
              {user.profile.space.title}
            </div>
            <div className="flex items-center justify-center space-x-2">
              <img src={user.profile_picture_url} alt="profile" className="w-6 h-6 rounded-full" />
              <div className="font-bold">{user.user_name}</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold mb-4">Interace with this space on Discz</div>
            <img src="/img/app_store_download.png" alt="app store download" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
