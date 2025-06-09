
import BrandShop from '../components/BrandShop';

export default function Home() {
  const data = {
    name: 'BeispielBrand',
    location: 'Berlin',
    fans: 123,
    bio: 'Das ist eine Beispiel-Brand.',
    reelUrl: '',
    dropDate: '2025-07-01',
    dropProducts: ['Item A', 'Item B'],
    products: [
      { name: 'Produkt 1', price: '€49', image: '' },
      { name: 'Produkt 2', price: '€59', image: '' },
      { name: 'Produkt 3', price: '€69', image: '' }
    ]
  };
  return <BrandShop {...data} />;
}
