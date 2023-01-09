import BBQMenu from '../components/HomePage/BBQMenu';
import PopularMenu from '../components/HomePage/PopularMenu';
import MainLayout from './../layouts/MainLayout';
export default function Home() {
  return (
    <>
      <MainLayout>
        <PopularMenu/>
        <BBQMenu/>
      </MainLayout>
    </>
  )
}
