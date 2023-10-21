import { useEffect, useState } from "react"
import { getFolderData, getUserInfos } from "./APIs/api"
import { CardList } from "./components/Card/CardList"

function App() {
  return (
    <div>
      <CardList />
    </div>
  )
}

export default App