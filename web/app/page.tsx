import ProductsLoader from './components/Loader/ProductsLoader';

export default function Home() {
  return (
    <div>
      <ProductsLoader cardCount={4}/>
    </div>
  )
}
