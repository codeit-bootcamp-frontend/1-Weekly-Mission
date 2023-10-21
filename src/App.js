import { useEffect, useState } from "react"
import { getFolderData, getUserInfos } from "./APIs/api"
import { CardList } from "./components/Card/CardList"
import GlobalNavBar from "./components/GnB/GnB"

function App() {
  return (
    <div>
      <GlobalNavBar />
      <CardList />
    </div>
  )
}

export default App