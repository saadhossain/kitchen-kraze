import FooterFeatures from './main/FooterFeatures'
import FooterQuickLinks from './main/FooterQuickLinks'
import FooterSubscribe from './main/FooterSubscribe'

const Footer = () => {
    return (
        <footer>
            <div className='w-full bg-gray-100 text-primary'>
                <FooterFeatures/>
                <FooterSubscribe/>
                <FooterQuickLinks/>
            </div>
        </footer>
    )
}

export default Footer