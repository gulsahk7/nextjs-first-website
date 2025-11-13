import Banner from "./components/Banner";
import TextHeader from "./components/TextHeader";
import PhotoGallery from "./components/PhotoGallery";
import ProductCart from "./components/ProdcutCart";

export default function page() {
  return (
    <div className="space-y-12 mb-12">
      <Banner />
      <TextHeader />
      <PhotoGallery />
      <ProductCart />
    </div>
  );
}
