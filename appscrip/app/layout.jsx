import React from 'react'
export const metadata = {
    title:"appscrip",
    descriptiom:"test"
    
}

const Layout = ({children}) => {
  return (
   
      <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />

            </div>
            <main className='app'>
                {children}
            </main>
        </body>
      </html>
  
  )
}

export default Layout
