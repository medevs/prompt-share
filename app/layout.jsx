import '@styles/globals.css'

export const metadata = {
  title: 'PromptShare',
  description: "PromptShare is a specialized platform for sharing and discovering well-crafted prompts."
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradiant' />
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout