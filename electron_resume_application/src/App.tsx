import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentPage } from 'Data/Selectors/Navigation';
import { getAuthToken, getCurrentUser } from 'Data/Selectors/User';
import { Pages } from 'Data/Objects/State';
import MainPage from 'Components/MainPage';
import LoginPage from 'Components/Login';
import 'Styles/App.less'

export default function App() {
  const currentPage = useSelector(getCurrentPage);
  const currentUser = useSelector(getCurrentUser);
  const authToken = useSelector(getAuthToken);
  useEffect(() => {
    console.log('currentUser',currentUser, 'currentPage', currentPage, 'authToken', authToken)
  }, [currentPage, currentUser, authToken])
  const renderMainContent = () => {
      if(currentPage === Pages.LOGIN || !currentUser || !authToken) {
        return <LoginPage />;
      }
      return <MainPage />;
  }

  return (
    <div className="App">
      { renderMainContent() }
    </div>
  )
}
