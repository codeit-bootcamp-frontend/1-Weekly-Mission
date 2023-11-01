import Header from '../Header/Header'
import getSample from '../../api'
import useAsync from '../../Hooks/useAsync'

import SearchBar from '../SearchBar/SearchBar'
import CardList from '../CardList/CardList'
import Main from '../Main/Main'
import styled from 'styled-components'

function Folder() {
  const [data, isLoading, LoadingError, getSampleAsync] = useAsync(() =>
    getSample('folder')
  )

  const folder = data?.folder
  const name = folder?.name
  const owner = folder?.owner
  const links = folder?.links

  return (
    <>
      {data && <Header name={name} owner={owner} />}

      <Main>
        <SearchBar />
        {data && <CardList links={links} />}
      </Main>
    </>
  )
}

export default Folder
