import React, {createContext, useState} from 'react'

export const DataContext = createContext();
function ContextComp({ children }) {
    const [userDetailsGmail, setUserDetailsGmail] = useState();
    const [userToken, setUserToken] = useState(null);
    const [currentUser, setCurrentUser] = useState()
 

    const updateUserDetails = (data) => {
      console.log('ya tha context data', data);
      setUserDetailsGmail(data)
    };

    const userTokenSave = (code) => {
     console.log('code at context==========>', code );
     setUserToken(code)
    }

    const currentUserDetails = (data) => {
      console.log('currrent user cotext', data);
       setCurrentUser(data)
    }

  return (
    <DataContext.Provider value={{userDetailsGmail, updateUserDetails, userTokenSave, userToken, currentUser, currentUserDetails}} >
        {children}
    </DataContext.Provider>
  )
}

export default ContextComp;