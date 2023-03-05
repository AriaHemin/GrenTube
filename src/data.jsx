import App from './app'
import { useState, useMemo } from 'react'
import { SessionContext } from './context/sessionContext'
function Data () {
  const [session, setSession] = useState()
  const ProviderValue = useMemo(() => ({ session, setSession }), [session, setSession])
  return (
    <SessionContext.Provider value={ProviderValue}>
      <App/>
    </SessionContext.Provider>
  )
}

export default Data
