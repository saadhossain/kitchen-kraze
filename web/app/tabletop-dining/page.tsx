import ProductSingleLoader from '../components/Loader/ProductSingleLoader';
import { AppName } from '../config/config';
import { metadata } from '../layout';

const TabletopAndDining = () => {
    metadata.title= `Tabletop and Dining | ${AppName}`;
  metadata.description = `Tabletop and Dining | Find Everything you need for Tabletop and Dining.`
    return (
        <div>
          <ProductSingleLoader/>
        </div>
    )
}

export default TabletopAndDining