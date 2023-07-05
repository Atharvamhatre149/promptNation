 
import '@styles/globals.css'
import Nav from '@Components/Nav';
import Provider from '@Components/Provider';

export const metadata={
    title:"Promptnation",
    description:"Discover & Share Best AI Prompts"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
              <Nav/>
              {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;
