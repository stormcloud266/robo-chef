import { useAuth } from 'src/auth'

const HomePage = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
      {/* MetaTags, h1, paragraphs, etc. */}
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={() => signUp()}>sign up</button>
      <br />
      <button onClick={() => logIn()}>log in</button>
      <br />
      <button onClick={() => logOut()}>sign out</button>
    </>
  )
}

export default HomePage
