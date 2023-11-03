import useAsync from '../Hooks/useAsync'
import { getUser } from '../api'
import AddLink from '../components/AddLink/AddLink'
import FolderAndLink from '../components/FolderAndLink/FolderAndLink'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Nav from '../components/Nav/Nav'
import SearchBar from '../components/SearchBar/SearchBar'

function FolderPage() {
  const [data, isLoading, hasError] = useAsync(() => getUser(1))

  if (!data) return null
  if (isLoading) return <div>로딩 중입니다.</div>
  if (hasError) return <div>에러가 발생했습니다.</div>

  const { email, image_source } = data.data[0]

  return (
    <>
      <Nav path="folder" email={email} profileImageSource={image_source} />
      <AddLink />
      <Main>
        <SearchBar />
        <FolderAndLink />
      </Main>
      <Footer />
    </>
  )
}

export default FolderPage
