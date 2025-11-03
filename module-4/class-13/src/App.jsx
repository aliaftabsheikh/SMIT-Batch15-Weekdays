
import { Button } from './components/ui/button'
import { ButtonGroup } from './components/ui/button-group'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Spinner } from './components/ui/spinner'

function App() {

  return (
  <>

{/* <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu> */}

<Spinner className='animate-spin h-5 w-5 text-blue-500' />

    <div className='flex justify-center items-center h-screen bg-gray-100'>
    

{/* <Button variant='apna_button'>Bhejdo chalan !</Button>
<Button className='hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out animate-pulse' variant='destructive'>Bhejdo chalan !</Button>
<Button variant='default'>Bhejdo chalan !</Button>
<Button variant='destructive' size='xl'>Bhejdo chalan !</Button> */}


<ButtonGroup orientation='vertical'>


{/* <Button variant='apna_button' className='rounded-tr-none rounded-br-none' >Bhejdo chalan !</Button>
<Button variant='apna_button' className='rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none' >Rehne do chalan !</Button>
<Button variant='apna_button' className='rounded-tl-none rounded-bl-none' >Rehne do chalan !</Button> */}

<Button variant='apna_button'  >Bhejdo chalan !</Button>
<Button variant='apna_button'  >Rehne do chalan !</Button>
<Button variant='apna_button'  >Rehne do chalan !</Button>
<Button variant='apna_button'  >Rehne do chalan !</Button>




</ButtonGroup>

    
    </div>

    </>
  )
}

export default App
