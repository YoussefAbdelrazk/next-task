// import { categories } from '@/lib/data/categories'; // Uncomment when using categories data
import CategoriesCard from './categoriescard';

export default function Categories() {
  return (
    <div className='section-padding'>
      <div className='section-container'>
        <h2 className='text-3xl font-bold text-main'>Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 mt-8'>
          <CategoriesCard
            title='Project'
            description='Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium viverra pharetra risus nunc justo molestie nunc...'
          />
          <CategoriesCard
            title='Movment'
            textcolor='text-[#91B9B4]'
            description='Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium viverra pharetra risus nunc justo molestie nunc...'
          />
          <CategoriesCard
            title='Figure'
            textcolor='text-[#7D305E]'
            description='Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium viverra pharetra risus nunc justo molestie nunc...'
          />
          <CategoriesCard
            title='General'
            textcolor='text-[#735A47]'
            description='Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium viverra pharetra risus nunc justo molestie nunc...'
          />
        </div>
      </div>
    </div>
  );
}
