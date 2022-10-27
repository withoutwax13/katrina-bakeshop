import Customers from '../Components/Customers';
import Faq from '../Components/Faq';
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import Staff from '../Components/Staff';

const Home = () => {
    return(
        <main>
            <Hero/>
            <Products/>
            <Faq/>
            <Customers/>
            <Staff/>
        </main>
    )
}

export default Home